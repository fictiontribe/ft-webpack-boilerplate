const path = require("path");

const config = {
  title: "Fiction Tribe Webpack", //Title
  description: "A creative agency landing page boilerplate with webpack.", //Meta Description
  template: path.resolve(__dirname, "../src/index.html"), //Input file
  filename: "index.html", // Output file
  charset: 'utf-8', //Meta tag injected into HTML
  viewport: '<meta name="viewport" content="width=device-width, initial-scale=1">', //Meta tag injected into HTML
  // OG Meta data (Facebook)
  ogType: "website",
  ogTitle: "Fiction Tribe Webpack",
  ogDescription: "A creative agency landing page boilerplate with webpack.",
  ogImageLink: "https://i.imgur.com/X3GMYrh.png",
  // OG Meta data (Twitter)
  ogTwitterCard: "summary_large_image",
  ogTwitterTitle: "Fiction Tribe Webpack",
  ogTwitterDescription: "A creative agency landing page boilerplate with webpack.",
  ogTwitterImage: "https://i.imgur.com/X3GMYrh.png",
  // Analytics
  googleAnalyticsId: "", //G-XXXXXXXXXX
  googleTagManagerId: "", //GTM-XXXXXXX

  env: process.env.NODE_ENV, //Development or Production
  productionPublicFolder: "./", //Build script builds dist for relative paths by default

  
  //Default directories
  paths: {
    src: path.resolve(__dirname, "../src"), // Source files
    dist: path.resolve(__dirname, "../dist"), // Production build files
    public: path.resolve(__dirname, "../public"), // Static files that get copied to build folder
  },

};

module.exports = config;
