var path = require('path');
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
let devServerUrl = "http://127.0.0.1:9090"
module.exports = {
  entry: {
     head: './src4',
     main: './src5'
   },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  aa:{
    aa:1
  },
  module: {
          loaders: [{
            test: /\.js$/,         // Match both .js and .jsx files
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                    "presets": ['es2015', 'react',"stage-2"]
                }
          },
          {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
            })
          }
        ]
  },
  plugins: [
         new HtmlWebpackPlugin({  // Also generate a test.html 
          filename: 'index.html',
          title: 'Custom template',
          inject: false,
          template: 'my-index.ejs'
        }),
        new ExtractTextPlugin("styles.css"),
        new OpenBrowserPlugin({ url: 'http://localhost:9090' })
    ],
    resolve:{
      alias:{
        aa:'../src4/aa'
      }
    }
  };