module.exports = {
  entry: './javascript/main.js',
  output: {
    path: 'build',
    filename: './main.js'
  },
  // watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!sass-loader?sourceMap' // SCSS->CSS->Styles (Right to Left)
      }
    ]
  }
};
