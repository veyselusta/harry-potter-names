import { join } from 'path'

const include = join(__dirname, 'src')

export default {
  mode: "none",
  entry: './src/index',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'starWarsNames',
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', include }
    ]
  }
}
