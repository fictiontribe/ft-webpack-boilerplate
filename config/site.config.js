const path = require("path");

const config = {
  title: "Fiction Tribe Webpack", //Title
  description: "A creative agency landing page boilerplate with Webpack.", //Meta Description
  template: path.resolve(__dirname, "../src/index.html"), //Input file
  filename: "index.html", // Output file
  charset: 'utf-8', //Meta tag injected into HTML
  viewport: '<meta name="viewport" content="width=device-width, initial-scale=1">', //Meta tag injected into HTML
  // OG Meta data (Facebook)
  ogType: "website",
  ogTitle: "Fiction Tribe Webpack",
  ogDescription: "A creative agency landing page boilerplate with Webpack.",
  ogImageLink: "https://i.imgur.com/X3GMYrh.png",
  // OG Meta data (Twitter)
  ogTwitterCard: "summary_large_image",
  ogTwitterTitle: "Fiction Tribe Webpack",
  ogTwitterDescription: "A creative agency landing page boilerplate with Webpack.",
  ogTwitterImage: "https://i.imgur.com/X3GMYrh.png",

  // Analytics
  googleAnalyticsId: "", //G-XXXXXXXXXX
  googleTagManagerId: "", //GTM-XXXXXXX

  env: process.env.NODE_ENV, //Development or Production
  
  //Default directories
  paths: {
    src: path.resolve(__dirname, "../src"), // Source files
    dist: path.resolve(__dirname, "../dist"), // Production build files
    public: path.resolve(__dirname, "../public"), // Static files that get copied to build folder
  },

  staging: "/REPLACE-ME", //Surge staging site

};

module.exports = config;
