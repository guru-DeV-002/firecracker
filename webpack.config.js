module.exports = {
  entry: './main.js',
  output: {
    path: './build/',
    filename: './bundle.js'
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css' // CSS -> Style (Right to Left)
      }
    ]
  }
};
