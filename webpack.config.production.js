'use strict';

const webpack = require('webpack');

module.exports = (env, argv) => ({
  mode: 'production',
  devtool: false,
  plugins: [
    new webpack.DefinePlugin({
      ROOT: JSON.stringify('/'),
      // TODO: change tis when api is up and running on production server
      API_URL: JSON.stringify('http://localhost:5501/')
    })
  ]
});
