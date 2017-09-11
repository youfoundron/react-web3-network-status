// @flow
import initialState from '../store/initialState'
import types from '../constants/actionTypes'
import type { Action } from '../constants/actionTypes'

const { defaultAccount: defaultState } = initialState

export default (state = defaultState, { type, payload }: Action) => {
  switch (type) {
    case types.RECEIVE_DEFAULT_ACCOUNT:
      return payload
    case types.CHANGED_DEFAULT_ACCOUNT:
      return payload
    default:
      return state
  }
}
