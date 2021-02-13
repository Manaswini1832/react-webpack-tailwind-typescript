const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFilenameHelpers } = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

  // webpack will take the files from ./src/index
  entry : path.join(__dirname, 'src', 'index.tsx'),

  // and output it into /dist as bundle.js
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js'
  },

  // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [

        // we use babel-loader to load our jsx and tsx files
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", "postcss-loader",
          ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./assets/styles.css",
      chunkFilename: "./assets/styles_done.css"
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};