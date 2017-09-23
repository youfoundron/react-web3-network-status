import networkRenderers from './state/util/networkRenderers'

const Stateless = ({networkId, address, ...props}) => (
  networkId == null
  ? networkRenderers['not-listening']
  : (networkRenderers[networkId] || networkRenderers['null'])
)({ ...props, defaultAccount: address })

export default Stateless
