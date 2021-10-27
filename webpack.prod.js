import { resolve } from 'path'
import { common } from './webpack.common'

export default {
  mode: 'production',
  entry: './src/export.js',
  output: {
    path: resolve('dist'),
    filename: 'index.min.js'
  },
  devtool: 'source-map',
  module: common,
};