import path from 'path';
import { deepMerge } from './src/utils/merge';
import { common } from './webpack.common';

module.exports = deepMerge(common, {
  mode: 'development',
  cache: { type: 'memory' },
  output: {
    filename: 'main.js'
  },
  // plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    static: path.join(__dirname, 'public'),
    historyApiFallback: { disableDotRule: true },
    allowedHosts: 'all',
    host: '0.0.0.0',
    port: 3000,
    open: true
  }
});
