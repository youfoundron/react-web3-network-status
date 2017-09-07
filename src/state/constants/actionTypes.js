// @flow
const actionTypesArr: Array<string> = [
  'GET_NETWORK_ID_REQUEST',
  'GET_NETWORK_LISTENING_REQUEST',
  'GET_NETWORK_PEER_COUNT_REQUEST',
  'GET_ACCOUNTS_REQUEST',

  'GET_NETWORK_ID_SUCCESS',
  'GET_NETWORK_LISTENING_SUCCESS',
  'GET_NETWORK_PEER_COUNT_SUCCESS',
  'GET_ACCOUNTS_SUCCESS',

  'GET_NETWORK_ID_FAILURE',
  'GET_NETWORK_LISTENING_FAILURE',
  'GET_NETWORK_PEER_COUNT_FAILURE',
  'GET_ACCOUNTS_FAILURE',

  'RECEIVE_WEB3_INSTANCE',
  'RECEIVE_DEFAULT_ACCOUNT',

  'CHANGED_DEFAULT_ACCOUNT'
]

type RequestType =
  | 'web3/GET_NETWORK_ID_REQUEST'
  | 'web3/GET_NETWORK_LISTENING_REQUEST'
  | 'web3/GET_NETWORK_PEER_COUNT_REQUEST'
  | 'web3/GET_ACCOUNTS_REQUEST'

type SuccessType =
  | 'web3/GET_NETWORK_ID_SUCCESS'
  | 'web3/GET_NETWORK_LISTENING_SUCCESS'
  | 'web3/GET_NETWORK_PEER_COUNT_SUCCESS'
  | 'web3/GET_ACCOUNTS_SUCCESS'

type FailureType =
  | 'web3/GET_NETWORK_ID_FAILURE'
  | 'web3/GET_NETWORK_LISTENING_FAILURE'
  | 'web3/GET_NETWORK_PEER_COUNT_FAILURE'
  | 'web3/GET_ACCOUNTS_FAILURE'

type ReceiveType =
  | 'web3/RECEIVE_WEB3_INSTANCE'
  | 'web3/RECEIVE_DEFAULT_ACCOUNT'

type ChangedType =
  | 'web3/CHANGED_DEFAULT_ACCOUNT'

export type ActionType =
  | RequestType
  | SuccessType
  | FailureType
  | ReceiveType
  | ChangedType

export default actionTypesArr.reduce((actionTypes, type: string) => {
  actionTypes[type] = 'web3/' + type
  return actionTypes
}, {})
