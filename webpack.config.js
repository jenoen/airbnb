const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',  // This is the new webpack 5 way to handle assets
        generator: {
          filename: 'images/[name][ext]'
        }
      }
      // {
      //   test: /\.(png|jpe?g|gif|svg)$/,  // Handle image files
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[hash:8].[ext]',  // Output filename pattern
      //         outputPath: 'images',  // Output directory for images
      //       },
      //     },
      //   ],
      // },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devServer: {
    static: [
      {directory: path.join(__dirname, 'public'),
        publicPath: '/'
      },
    //   {
    //   directory: path.join(__dirname, 'dist'),
    //   publicPath: '/'
    // }
  ],
    compress: true,
    port: 9000,
    open: true,
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
};
