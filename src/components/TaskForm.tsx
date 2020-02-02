import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import dayjs from 'dayjs'

import { Modal } from './Modal'
import { IconList } from './IconList'
import Icon from './Icon'

const TaskSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short.')
    .max(25, 'Name is too long.')
    .required('Required'),
  date: Yup.date()
    .nullable()
    .max(
      dayjs()
        .add(1, 'minute')
        .format('YYYY-MM-DDTHH:mm'),
      'Do not select dates in the future.'
    )
    .required('Required'),
})

const FieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
`

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`

const StyledField = styled(Field)`
  width: 12rem;
  height: 1.5rem;
`

const StyledIcon = styled(Icon)`
  align-self: center;
  cursor: pointer;
`

const SubmitButton = styled.button`
  width: 6rem;
  align-self: center;
  padding: 1rem;
  font-size: 1rem;
  background: white;
  border-radius: 0.75rem;
`

export const TaskForm = ({ formData, onSubmit }) => {
  const { name = '', date = new Date(), icon = 'coffee' } = formData
  const [selectedIcon, setSelectedIcon] = useState(icon)
  const [openIconList, setOpenIconList] = useState(false)

  return (
    <>
      <Formik
        initialValues={{ name, date: dayjs(date).format('YYYY-MM-DDTHH:mm') }}
        validationSchema={TaskSchema}
        onSubmit={({ name, date }) =>
          onSubmit({
            id: formData.id,
            name,
            date,
            icon: selectedIcon,
          })
        }
      >
        {({ isValid, isSubmitting }) => (
          <StyledForm>
            <StyledIcon onClick={() => setOpenIconList(true)} icon={selectedIcon} />
            <FieldSet>
              <label htmlFor="name">Name</label>
              <StyledField type="text" name="name" placeholder="Task name.." />
              <ErrorMessage name="name" component="div" />
            </FieldSet>

            <FieldSet>
              <label htmlFor="name">Last time you did it</label>
              <StyledField type="datetime-local" name="date" />
              <ErrorMessage name="date" component="div" />
            </FieldSet>

            <SubmitButton type="submit" disabled={!isValid || isSubmitting}>
              Save
            </SubmitButton>
          </StyledForm>
        )}
      </Formik>
      <Modal small isOpen={openIconList} onClose={() => setOpenIconList(false)}>
        <IconList
          onIconSelected={name => {
            setSelectedIcon(name)
          }}
        />
      </Modal>
    </>
  )
}