const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

/** @type {import('webpack').Configuration} */
module.exports = {
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  module: {
    rules: [
      process.env.NODE_ENV === 'production'
        ? {
            test: /\.tsx?$/,
            use: 'ts-loader',
          }
        : {
            test: /\.(t|j)sx?$/,
            use: 'babel-loader',
            exclude: /node_modules/,
          },
      {
        test: /\.(png|jpe?g|gif|ico)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  plugins: [new CleanWebpackPlugin(), new ForkTsCheckerWebpackPlugin()],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    stats: 'minimal',
    overlay: true,
    port: 8080,
    open: true,
  },
}
