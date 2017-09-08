import React from 'react'

const NetworkIcon = ({iconStyles: {content, ...style}}) => (
  <div id='__network-icon__'>
    <icon
      style={style}
      dangerouslySetInnerHTML={{__html: content}}
    />
    <style jsx>{`
      #__network-icon__ {
        display: block;
        margin-right: 1em;
      }
    `}</style>
  </div>
)

export default NetworkIcon
