const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const restAPI = require("./mock/rest.js")
const overridesConfig = require('./config-overrides.js')

module.exports = {
  mode: "development",
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    openPage: 'index.html',
    port: 3333,
    before: (app) => {
      console.log('mock getRestFull,')
      restAPI(app)
    }
  },
  entry: {
    app: './src/index.tsx'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '控制台',
      filename: 'index.html',
      template: 'src/index.html'
    })
  ],
  // optimization: {
  //   minimize: true,
  //   namedChunks: true,
  //   splitChunks: {
  //     hidePathInfo: false,
  //     minSize: 10000,
  //     maxAsyncRequests: Infinity,
  //     maxInitialRequests: Infinity,
  //   }
  // },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /.less$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          }, {
            loader: 'css-loader', // translates CSS into CommonJS
            options: { importLoaders: 1 }
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              modifyVars: overridesConfig.modifyVars
            }
          }]
      },
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(png|svg|jpeg)$/,
        use: ["file-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};