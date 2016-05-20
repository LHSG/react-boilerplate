var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var bootstrapPath = __dirname + '/node_modules/bootstrap/dist/css';
var bootstrapSocialPath = __dirname + '/node_modules/bootstrap-social';
var fontAwesomePath = __dirname + '/node_modules/font-awesome/css';

module.exports = {

  // Efficiently evaluate modules with source maps
  devtool: "eval-source-map",

  // Set entry point to ./src/main and include necessary files for hot load
  entry:  [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    'react-hot-loader/patch',
    path.join(__dirname, 'app/app.jsx')
  ],

  // This will not actually create a bundle.js file in ./build. It is used
  // by the dev server for dynamic hot loading.
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: "/",
    filename: "app.js",
  },

  // Necessary plugins for hot load
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  // Transform source code using Babel and React Hot Loader
  module: {
    loaders: [
      {
        test: /\.jsx?$/, // Only run `.js` and `.jsx` files through Babel
        exclude: /node_modules/,
        loader: 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'
      },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      { test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/, loaders: ["file-loader"] },
    ]
  },

  // Automatically transform files with these extensions
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
    modulesDirectories: ['node_modules', bootstrapPath, bootstrapSocialPath, fontAwesomePath]
  },

  // Additional plugins for CSS post processing using postcss-loader
  postcss: [
    require('autoprefixer'), // Automatically include vendor prefixes
    require('postcss-nested') // Enable nested rules, like in Sass
  ]

}
