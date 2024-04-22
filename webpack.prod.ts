import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { deepMerge } from './src/utils/merge';
import { common } from './webpack.common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = deepMerge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin()
    // ,new WebpackBundleAnalyzer({ analyzerHost: '0.0.0.0' })
  ]
});
