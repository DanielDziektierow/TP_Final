module.exports = {
  entry: './view/index.js',
  output: {
    path: __dirname + '/view/public',
    filename: 'bundle.js'
  },
  resolve:{
    extensions: [ '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:{
          loader : 'babel-loader',
        },
      }
    ]
  }
};