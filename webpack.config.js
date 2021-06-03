const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: './js/main.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build', 'js'),
  },
  plugins: [new Dotenv] 
};