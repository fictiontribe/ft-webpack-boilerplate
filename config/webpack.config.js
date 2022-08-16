//Dependencies
const path = require("path");

//External JS
const loaders = require("./webpack.loaders");
const plugins = require("./webpack.plugins");

module.exports = {
  entry: [
    path.join(__dirname, "../src/js/index.js"),
    path.join(__dirname, "../src/stylesheets/styles.scss"),
  ],
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].bundle.js",
  },

  plugins,

  mode: "development",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "../src"),
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
