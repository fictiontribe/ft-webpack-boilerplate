//Webpack Plugins

//Dependencies
const path = require("path");

//Plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const htmlWPPlugin = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, "../src/index.html"), //input file
  filename: "index.html", // output file
});

const cleanWPPlugin = new CleanWebpackPlugin();

const extractCSSPlugin = new MiniCssExtractPlugin({
  filename: "style.[contenthash].css",
});

module.exports = [htmlWPPlugin, cleanWPPlugin, extractCSSPlugin];
