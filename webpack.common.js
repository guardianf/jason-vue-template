const packagejson = require('./package.json');
const path = require('path');

module.exports = {
  entry: {
    vendor: Object.keys(packagejson.dependencies),
    index: path.resolve(__dirname, 'src/index.js'),
  },
  module: {
    rules: [{
      test: /\/.css$/,
      use: ['style-loader', 'cee-loader'],
    }],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  }
}
