import { connect } from 'react-redux'
import { selectNetworkRenderer } from './state/constants/selectors'

const Web3NetworkStatus = ({ dispatch, networkRenderer, ...props }) => (
  networkRenderer(props)
)

const mapStateToProps = (state, ownProps) => ({
  networkRenderer: selectNetworkRenderer(state, ownProps)
})

export default connect(
  mapStateToProps
)(Web3NetworkStatus)
