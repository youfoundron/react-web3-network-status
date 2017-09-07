import React from 'react'
import { connect } from 'react-redux'

const Web3NetworkStatus = (props) => {
  return (
    <div>
      <p>Network Id: {props.network.id}</p>
      <p>Network Listening: {String(props.network.listening)}</p>
      <p>Network PeerCount: {props.network.peerCount}</p>
      <p>Num Accounts: {props.accounts.length}</p>
      <p>Default Account: {props.defaultAccount}</p>
    </div>
  )
}

export default connect(
  state => ({...state})
)(Web3NetworkStatus)
