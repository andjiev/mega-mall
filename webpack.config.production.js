'use strict';

module.exports = (env, argv) => ({
  mode: 'production',
  devtool: 'nosources-source-map',
  output: {
    publicPath: '/'
  }
});
