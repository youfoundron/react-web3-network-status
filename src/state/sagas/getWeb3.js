import { put, call } from 'redux-saga/effects'

import types from '../constants/actionTypes'
import getWeb3Async from '../util/getWeb3Async'

export default function * getWeb3 () {
  const web3 = yield call(getWeb3Async)

  yield put.resolve({
    type: types.RECEIVE_WEB3_INSTANCE,
    payload: web3
  })
}
