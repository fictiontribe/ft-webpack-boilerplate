const path = require("path");

const config = {
  title: "Fiction Tribe Webpack v5 Boilerplate", //Title
  description: "A creative agency landing page boilerplate with webpack.", //Meta Description
  template: path.resolve(__dirname, "../src/index.html"), //input file
  filename: "index.html", // output file
  charset: 'utf-8', //Meta tag injected into HTML
  viewport: '<meta name="viewport" content="width=device-width, initial-scale=1">', //Meta tag injected into HTML
  // OG Meta data (Facebook)
  ogType: "website",
  ogTitle: "Fiction Tribe Webpack v5 Boilerplate",
  ogDescription: "A creative agency landing page boilerplate with webpack.",
  ogImageLink: "https://picsum.photos/1200/630",
  // OG Meta data (Twitter)
  ogTwitterCard: "summary_large_image",
  ogTwitterTitle: "Fiction Tribe Webpack v5 Boilerplate",
  ogTwitterDescription: "A creative agency landing page boilerplate with webpack.",
  ogTwitterImage: "https://picsum.photos/1200/630",

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
