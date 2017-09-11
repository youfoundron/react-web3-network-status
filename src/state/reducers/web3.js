// @flow
import initialState from '../store/initialState'
import types from '../constants/actionTypes'
import type { Action } from '../constants/actionTypes'

const { web3: defaultState } = initialState

export default (state = defaultState, { type, payload }: Action) => {
  switch (type) {
    case types.RECEIVE_WEB3_INSTANCE:
      return payload
    default:
      return state
  }
}
