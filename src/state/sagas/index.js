import { all, call, fork } from 'redux-saga/effects'

import getWeb3 from './getWeb3'
import networkSaga from './networkSaga'
import accountsSaga from './accountsSaga'
import defaultAccountSaga from './defaultAccountSaga'

export default function * rootSaga () {
  yield all([
    call(getWeb3),
    fork(networkSaga),
    fork(accountsSaga),
    fork(defaultAccountSaga)
  ])
}
