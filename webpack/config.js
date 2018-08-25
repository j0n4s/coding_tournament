/* eslint-disable */
'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanPlugin = require('./CleanPlugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var rootPath = __dirname + '/../';

var AssetsPlugin = require('assets-webpack-plugin')
var assetsPluginInstance = new AssetsPlugin({path: path.join(rootPath + '/dist/')})

module.exports = function(production) {
  var stylesName = 'styles.css';
  const CoreCss = new ExtractTextPlugin(stylesName);
  const VendorCSS = new ExtractTextPlugin('vendor.' + stylesName);

  return {
    context: rootPath,
    devtool: '#eval-source-map',
    entry: {
      main: path.join(rootPath, 'app/front/index.js')
    },
    output: {
      path: path.join(rootPath, '/dist/'),
      publicPath: '/',
      filename: '[name].js'
    },
    resolveLoader: {
      modules: ['node_modules', __dirname + '/webpackLoaders'],
      extensions: ['.js', '.json'],
      mainFields: ['loader', 'main']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader?cacheDirectory',
          include: path.join(rootPath, 'app'),
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: ['css-hot-loader'].concat(CoreCss.extract({
            fallback: 'style-loader',
            use: 'css-loader?sourceMap!sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true'
          })),
          include: [
            path.join(rootPath, 'app'),
            path.join(rootPath, 'node_modules/react-widgets/lib/scss/')
          ]
        },
        {
          test: /\.css$/,
          loader: CoreCss.extract({
            fallback: 'style-loader',
            use: 'css-loader?sourceMap'
          }),
          include: [
            path.join(rootPath, 'app')
          ]
        },
        {
          test: /\.css$/,
          loader: VendorCSS.extract({
            fallback: 'style-loader',
            use: 'css-loader?sourceMap'
          }),
          include: [
            path.join(rootPath, 'node_modules/bootstrap/dist/'),
            path.join(rootPath, 'node_modules/font-awesome/css/'),
            path.join(rootPath, 'node_modules/react-select-plus/dist/')
          ]
        },
        {
          test: /\.(jpe?g|png|eot|woff|woff2|ttf|gif|svg)(\?.*)?$/i,
          loaders: ['url-loader', 'img-loader'],
          include: [
            path.join(rootPath, 'public'),
            path.join(rootPath, 'app'),
            path.join(rootPath, 'node_modules/react-widgets/lib/fonts/'),
            path.join(rootPath, 'node_modules/font-awesome/fonts/'),
            path.join(rootPath, 'node_modules/bootstrap/dist/fonts/')
          ]
        },
        {
          test:/\.json$/i,
          loaders: ['json-loader'],
          include: [
            path.join(rootPath, 'app')
          ]
        }
      ]
    },
    plugins: [
      new CleanPlugin(__dirname + '/../dist/'),
      VendorCSS,
      CoreCss,
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        chunks: ["main"],
        minChunks: ({resource}) => {
          if (/.js$/.test(resource)) {
            return /node_modules/.test(resource)
          }
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest',
        chunks: ["main", "vendor"],
        minChunks: Infinity
      }),
      assetsPluginInstance
    ]
  };
}
