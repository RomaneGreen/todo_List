const path = require('path');

module.exports = {
  entry: './src/main.js',

  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [{
        test: /\.js$/,
        use: 'babel-loader'
      },

      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};