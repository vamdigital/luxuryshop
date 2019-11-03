const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: './public/index.html',
  inject: 'body',
  hash: true,
  stats: {
    children: false
  }
})

module.exports = {
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.json', '.css']
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true
            }
          },
          'sass-loader'
        ]
      }
    ]
  },

  output: {
    filename: 'index.bundle.js',
    path: path.join(__dirname, '/public')
  },

  plugins: [
    HTMLWebpackPluginConfig,
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: '[name].css'
    })
  ]
}
