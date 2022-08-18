//Webpack Plugins

//Dependencies
const path = require("path");

//Plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const htmlWPPlugin = new HtmlWebpackPlugin({
  title: "Fiction Tribe Webpack v5 Boilerplate", //Title
  description: "A landing page Webpack boilerplate", //Meta Description
  template: path.resolve(__dirname, "../src/index.html"), //input file
  filename: "index.html", // output file
  charset: '<meta charset="utf-8">',
  viewport:
    '<meta name="viewport" content="width=device-width, initial-scale=1">',
});

const cleanWPPlugin = new CleanWebpackPlugin();

const extractCSSPlugin = new MiniCssExtractPlugin({
  filename: "style.[contenthash].css",
});


module.exports = [htmlWPPlugin, cleanWPPlugin, extractCSSPlugin];
