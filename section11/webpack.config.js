const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),  // tsconfig.json で "outDir" で指定したものとあわせる
    publicPath: 'dist'
  },
  devtool: 'inline-source-map',  // tsconfig.json で "sourceMap": true を指定している時は設定する
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']  // デフォルトでは .js だけ対象となっているので .ts も含める
  }
};
