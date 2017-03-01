const path = require('path');

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
  }
};

module.exports = config;
