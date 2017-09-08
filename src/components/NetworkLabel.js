import React from 'react'

const NetworkLabel = ({name, type, color}) => (
  <div id='__network-label__' style={{color}}>
    <span>{name}</span>
    <span>{type}</span>
    <style jsx>{`
      #__network-label__ {
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </div>
)

export default NetworkLabel
