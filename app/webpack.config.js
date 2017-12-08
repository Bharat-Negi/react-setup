const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    compress: true,
    port: 9000
  },
  module: {
    loaders: [
      // {
      //   test: /\.js$/,
      //   include : APP_DIR,   
      //   loader: 'babel-loader',
      //   exclude: /node_modules/
      // },
      {
        test: /.(jsx|js)?$/,
        include : APP_DIR, 
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      // CSS
      {
        test: /\.css$/,
        use: [{
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              minimize: true
            }
          },
          {
            loader: "autoprefixer-loader"
          }
        ]
      },
      // SCSS
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              minimize: true
            }
          },
          {
            loader: "autoprefixer-loader"
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [{
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]',
            publicPath: function (url) {
              return url.replace(/images/, './../images/');
            }
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
}