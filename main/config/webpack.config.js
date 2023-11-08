const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { DefinePlugin } = require('webpack')
const config = require("../../a2n.config")

module.exports = {
  mode: 'production',
  target: 'node',
  entry: ['./main/start.ts'],
  module: {
    rules: [
      {
        test: /[\.ts?|\.js?]$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: config.alias || {
      '@': path.resolve(process.cwd(), 'src')
    }
  },
  output: {
    filename: 'a2n.serve.js',
    path: path.resolve(process.cwd(), 'dist'),
    library: 'a2n',
    libraryTarget: 'umd'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new DefinePlugin({
      'process.env': {
        componentScan: JSON.stringify(config.componentScan)
      }
    })
  ]
};