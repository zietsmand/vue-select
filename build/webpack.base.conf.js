const path = require('path');
const webpack = require('webpack');
const chokidar = require('chokidar');
const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const env = process.env.NODE_ENV === 'production'
  ? 'production'
  : 'development';

const extractOrInjectStyles = process.env.NODE_ENV !== 'production'
  ? 'vue-style-loader'
  : MiniCssExtractPlugin.loader;

module.exports = {
  mode: env,
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  // devtool: env === 'production' ? 'source-map' : 'eval-source-map',
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../docs/assets'),
      'mixins': path.resolve(__dirname, '../src/mixins'),
      'components': path.resolve(__dirname, '../src/components'),
      'vue$': 'vue/dist/vue.esm.js',
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, '../'),
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: [
          extractOrInjectStyles,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.html$/,
        loader: 'vue-html-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env,
    }),
    new MiniCssExtractPlugin({
      filename: 'vue-select.css',
    }),
    new VueLoaderPlugin(),
  ],
  devServer: {
    hot: true,
    hotOnly: true,
    inline: true,
    port: 8080,
    before (app, server) {
      chokidar.watch([
        './**/*.html',
      ]).on('all', function () {
        server.sockWrite(server.sockets, 'content-changed');
      });
    },
  },
};
