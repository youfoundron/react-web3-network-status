<h1 align="center" markdown="1">React Web3 Network Status</h1>
<p align="center" markdown="1">
  <a href="https://badge.fury.io/js/react-web3-network-status">
    <img src="https://badge.fury.io/js/react-web3-network-status.svg" />
  </a>
  <!-- <a href="https://travis-ci.org/rongierlach/react-web3-network-status">
    <img src="https://travis-ci.org/rongierlach/react-web3-network-status.svg?branch=master" />
  </a> -->
  <!-- <a href="https://coveralls.io/github/rongierlach/react-web3-network-status?branch=master">
    <img src="https://coveralls.io/repos/github/rongierlach/react-web3-newtork-status/badge.svg?branch=master" />
  </a> -->
  <a href="https://david-dm.org/rongierlach/react-web3-network-status">
    <img src="https://david-dm.org/rongierlach/react-web3-network-status.svg" />
  </a>
  <a href="https://david-dm.org/rongierlach/react-web3-network-status?type=peer">
    <img src="https://david-dm.org/rongierlach/react-web3-network-status/peer-status.svg" />
  </a>
  <a href="https://david-dm.org/rongierlach/react-web3-network-status?type=dev">
    <img src="https://david-dm.org/rongierlach/react-web3-network-status/dev-status.svg" />
  </a>
  <a href="https://standardjs.com">
    <img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" />
  </a>
</p>
<p align="center">
<img
  src="https://user-images.githubusercontent.com/4658359/30234946-21873ec8-94c8-11e7-88ee-296b098a49f8.gif"
/></p>

A MetaMask inspired component to show users the status of their network connectivity.  
Now [officially endorsed](https://twitter.com/metamask_io/status/928031347494461442)!

## Installation
Using npm:  
`$ npm install --save react-web3-network-status web3@^0.x.x babel-polyfill`  

Using yarn:  
`$ yarn add react-web3-network-status web3@^0.x.x babel-polyfill`

## Usage
```javascript
import 'babel-polyfill'
import React from 'react'
import NetworkStatus from 'react-web3-network-status'

const MyApp = () => (
  <div>
    <NetworkStatus />
  </div>
)

export default MyApp
```

If you're already managing state and wish to explicitly pass a network id, try out the stateless version:
```javascript
import React from 'react'
import NetworkStatus from 'react-web3-network-status/stateless'

const MyApp = () => (
  <div>
    <NetworkStatus
      networkId='1' // 1, 3, 4, 42, null, 'not-listening', or 'account-not-unlocked'
      address='0xe80C8E9ecB8e0F8CF75f4C5D1c15A065575a1cb9' // optional
    />
  </div>
)

export default MyApp
```

## Demo
To run the demo app locally, clone this repo and run:
```
$ cd ../react-web3-network-status
$ npm install
$ npm run demo
```
Then visit [localhost:3000](http://localhost:3000) in your browser.

## Contributing
To contribute effectively, follow these steps:
1. Create a feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -m 'add some feature'`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request!

## Inspiration
* [MetaMask](https://github.com/MetaMask/metamask-extension) - User interface
* [react-web3](https://github.com/coopermaruyama/react-web3) - User experience
* [DAO1901](https://github.com/asseth/dao1901) - State management using Redux Sagas
