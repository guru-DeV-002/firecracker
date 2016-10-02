module.exports = {
  entry: './main.js',
  output: {
    path: './',
    filename: './bundle.js'
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css' // CSS -> Style (Right to Left)
      }
    ]
  }
};
