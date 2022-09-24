  module.exports = {
    entry: './view/index.js',
    output: {
      path: __dirname + '/view/public/js',
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