const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: './js/main.js',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: [/\.js$/],
        // exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    esmodules: true,
                  },
                },
              ]
            ]
          }
        }
      }
    ]
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build', 'js'),
  },
  plugins: [new Dotenv] 
};