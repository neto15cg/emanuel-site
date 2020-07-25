const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, '/'),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@utils': path.join(__dirname, './src/utils'),
      '@styles': path.join(__dirname, './src/styles'),
      '@components': path.join(__dirname, './src/components'),
      '@pages': path.join(__dirname, './src/pages'),
      '@routes': path.join(__dirname, './src/routes'),
      '@context': path.join(__dirname, './src/context'),
      '@services': path.join(__dirname, './services'),
    },
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public'),
  },
  plugins: [
    new Dotenv(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
};
