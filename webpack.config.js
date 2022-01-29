const path = require("path");

module.exports = {
  mode: "development",
  entry: "./script.ts",
  output: {
    filename: "./public/js/script.js",
    path: path.resolve(__dirname, "public"),
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "awesome-typescript-loader",
        exclude: /node_modules/,
      },
      { test: /\.js$/, use: "source-map-loader", exclude: /node_modules/ },
    ],
  },
};
