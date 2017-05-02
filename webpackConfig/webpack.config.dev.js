'use strict'

const path = require('path')
const webpack = require('webpack')

const htmlPlugin = require('html-webpack-plugin')

const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, '../src')
const DIST_PATH = path.resolve(ROOT_PATH, '../dist')

module.exports = {
  devtool: 'source-map',
  entry: {
    'app': [path.resolve(SRC_PATH, 'index.js')]
  },
  output: {
    path: DIST_PATH,
    filename: 'js/index.js',
    chunkFilename: '[name].[chunkhash:5].chunk.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'scss'],
    alias: {
      'components': path.resolve(__dirname, './src/components'), //公共组件路径
      'lib': path.resolve(__dirname, '../lib'),
      'theme': path.resolve(__dirname, '../src/theme')
    }
  },
  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        loaders: [/*"react-hot"*/, "babel-loader"]
      }, {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader?sourceMap&importLoaders=1!postcss-loader?parser=postcss-scss!sass-loader'],
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader?sourceMap", "postcss-loader"]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
        exclude: /^node_modules$/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 8192,
          name: 'images/[name].[ext]'
        }
      }
    ]
  },
  plugins: [new htmlPlugin({ title: 'app', inject: 'body', template: './src/tpl.html' })]
}