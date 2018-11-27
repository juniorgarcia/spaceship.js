const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");

let config = {
  entry: "./src/spaceship.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "spaceship.min.js",
    library: "spaceship"
  },
  mode: process.env.NODE_ENV,
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: "babel-loader"
      }
    ]
  }
};

if (process.env.NODE_ENV === "production") {
  config.plugins.push(
    new CompressionPlugin({
      test: /spaceship.min.js/,
      cache: true
    })
  );
}

module.exports = config;
