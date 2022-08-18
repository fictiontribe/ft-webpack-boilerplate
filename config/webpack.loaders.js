//Webpack loaders

const html = {
  test: /\.(html)$/,
  use: [
    {
      loader: "html-loader",
    },
  ],
};

const javascript = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: ["babel-loader"],
};

const images = {
  test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
  type: "asset/resource",
};

const fontsAndSvgs = {
  test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
  type: "asset/inline",
};

// Style loaders
const styleLoader = {
  loader: "style-loader",
};

const cssLoader = {
  loader: "css-loader",
};

const postcssLoader = {
  loader: "postcss-loader",
  options: {
    postcssOptions: {
      plugins: [require("autoprefixer")()],
    },
  },
};

const css = {
  test: /\.css$/,
  use: [styleLoader, cssLoader, postcssLoader],
};

const sass = {
  test: /\.s[c|a]ss$/,
  use: [
    styleLoader,
    cssLoader,
    postcssLoader,
    {
      loader: "sass-loader",
    },
  ],
};

module.exports = [html, javascript, images, fontsAndSvgs, css, sass];
