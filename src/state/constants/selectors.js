// @flow
import type { State } from '../../util/initialState'
import defaultRenderers from '../util/networkRenderers'

export const selectNetworkRenderer = (state: State, ownProps) => {
  const { networkRenderers: customRenderers } = ownProps
  const { network: { id, listening }, defaultAccount } = state
  const networkRenderers = Object.assign({}, defaultRenderers, customRenderers)

  if (!listening) {
    return networkRenderers['not-listening']
  } else if (!defaultAccount) {
    return networkRenderers['account-not-unlocked']
  } else {
    return networkRenderers[id]
  }
}
