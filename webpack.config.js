const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development', //production
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js'
  },
  module: {
    noParse: /node_modules\/(moment|chart\.js)/, //不解析
    rules: [
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(html)$/,
        use: {
        
          loader: 'html-loader',
          // options: {
          //   attrs: [':data-src'], //为了做图片懒加载，那些属性需要被，制定什么属性被该loader解析
          //   minimize:false,
          // },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },{
            loader: 'css-loader'
          },
          {
            loader:'postcss-loader',
            options:{
              ident:'postcss',
              plugins:[
                require('autoprefixer')()
              ]
            }
          }
        ]
      },
      {
        include: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./html/index.html",
      filename: 'index.html'
    })
  ]
};