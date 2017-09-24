import { resolve } from 'path'
import { optimize, DefinePlugin } from 'webpack'
import makeRule from 'webpack-make-rule'

export default {
  entry: resolve(__dirname, '../src/Stateless.js'),
  output: {
    path: resolve(__dirname, '../lib'),
    filename: 'stateless.js',
    library: 'ReactWeb3NetworkStatus',
    libraryTarget: 'umd'
  },
  externals: {
    'react': {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    }
  },
  module: {
    rules: [ makeRule(/\.jsx?$/, 'babel-loader') ]
  },
  plugins: [
    new optimize.UglifyJsPlugin({
      comments: false
    }),
    new DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
}
