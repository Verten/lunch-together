var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
    }),
  ],
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080/',
    path.resolve(__dirname, './src/index.js'),
  ],
  resolve: {
    extensions: ['.vue', '.js', '.json', '.scss'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: {
      index: '/index.html',
    },
    host: '127.0.0.1',
    noInfo: true,
  },
  module: {
    loaders: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          formatter: require('eslint-friendly-formatter'),
        },
      },
      {
        test: /\.js?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loaders: ['babel-loader'],
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            loaders: {
              stylus: ExtractTextPlugin.extract({
                use: 'css-loader?{"minimize":{"discardComments":{"removeAll":true}}}',
                fallback: 'vue-style-loader',
              }),
            },
          },
        },
      },
    ],
  },
}
