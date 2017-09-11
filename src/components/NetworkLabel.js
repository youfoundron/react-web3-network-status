// @flow
import React from 'react'

type Props = {
  name: string,
  type: string,
  color: string
}

const NetworkLabel = ({name, type, color}: Props) => (
  <div id='__network-label__' style={{color}}>
    <span>{name}</span>
    <span>{type}</span>
    <style jsx>{`
      #__network-label__ {
        display: flex;
        flex-direction: column;
        text-align: left;
      }
    `}</style>
  </div>
)

export default NetworkLabel
