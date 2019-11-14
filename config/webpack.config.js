// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre',
        // options: {
        //   fix: true
        // }
      }
    ]
  }
}
