import { join } from 'path'

const include = join(__dirname, 'src')

export default {
  mode: "none",
  entry: './index',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'harryPotterNames',
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', include }
    ]
  }
}
