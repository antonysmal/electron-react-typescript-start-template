import type { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

rules.push({
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
});

plugins.push(
  new HtmlWebpackPlugin({
    template: './src/renderer/index.html',
  })
);

export const rendererConfig: Configuration = {
  entry: './src/renderer/index.tsx',
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
};
