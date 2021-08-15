const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      "~": path.resolve(__dirname, "src"),
      assets: path.resolve(__dirname, "src/assets"),
    },
  },

  entry: "./src/main.js",
  output: {
    // path: path.resolve(__dirname, "dist"),
    // filename: "main.js",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        // 정규표현식
        test: /\.s?css$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              additionalData: "@import '~/scss/main';",
            },
          },
        ],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: "file-loader",
      },
    ],
  },

  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
    new VueLoaderPlugin(),
  ],

  devServer: {
    host: "localhost",
  },
};
