import { resolve } from 'path'
import makeRule from 'webpack-make-rule'
import { optimize } from 'webpack'

export default {
  entry: resolve(__dirname, './src/index.js'),
  output: {
    path: resolve(__dirname, './lib'),
    filename: 'index.js',
    library: 'ReactWeb3NetworkStatus',
    libraryTarget: 'umd'
  },
  // externals: {
  //   'react': {
  //     commonjs: 'react',
  //     commonjs2: 'react',
  //     amd: 'react',
  //     root: 'React'
  //   },
  //   'redux': {
  //     commonjs: 'redux',
  //     commonjs2: 'redux',
  //     amd: 'redux',
  //     root: 'Redux'
  //   },
  //   'react-redux': {
  //     commonjs: 'react-redux',
  //     commonjs2: 'react-redux',
  //     amd: 'react-redux',
  //     root: 'ReactRedux'
  //   },
  //   'redux-saga': {
  //     commonjs: 'redux-saga',
  //     commonjs2: 'redux-saga',
  //     amd: 'redux-saga',
  //     root: 'ReduxSaga'
  //   }
  // },
  module: {
    rules: [ makeRule(/\.jsx?$/, 'babel-loader') ]
  },
  plugins: [
    new optimize.UglifyJsPlugin({
      comments: false
    })
  ]
}
