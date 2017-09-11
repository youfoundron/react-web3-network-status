// @flow
import initialState from '../store/initialState'
import types from '../constants/actionTypes'
import type { Action } from '../constants/actionTypes'

const { network: defaultState } = initialState

export default (state = defaultState, { type, payload }: Action) => {
  switch (type) {
    case types.GET_NETWORK_ID_SUCCESS:
      return { ...state, id: payload }
    case types.GET_NETWORK_LISTENING_SUCCESS:
      return { ...state, listening: payload }
    case types.GET_NETWORK_PEER_COUNT_SUCCESS:
      return { ...state, peerCount: payload }
    default:
      return state
  }
}
