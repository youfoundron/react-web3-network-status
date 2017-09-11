// @flow
import initialState from '../store/initialState'
import types from '../constants/actionTypes'
import type { Action } from '../constants/actionTypes'

const { accounts: defaultState } = initialState

export default (state = defaultState, { type, payload }: Action) => {
  switch (type) {
    case types.GET_ACCOUNTS_SUCCESS:
      return payload
    default:
      return state
  }
}
