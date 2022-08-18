const config = {
  title: "Fiction Tribe Webpack v5 Boilerplate", //Title
  staging: "/", //Surge staging site
  description: "A landing page Webpack boilerplate", //Meta Description
  template: path.resolve(__dirname, "../src/index.html"), //input file
  filename: "index.html", // output file
  charset: '<meta charset="utf-8">',
  viewport: '<meta name="viewport" content="width=device-width, initial-scale=1">',
};

module.exports = config;
