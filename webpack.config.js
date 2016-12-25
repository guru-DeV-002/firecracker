module.exports = {
  entry: './javascript/main.js',
  output: {
    path: './build/',
    filename: './main.js'
  },
  // watch: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style!css!sass?sourceMap' // SCSS->CSS->Styles (Right to Left)
      }
    ]
  }
};
