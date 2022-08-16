//Webpack Plugins

//Dependencies
const path = require("path");

//Plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const htmlWPPlugin = new HtmlWebpackPlugin({
  title: "Fiction Tribe Webpack v5 Boilerplate", //Title
  description: "A landing page Webpack boilerplate", //Meta Description
  template: path.resolve(__dirname, "../src/index.html"), //input file
  filename: "index.html", // output file
  charset: '<meta charset="utf-8">',
  viewport: '<meta name="viewport" content="width=device-width, initial-scale=1">',
});

const cleanWPPlugin = new CleanWebpackPlugin();

module.exports = [htmlWPPlugin, cleanWPPlugin];
