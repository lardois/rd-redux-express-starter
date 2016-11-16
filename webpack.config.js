const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, 'dist', 'files', 'js'),
    publicPath: '/files/js/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      include: path.join(__dirname, 'src'),
      loader: 'babel',
      query: {
        presets: ['react', 'latest'],
      },
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
