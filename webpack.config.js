'use strict';

const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

// variables
const outPath = path.join(__dirname, 'dist');

//plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  output: {
    path: outPath,
    filename: 'static/[name].js',
    chunkFilename: 'static/[name].bundle.js',
    publicPath: 'http://localhost:4100/'
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
    })
  ],
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
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

  let environment = (process.env.NODE_ENV || 'development').toLowerCase();

  if (environment === 'production') {
    return merge.smart(baseConfig, require('./webpack.config.production.js').apply(this, [env, argv]));
  }

  if (environment === 'demo') {
    return merge.smart(baseConfig, require('./webpack.config.demo.js').apply(this, [env, argv]));
  }

  return baseConfig;
};
