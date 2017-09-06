/*
 postcss: 用于在 js 中转换 css 样式的 js 插件，只是一个转换器
 */

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');//webpack中将样式抽取成独立的文件的插件
const autoprefixer = require('autoprefixer');  //为样式自动添加前缀的插件
const entry = require('./entry');
const polyfill = path.resolve(__dirname, './lib/polyfill.js');
const base = path.resolve(__dirname, './lib/base.js');

const extractCSS = new ExtractTextPlugin('css/[name].css');
const config = {
  entry: {
    vendor: [
      polyfill,
      base,
      'vue',
      'vuex',
      'axios',
      'vue-easy-renderer/dist/plugin'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../client/assets/'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/assets/'
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          js: 'babel-loader',
          scss: extractCSS.extract(['css-loader', 'resolve-url-loader', 'sass-loader?sourceMap'])
        },
        postcss: [autoprefixer({
          browsers: ['android >= 4', 'ios >= 7']
        })]
      }
    }, {
      test: /\.css$/,
      use: extractCSS.extract(['css-loader'])
    }, {
      test: /\.scss$/,
      use: extractCSS.extract(['css-loader', 'resolve-url-loader', 'postcss-loader?sourceMap', 'sass-loader?sourceMap'])
    }, {
      test: /\.js$/,
      use: {
        loader: 'babel-loader'  //用于编译 es6 的代码成为 es5
      },
      exclude: /node_modules/
    }, {
      test: /\.(png|gif|jpg|jpeg)$/,
      loader: 'url-loader',
      query: {
        limit: '10000',
        name: 'images/[name].[ext]'
      }
    }, {
      test: /\.(svg|woff|woff2|eot|ttf)/,
      loader: 'url-loader',
      query: {
        limit: '10000',
        name: 'font/[name].[ext]'
      }
    }]
  },
  plugins: [
    extractCSS,
    new webpack.optimize.CommonsChunkPlugin({  //if 有多个入口文件entry，CommonsChunkPlugin用来抽取公共代码成为一个独立文件
      name: 'vendor',
      filename: 'vendor.bundle.js'
    }),
    // new webpack.optimize.UglifyJsPlugin({  //压缩代码的插件，可以压缩 js or css
    //   compress: {
    //     warnings: false
    //   }
    // })
  ]
};

config.entry = Object.assign(config.entry, entry);
module.exports = config;