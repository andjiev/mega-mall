'use strict';

module.exports = (env, argv) => ({
  mode: 'production',
  devtool: 'source-map',
  output: {
    publicPath: '/'
  }
});
