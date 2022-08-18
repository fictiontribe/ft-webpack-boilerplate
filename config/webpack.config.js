//Dependencies
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

//External JS
const loaders = require("./webpack.loaders");
const plugins = require("./webpack.plugins");
const paths = require('./paths')

module.exports = {

  entry: [
    paths.src + "javascripts/index.js",
    paths.src + "../src/stylesheets/styles.scss",
  ],

  output: {
    path: paths.dist,
    filename: "[name].bundle.js",
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },

  plugins,

  mode: "development",
  devServer: {
    static: {
      directory: paths.src,
      watch: true,
      serveIndex: true,
    },
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  module: {
    rules: loaders,
  },
  
};
