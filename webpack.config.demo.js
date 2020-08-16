'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => ({
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
    }),
    new webpack.DefinePlugin({
      ROOT: JSON.stringify('/'),
      API_URL: JSON.stringify('https://mega-mall-api-demo.herokuapp.com/')
    }),
    new CopyWebpackPlugin([
      { from: 'public/manifest.json', to: '' },
      { from: 'public/translations.json', to: 'static' },
      { from: 'src/assets', to: 'assets' }
    ])
  ]
});
