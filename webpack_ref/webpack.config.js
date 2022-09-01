const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "source-map",

  entry: "./src/index.tsx",

  output: {
    path: `${__dirname}/public`,
    filename: "main.js",
  },

  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        enforce: "pre",
        test: "/.js$/",
        loader: "source-map-loader",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
};
