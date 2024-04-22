import path from 'path';
import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import type webpack from 'webpack';

export const common: webpack.Configuration = {
  cache: { type: 'filesystem' },
  devtool: 'source-map',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          chunks: 'initial',
          filename: 'vendors.[contenthash].js',
          priority: 1,
          maxInitialRequests: 2, // create only one vendor file
          minChunks: 1
        }
      }
    }
  },
  entry: './src/index.tsx',
  module: {
    rules: [
      // {
      //   test: /\.(ico|png|jpe?g|gif|svg|woff2)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         outputPath: 'assets',
      //         name: '[path][name].[ext]'
      //       }
      //     }
      //   ]
      // },
      // {
      //   test: /\.css$/i,
      //   use: ['style-loader', 'css-loader']
      // },
      // {
      //   test: /\.less$/i,
      //   use: [
      //     {
      //       loader: 'style-loader'
      //     },
      //     {
      //       loader: 'css-loader',
      //       options: { url: false }
      //       // loader: 'css-loader?' + JSON.stringify({ url: false })
      //     },
      //     {
      //       loader: 'less-loader',
      //       options: {
      //         lessOptions: {
      //           javascriptEnabled: true
      //         }
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    symlinks: false,
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new CopyPlugin({ patterns: [{ from: 'public' }] }),
    new HtmlWebpackPlugin({ inject: true, template: path.resolve(__dirname, './src/index.html') }),
    new ForkTsCheckerWebpackPlugin({ async: false }),
    new ESLintPlugin({ extensions: ['js', 'jsx', 'ts', 'tsx'] })
  ]
};
