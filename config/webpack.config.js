//Dependencies
const path = require("path");

// Optimization
const TerserPlugin = require("terser-webpack-plugin"); //JS
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin"); //Images
const { extendDefaultPlugins } = require("svgo");

//External JS
const loaders = require("./webpack.loaders");
const plugins = require("./webpack.plugins");
const paths = require("./paths");

module.exports = {
  entry: [
    paths.src + "/javascripts/index.js",
    paths.src + "/stylesheets/styles.scss",
  ],

  output: {
    path: paths.dist,
    publicPath: '/',
    filename: "[name].bundle.js",
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            // Lossless optimization with custom option
            // Feel free to experiment with options for better result for you
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
              // Svgo configuration here https://github.com/svg/svgo#configuration
              [
                "svgo",
                {
                  plugins: [
                    // set of built-in plugins enabled by default
                    "preset-default",
                  ],
                },
              ],
            ],
          },
        },
      }),
    ],
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
