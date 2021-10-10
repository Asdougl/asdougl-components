const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV !== 'production'

const prodPlugins = !isDev
  ? [new MiniCssExtractPlugin({ filename: '[name].css' })]
  : []

/** @type {import('webpack').Configuration} */
module.exports = {
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  module: {
    rules: [
      !isDev
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
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
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
  plugins: [
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    ...prodPlugins,
  ],
  externals: {
    react: 'react',
    'react-dom': 'reactDOM',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    stats: 'minimal',
    overlay: true,
    port: 8080,
    open: true,
  },
}
