import { combineReducers } from 'redux'

import web3 from './web3'
import network from './network'
import accounts from './accounts'
import defaultAccount from './defaultAccount'

export default combineReducers({
  web3,
  network,
  accounts,
  defaultAccount
})
