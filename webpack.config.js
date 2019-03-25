// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'docs')
  },
  mode: 'development',
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Pixel",
      meta: {
        description: "Pixel Pylon Testing",
        author: "John Hooks",
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      }
    })
  ]
}
