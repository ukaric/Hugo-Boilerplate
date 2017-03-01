const path = require('path');
const webpack = require('webpack');

const config = {
  context: path.resolve(__dirname, '../', 'src'),
  entry: {
    app: './assets/js/app.js'
  },
  output: {
    path: path.join(__dirname, '../', '/src/static/js'),
    filename: '[name].js',
    publicPath: '/js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false,
      sourceMap: true
    })
  ]
};

module.exports = config;
