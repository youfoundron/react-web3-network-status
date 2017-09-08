import { put, select, takeEvery } from 'redux-saga/effects'

import types from '../constants/actionTypes'

const getDefaultAccount = function * () {
  const web3 = yield select(state => state.web3)
  const payload = web3.eth.defaultAccount || null
  yield put({type: types.RECEIVE_DEFAULT_ACCOUNT, payload})
}

const checkDefaultAccountChanged = function * ({ payload: accounts = [] }) {
  const newDefaultAccount = accounts[0] || null
  const oldDefaultAccount = yield select(state => state.defaultAccount)
  if (newDefaultAccount !== oldDefaultAccount) {
    yield put({type: types.CHANGED_DEFAULT_ACCOUNT, payload: newDefaultAccount})
  }
}

export default function * defaultAccountSaga () {
  yield takeEvery(types.RECEIVE_WEB3_INSTANCE, getDefaultAccount)
  yield takeEvery(types.GET_ACCOUNTS_SUCCESS, checkDefaultAccountChanged)
}
