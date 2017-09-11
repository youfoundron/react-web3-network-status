// @flow
import React from 'react'
import { connect } from 'react-redux'

type Props = {
  etherScanUrl: string,
  defaultAccount: string,
  dispatch: ({}) => void,
  children?: React.Node
}

const NetworkLink = ({etherScanUrl, defaultAccount, dispatch, children, ...props}: Props) => (
  etherScanUrl && defaultAccount
  ? <a id='__network-status__' target='_blank' {...props}
    href={`${etherScanUrl}/address/${defaultAccount}`}
    >
    {children}
    <style jsx>{`
      #__network-status__ {
        display: inline-flex;
        align-items: center;
        line-height: 1em;
        font-size: 12px
        font-weight: 700;
        font-family: helvetica, arial, sans-serif
        text-transform: capitalize;
        text-decoration: none;
      }
    `}</style>
  </a>
  : <span id='__network-status__' {...props}>
    {children}
    <style jsx>{`
      #__network-status__ {
        display: inline-flex;
        align-items: center;
        line-height: 1em;
        font-size: 12px
        font-weight: 700;
        font-family: helvetica, arial, sans-serif
        text-transform: capitalize;
        text-decoration: none;
      }
    `}</style>
  </span>
)

const mapStateToProps = state => ({
  defaultAccount: state.defaultAccount
})

export default connect(
  mapStateToProps
)(NetworkLink)
