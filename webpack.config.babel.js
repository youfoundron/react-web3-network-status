import { resolve } from 'path'
import { optimize } from 'webpack'
import makeRule from 'webpack-make-rule'

export default {
  entry: resolve(__dirname, './src/index.js'),
  output: {
    path: resolve(__dirname, './lib'),
    filename: 'index.js',
    library: 'ReactWeb3NetworkStatus',
    libraryTarget: 'umd'
  },
  module: {
    rules: [ makeRule(/\.jsx?$/, 'babel-loader') ]
  },
  plugins: [
    new optimize.UglifyJsPlugin({
      comments: false
    })
  ]
}
