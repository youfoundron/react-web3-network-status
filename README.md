<h1 style="text-align: center;" markdown="1">React Web3 Network Status</h1>
<p align="center">
![Example](https://user-images.githubusercontent.com/4658359/30234946-21873ec8-94c8-11e7-88ee-296b098a49f8.gif)
</p>

A MetaMask inspired badge to tell users the status of their network connectivity.

On click, navigates to the current account on EtherScan.  

Simply drop-in with no configuration.  
Fully customizable.

## Installation
Using npm:
$ npm install --save react-web3-network-status

Using yarn
$ yarn add react-web3-network-status

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

## Customization
Component accepts a renderer per network id.  
_Example coming soon..._

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
