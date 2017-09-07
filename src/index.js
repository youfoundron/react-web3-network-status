import React from 'react'
import { Provider } from 'react-redux'

import store from './state/store'
import Web3NetworkStatus from './Web3NetworkStatus'

export default props => (
  <Provider store={store}>
    <Web3NetworkStatus {...props} />
  </Provider>
)
