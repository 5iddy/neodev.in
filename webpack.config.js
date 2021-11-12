const path = require("path");
const webpack = require("webpack");

const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
  mode: mode,
  entry: {
    main: "./src/_js/index.js",
  },
  output: {
    path: path.join(__dirname, "./src/assets/js/"),
  },
  devtool: mode === "development" ? "source-map" : false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
