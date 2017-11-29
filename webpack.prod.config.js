var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const resolve = (...dir) => path.resolve(__dirname, ...dir)

module.exports = {
  entry: [path.resolve(__dirname, './src/index.js')],
  resolve: {
    extensions: ['.vue', '.js', '.json', '.scss'],
  },
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/',
    filename: 'bundle.js',
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
        loaders: ['babel-loader'],
        exclude: path.resolve(__dirname, 'node_modules'),
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            loaders: {
              css: ExtractTextPlugin.extract({
                use: 'css-loader?{"minimize":{"discardComments":{"removeAll":true}}}',
                fallback: 'vue-style-loader',
              }),
            },
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
    }),
    new ExtractTextPlugin({
      filename: 'build.css',
      disable: false,
      allChunks: true,
    }),
  ],
}
