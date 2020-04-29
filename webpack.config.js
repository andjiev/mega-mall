'use strict';

const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

// variables
const outPath = path.join(__dirname, 'dist');

//plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MergeJsonWebpackPlugin = require('merge-jsons-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const entryConfig = {
  easyFind: ['@babel/polyfill', 'react-hot-loader/patch', './src/index.tsx']
};

const baseConfig = {
  mode: 'development',
  devtool: 'source-map',
  entry: entryConfig,
  module: {
    rules: [
      { test: /\.ts(x?)$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  },
  output: {
    path: outPath,
    filename: 'static/[name].js',
    chunkFilename: 'static/[name].bundle.js',
    publicPath: '/'
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    // Fix webpack's default behavior to not load packages with jsnext:main module
    // (jsnext:main directs not usually distributable es6 format, but es6 sources)
    mainFields: ['module', 'browser', 'main'],
    plugins: [new TsconfigPathsPlugin()]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
    }),
    new webpack.DefinePlugin({
      ROOT: JSON.stringify('/'),
      // TODO: change this when api is up and running
      API_URL: JSON.stringify('http://localhost:5501/')
    }),
    new CopyWebpackPlugin([{ from: 'public/manifest.json', to: '' }]),
    new MergeJsonWebpackPlugin({
      debug: false,
      encoding: 'utf8',
      output: {
        groupBy: [
          {
            pattern: '**/translations.json',
            fileName: 'static/translations.json'
          }
        ]
      }
    })
  ],
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    },
    port: 4100
  },
  optimization: {
    splitChunks: {
      name: true,
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: -10,
          filename: 'static/vendor.js'
        }
      }
    },
    minimize: false,
    runtimeChunk: false
  }
};

module.exports = (env, argv) => {
  env = env || {};

  let environment = (process.env.APP_ENV || 'development').toLowerCase();

  if (environment === 'production') {
    return merge.smart(baseConfig, require('./webpack.config.production.js').apply(this, [env, argv]));
  }

  if (environment === 'demo') {
    return merge.smart(baseConfig, require('./webpack.config.demo.js').apply(this, [env, argv]));
  }

  return baseConfig;
};
