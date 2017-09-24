import { resolve } from 'path'
import makeRule from 'webpack-make-rule'
import { HotModuleReplacementPlugin } from 'webpack'

const demoDir = resolve(__dirname, '../demo')

export default {
  entry: resolve(demoDir, 'js/index.js'),
  output: {
    path: demoDir,
    filename: 'app.js'
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      makeRule(/\.jsx?$/, ['react-hot-loader', 'babel-loader']),
      makeRule(/\.(html|ico)$/, 'file-loader?name=[name].[ext]')
    ]
  },
  plugins: [
    new HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    port: 3000,
    inline: true,
    contentBase: demoDir
  }
}
