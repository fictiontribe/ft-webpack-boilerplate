const path = require("path");

const config = {
  title: "Fiction Tribe Webpack v5 Boilerplate", //Title
  staging: "/", //Surge staging site
  description: "A landing page Webpack boilerplate", //Meta Description
  template: path.resolve(__dirname, "../src/index.html"), //input file
  filename: "index.html", // output file
  charset: '<meta charset="utf-8">', //Meta tag injected into HTML
  viewport: '<meta name="viewport" content="width=device-width, initial-scale=1">', //Meta tag injected into HTML
  env: process.env.NODE_ENV,
  paths: {
    src: path.resolve(__dirname, "../src"), // Source files
    dist: path.resolve(__dirname, "../dist"), // Production build files
    public: path.resolve(__dirname, "../public"), // Static files that get copied to build folder
  },
};

module.exports = config;
