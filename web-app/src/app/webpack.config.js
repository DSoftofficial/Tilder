const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js',
  },
  optimization: {
    minimize: true,
    namedModules: true,
    concatenateModules: true,
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: 'production' } }),
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
    // Ignore require() calls in vs/language/typescript/lib/typescriptServices.js
    new webpack.IgnorePlugin(
      /^((fs)|(path)|(os)|(crypto)|(source-map-support))$/,
      /vs(\/|\\)language(\/|\\)typescript(\/|\\)lib/
    ),
    new webpack.ContextReplacementPlugin(
      /monaco-editor(\\|\/)esm(\\|\/)vs(\\|\/)editor(\\|\/)common(\\|\/)services/
    ),
    new MiniCssExtractPlugin({ filename: 'monaco.css' }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};
module.exports = [
  {
    ...common,
    entry: {
      monaco: './index',
    },
    output: {
      ...common.output,
      path: path.resolve('dist', 'monaco'),
      library: 'monaco',
      libraryTarget: 'umd',
    },
  },
  {
    ...common,
    target: 'webworker',
    output: {
      ...common.output,
      path: path.resolve('dist', 'workers'),
    },
    entry: {
      // Language workers
      'editor.worker': 'monaco-editor/esm/vs/editor/editor.worker',
      'json.worker': 'monaco-editor/esm/vs/language/json/json.worker',
      'ts.worker': 'monaco-editor/esm/vs/language/typescript/ts.worker',
    },
  },
];
