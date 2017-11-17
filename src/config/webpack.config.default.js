// var path = require('path')
// var fs =   require('fs')
// module.exports = function(webpackConfig, redSkull,config,WebPack){

//     return webpackConfig
// }
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry:process.cwd()+'/src/index.js',
  output:{
    path: path.join(process.cwd(), "dist"),
    filename:"[name].js",
    publicPath:"/",
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:"./my-index.ejs",
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
    }),
  ],
  module:{
    rules:[
      {
        test:/\.js$/,
        include:path.join(process.cwd(), "src"),
        loader:"babel-loader",
        options:{
          presets:[
            "react",
            "stage-2",
          ],
        },
      },
      {
        test:/\.less$/,
        use:ExtractTextPlugin.extract({
          fallback:"style-loader",
          use:"css-loader",
        })
      },
      {
        test:/\.(jpe?g|png|gif|svg)$/i,
        loader:"url-loader",
      },
    ],
  },
  resolve:{
    alias:{
      "components":path.join(process.cwd(), "src/components"),
    },
  },
  devtool:"eval",
  devServer:{
    port: 7007,
    historyApiFallback: true,
    contentBase: path.join(process.cwd(), "dist"),
  },
}