//Dependencies
const path = require("path");

// Optimization
const TerserPlugin = require("terser-webpack-plugin"); //JS
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin"); //Images

//External JS
const loaders = require("./webpack.loaders");
const plugins = require("./webpack.plugins");
const config = require("./site.config");

module.exports = {
  entry: [
    config.paths.src + "/javascripts/index.js",
    config.paths.src + "/stylesheets/styles.scss",
  ],

  output: {
    path: config.paths.dist,
    publicPath: process.env.NODE_ENV === "production" ? config.productionPublicFolder : "/",
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

  mode: ["production", "development"].includes(config.env)
    ? config.env
    : "development",
  devServer: {
    static: {
      directory: config.paths.src,
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
