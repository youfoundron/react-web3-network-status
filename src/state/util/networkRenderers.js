// @flow
import React from 'react'
import networksConfig from '../../networksConfig'
import NetworkStatus from '../../components/NetworkStatus'

const accumulateRenderers = (renderers, {id, ...networkConfig}): {} => {
  renderers[id] = props => <NetworkStatus
    {...props}
    {...networkConfig}
  />
  return renderers
}

export default networksConfig.reduce(accumulateRenderers, {})
