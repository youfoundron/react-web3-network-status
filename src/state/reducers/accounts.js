import types from '../constants/actionTypes'
import initialState from '../store/initialState'

const { accounts: defaultState } = initialState

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case types.GET_ACCOUNTS_SUCCESS:
      return payload
    default:
      return state
  }
}
