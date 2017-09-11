// @flow
import Web3 from 'web3'
import Promise, { promisifyAll } from 'bluebird'

export default (): Promise<any> => new Promise((resolve, reject) => {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  window.addEventListener('load', function () {
    let web3 = window.web3

    if (typeof web3 !== 'undefined') {
      // Injected Web3 detected. Use Mist/MetaMask's provider.
      web3 = new Web3(web3.currentProvider)
    } else {
      // No web3 instance injected, using Local web3.
      const provider = new Web3.providers.HttpProvider('http://localhost:8545')
      web3 = new Web3(provider)
    }

    // wrap callback functions with promises
    promisifyAll(web3.eth, {suffix: 'Async'})
    promisifyAll(web3.net, {suffix: 'Async'})
    promisifyAll(web3.version, {suffix: 'Async'})
    resolve(web3)
  })
})
