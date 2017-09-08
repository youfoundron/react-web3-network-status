// @flow
type State = {
  +web3: {},
  +network: {
    +id: number,
    +listening: bool,
    +peerCount: number
  },
  +accounts: Array<string>,
  +defaultAccount: string
};

const initialState: State = {
  web3: {},
  network: {
    id: null,
    listening: false,
    peerCount: null
  },
  accounts: [],
  defaultAccount: null
}

export type { State }
export default initialState
