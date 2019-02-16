const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');

module.exports = merge(baseWebpackConfig, {
  entry: './dev/dev.js',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './dev/dev.html',
      inject: true,
    }),
  ],
  optimization: {
    noEmitOnErrors: true,
  },
});
