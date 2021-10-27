import { resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { common } from './webpack.common.js'

export default {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: resolve('dist'),
    filename: 'index.js'
  },
  devServer: {
    open: true,
    port: 3000
  },
  devtool: 'source-map',
  module: common,
  plugins:  [new HtmlWebpackPlugin({ template: './src/index.html' })]
};