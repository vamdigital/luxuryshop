const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const DOTENV = require('dotenv-webpack')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: './public/index.html',
  inject: 'body',
  // favicon: './public/favicon.ico',
  hash: true,
  stats: {
    children: false
  }
})

const DotEnvPluginConfig = new DOTENV({})

const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
  filename: 'style.css',
  chunkFilename: '[name].css'
})

const FaviconsWebpackPluginConfig = new FaviconsWebpackPlugin('./public/favicon-32x32.png')

module.exports = {
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.json', '.css'],
    alias: {
      utils: path.resolve(__dirname, '..', 'src', 'Utils')
    }
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
              modules: false,
              sourceMap: true
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|mp4|webm)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ico|png)$/,
        use: 'file-loader?name=assets/[name].[ext]'
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      }
    ]
  },

  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },

  output: {
    filename: 'index.bundle.js',
    path: path.join(__dirname, '/public'),
    publicPath: '/'
  },

  plugins: [
    HTMLWebpackPluginConfig,
    MiniCssExtractPluginConfig,
    FaviconsWebpackPluginConfig,
    DotEnvPluginConfig
  ]
}
