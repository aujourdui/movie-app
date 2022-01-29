const path = require("path");

module.exports = {
  mode: "development",
  entry: "./public/js/script.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
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
