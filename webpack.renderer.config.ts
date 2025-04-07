import type { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

const isDev = process.env.NODE_ENV !== 'production';

rules.push({
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
});

plugins.push(
  new HtmlWebpackPlugin({
    template: './src/renderer/index.html',
    meta: {
      'Content-Security-Policy': {
        'http-equiv': 'Content-Security-Policy',
        content: isDev
          ? "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;"
          : "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:;"
      }
    }
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
