import React from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

const Icon: React.FC<FontAwesomeIconProps> = props => (
  <FontAwesomeIcon {...props} size={props.size || '5x'} />
)

export default Icon
