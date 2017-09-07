import { delay } from 'redux-saga'
import { all, call, put, select, takeEvery } from 'redux-saga/effects'

import types from '../constants/actionTypes'

const pollInterval = 2000

const getAccounts = function * () {
  const web3 = yield select(state => state.web3)
  try {
    const payload = yield call(() => web3.eth.getAccountsAsync())
    yield put({type: types.GET_ACCOUNTS_SUCCESS, payload})
  } catch (e) {
    yield put({type: types.GET_ACCOUNTS_FAILURE, payload: e})
  }
}

const pollAccounts = function * () {
  while (true) {
    try {
      yield call(delay, pollInterval)
      yield put({type: types.GET_ACCOUNTS_REQUEST})
    } catch (e) {
      throw new Error(e)
    }
  }
}

const initAccounts = function * () {
  yield all([
    put({type: types.GET_ACCOUNTS_REQUEST}),
    call(pollAccounts)
  ])
}

export default function * accountsSaga () {
  yield takeEvery(types.RECEIVE_WEB3_INSTANCE, initAccounts)

  yield takeEvery(types.GET_ACCOUNTS_REQUEST, getAccounts)
}
