import types from '../constants/actionTypes'
import initialState from '../store/initialState'

const { defaultAccount: defaultState } = initialState

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case types.RECEIVE_DEFAULT_ACCOUNT:
      return payload
    case types.CHANGED_DEFAULT_ACCOUNT:
      return payload
    default:
      return state
  }
}
