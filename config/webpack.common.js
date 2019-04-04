// webpack.common.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ouputPath = path.join(__dirname, "/../docs");

module.exports = {
  output: {
    path: ouputPath
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Pixel",
      meta: {
        description: "Pixel Pylon Testing",
        author: "John Hooks",
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
      }
    })
  ]
};
