'use strict';

const webpack = require('webpack');

module.exports = (env, argv) => ({
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      ROOT: JSON.stringify('/'),
      API_URL: JSON.stringify('https://mega-mall-api-demo.herokuapp.com/')
    })
  ]
});
