import React from 'react'
import { Provider } from 'react-redux'

import store from './state/store'
import NetworkStatus from './NetworkStatus'

const ReactWeb3NetworkStatus = props => (
  <Provider store={store}>
    <NetworkStatus {...props} />
  </Provider>
)

if (typeof window === 'object') {
  window.ReactWeb3NetworkStatus = ReactWeb3NetworkStatus
}

export default ReactWeb3NetworkStatus
