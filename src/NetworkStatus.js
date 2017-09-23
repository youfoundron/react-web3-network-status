import { connect } from 'react-redux'
import { selectNetworkRenderer } from './state/constants/selectors'

const NetworkStatus = ({ dispatch, networkRenderer, ...props }) => (
  networkRenderer(props)
)

const mapStateToProps = (state, ownProps) => ({
  defaultAccount: state.defaultAccount,
  networkRenderer: selectNetworkRenderer(state, ownProps)
})

export default connect(
  mapStateToProps
)(NetworkStatus)
