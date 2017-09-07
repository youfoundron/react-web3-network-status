import types from '../constants/actionTypes'
import initialState from '../store/initialState'

const { web3: defaultState } = initialState

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case types.RECEIVE_WEB3_INSTANCE:
      return payload
    default:
      return state
  }
}
