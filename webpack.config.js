module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/pub',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {compact: false}
      }
    ]
  }
};
