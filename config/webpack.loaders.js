//Webpack loaders

const html = {
  test: /\.(html)$/,
  use: [
    {
      loader: 'html-loader',
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

const styles = {
  test: /\.(scss|css)$/,
  use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
};

module.exports = [html, javascript, images, fontsAndSvgs, styles];
