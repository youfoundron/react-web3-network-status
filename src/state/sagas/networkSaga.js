import { delay } from 'redux-saga'
import { all, call, put, select, takeEvery } from 'redux-saga/effects'

import types from '../constants/actionTypes'

const pollInterval = 2000

const getNetworkId = function * () {
  const web3 = yield select(state => state.web3)
  try {
    const payload = yield call(() => web3.version.getNetworkAsync())
    yield put({type: types.GET_NETWORK_ID_SUCCESS, payload})
  } catch (e) {
    yield put({type: types.GET_NETWORK_ID_FAILURE, payload: e})
  }
}

const getNetworkListening = function * () {
  const web3 = yield select(state => state.web3)
  try {
    const payload = yield call(() => web3.net.getListeningAsync())
    yield put({type: types.GET_NETWORK_LISTENING_SUCCESS, payload})
  } catch (e) {
    yield put({type: types.GET_NETWORK_LISTENING_FAILURE, payload: e})
  }
}

const getNetworkPeerCount = function * () {
  const web3 = yield select(state => state.web3)
  try {
    const payload = yield call(() => web3.net.getPeerCountAsync())
    yield put({type: types.GET_NETWORK_PEER_COUNT_SUCCESS, payload})
  } catch (e) {
    yield put({type: types.GET_NETWORK_PEER_COUNT_FAILURE, payload: e})
  }
}

const pollNetwork = function * () {
  while (true) {
    try {
      yield call(delay, pollInterval)
      yield all([
        put({type: types.GET_NETWORK_ID_REQUEST}),
        put({type: types.GET_NETWORK_LISTENING_REQUEST}),
        put({type: types.GET_NETWORK_PEER_COUNT_REQUEST})
      ])
    } catch (e) {
      throw new Error(e)
    }
  }
}

const initNetwork = function * () {
  yield all([
    put({type: types.GET_NETWORK_ID_REQUEST}),
    put({type: types.GET_NETWORK_LISTENING_REQUEST}),
    put({type: types.GET_NETWORK_PEER_COUNT_REQUEST}),
    call(pollNetwork)
  ])
}

export default function * networkSaga () {
  yield takeEvery(types.RECEIVE_WEB3_INSTANCE, initNetwork)
  yield takeEvery(types.GET_NETWORK_ID_REQUEST, getNetworkId)
  yield takeEvery(types.GET_NETWORK_LISTENING_REQUEST, getNetworkListening)
  yield takeEvery(types.GET_NETWORK_PEER_COUNT_REQUEST, getNetworkPeerCount)
}
