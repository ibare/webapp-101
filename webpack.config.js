
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: './dist'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.hbs$/,
        exclude: /node_modules/,
        loader: 'handlebars'
      }
    ]
  }
};
