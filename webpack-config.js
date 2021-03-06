'use strict'
//  Summary:
//    Get webpack config for different targets
require('dotenv').config()
const path = require('path')
const _ = require('lodash')
const webpack = require('webpack')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const alias = require('./alias')

const { CALLBACK_DOMAIN, DROPBOX_CLIENT_ID } = process.env
console.log(CALLBACK_DOMAIN, DROPBOX_CLIENT_ID)

const pkgJson = require('./package.json')
module.exports = (type) => { // eslint-disable-line
  // type is one of [dev, dll, test, dist]
  // NOTE: for test, only module property is used.

  const isDev = type === 'dev'
  const isDist = type === 'dist'

  return {
    node: {
      fs: 'empty'
    },
    resolve: {
      alias
    },
    devtool: {
      dev: 'eval',
      dll: false,
      test: false,
      dist: false
    }[type],
    cache: true,
    context: path.join(__dirname, 'src'),
    entry: {
      dev: {
        main: [
          'react-hot-loader/patch',
          `webpack-hot-middleware/client?http://0.0.0.0:${pkgJson.rekit.devPort}`,
          './index'
        ]
      },
      dll: {
        // Here dll is only used for dev.
        'dev-vendors': [
          'react-hot-loader',
          'react-proxy',
          'babel-polyfill',
          'lodash',
          'react',
          'react-dom',
          'react-router',
          'react-redux',
          'react-router-redux',
          'redux',
          'redux-logger',
          'redux-thunk'
        ]
      },
      dist: {
        main: [
          'babel-polyfill',
          './index'
        ]
      },
      test: null
    }[type],

    output: {
      // Js bundle name, [name] will be replaced by which is in entry
      filename: '[name].js',

      // Where to save your build result
      path: path.join(__dirname, 'build/static'),

      // Exposed asset path. NOTE: the end '/' is necessary
      publicPath: '/static/',
      chunkFilename: 'js/[id].[chunkhash].js'
    },

    plugins: _.compact([
      isDev && new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      isDist && new LodashModuleReplacementPlugin(),
      isDist && new webpack.optimize.UglifyJsPlugin(),
      isDist && new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(type === 'dist' ? 'production' : type),
          CALLBACK_DOMAIN,
          DROPBOX_CLIENT_ID
        }
      })
    ]),

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules|build/,
          loader: 'babel-loader?cacheDirectory=true'
        }, {
          test: /\.(ttf|eot|svg|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader'
        }, {
          test: /\.less$/,
          loader: isDev ? 'style-loader!css-loader?sourceMap!less-loader?sourceMap'
            : 'style-loader!css-loader!less-loader'
        }, {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        }, {
          test: /\.json$/,
          loader: 'json-loader'
        }, {
          test: /\.(png|jpe?g|gif)$/,
          loader: 'url-loader?limit=8192'
        }
      ]
    }
  }
}
