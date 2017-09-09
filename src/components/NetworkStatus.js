import React from 'react'

import NetworkIcon from './NetworkIcon'
import NetworkLabel from './NetworkLabel'

const NetworkStatus = ({iconStyles, name, type, color, ...props}) => (
  <div id='__network-status__' {...props}>
    <NetworkIcon iconStyles={iconStyles} />
    <NetworkLabel name={name} type={type} color={color} />
    <style jsx>{`
      #__network-status__ {
        display: flex;
        align-items: center;
        line-height: 1em;
        font-size: 12px
        font-weight: 700;
        font-family: helvetica, arial, sans-serif
        text-transform: capitalize;
        text-decoration: none;
      }
    `}</style>
  </div>
)

export default NetworkStatus
