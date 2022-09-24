  module.exports = {
    entry: './View/index.js',
    output: {
      path: __dirname + '/View/public/js',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          use: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        }
      ]
    }
  };