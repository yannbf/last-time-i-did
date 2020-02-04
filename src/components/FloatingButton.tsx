import styled, { keyframes, css } from 'styled-components'
import { IconName } from '@fortawesome/fontawesome-svg-core'

import Icon from './Icon'

const popIn = keyframes`
  0% {
    transform: scale(0);
  }
  45% {
    transform: scale(0);
  }
  90% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
`

const popOut = keyframes`
  0% {
    transform: scale(1);
  }
  15% {
    transform: scale(0);
  }
  100% {
    transform: scale(0);
  }
`

const FloatingButtonStyled = styled.button`
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
  border-radius: 50%;
  background: white;
  width: 4rem;
  height: 4rem;
  border: none;
  box-shadow: 0px 9px 12px 3px rgba(2, 8, 20, 0.1);
  text-align: center;
  position: fixed;
  animation: ${props =>
    props.isShowing
      ? css`
          ${popIn} 0.5s ease-in
        `
      : css`
          ${popOut} 0.5s ease-in forwards
        `};
`

type Props = {
  icon: IconName
  isShowing?: boolean
  onClick: Function
}

export const FloatingButton = ({ icon, isShowing = true, onClick }: Props) => (
  <FloatingButtonStyled isShowing={isShowing} onClick={onClick}>
    <Icon icon={icon} size="2x" fixedWidth />
  </FloatingButtonStyled>
)