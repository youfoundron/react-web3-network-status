import React from 'react'

import NetworkLink from './NetworkLink'
import NetworkIcon from './NetworkIcon'
import NetworkLabel from './NetworkLabel'

const NetworkStatus = ({iconStyles, name, type, color, ...props}) => (
  <NetworkLink {...props}>
    <NetworkIcon iconStyles={iconStyles} />
    <NetworkLabel name={name} type={type} color={color} />
  </NetworkLink>
)

export default NetworkStatus
