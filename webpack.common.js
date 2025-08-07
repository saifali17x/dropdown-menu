// webpack.common.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js', // <-- matches package.json "main": "dist/index.js"
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    library: {
      name: 'DropdownMenu', // UMD global name if used via <script>
      type: 'umd',
      export: 'default',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
    // Extract CSS only for production builds
    ...(isProd ? [new MiniCssExtractPlugin({ filename: 'styles.css' })] : []),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          // Use MiniCssExtractPlugin loader in production, otherwise style-loader (dev)
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]', // keep images in dist/assets/
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};
