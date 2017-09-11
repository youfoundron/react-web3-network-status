<h1 align="center" markdown="1">React Web3 Network Status</h1>
<p align="center" markdown="1">
  <a href="https://travis-ci.org/rongierlach/react-web3-network-status">
    <img src="https://travis-ci.org/rongierlach/react-web3-network-status.svg?branch=master" />
  </a>
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

## Installation
Using npm:  
`$ npm install --save react-web3-network-status`  

Using yarn:  
`$ yarn add react-web3-network-status`

## Usage
```javascript
import React from 'react'
import NetworkStatus from 'react-web3-network-status'

const MyApp = () => (
  <div>
    <NetworkStatus />
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
