const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    contentBase: path.join(__dirname, "./dist/"),
    port: 9000
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // webpack아, .js나 .jsx로 끝나는 파일을 찾으면 이 설정을 적용해줘
        exclude: /node_modules/, // 근데 /node_modules/ 하위에서는 찾지 말고.
        loader: "babel-loader", // 찾으면 babel-loader를 통해서 불러올거야
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"] // babel-loader에는 이 설정들을 적용해줘
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./static/index.html"),
      filename: path.join(__dirname, "./dist/index.html")
    }),
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    })
  ]
};
