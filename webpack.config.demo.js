'use strict';

const webpack = require('webpack');

module.exports = (env, argv) => ({
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      ROOT: JSON.stringify('/'),
      // TODO: change this when api is up and running on demo server
      API_URL: JSON.stringify('http://localhost:5501/')
    })
  ]
});
