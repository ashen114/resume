const path = require("path");
// const { WebPlugin } = require("web-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");
module.exports = {
  output: {
    publicPath: "",
    filename: "[name].js"
  },
  resolve: {
    // 加快搜索速度
    modules: [path.resolve(__dirname, "node_modules")],
    // es tree-shaking
    mainFields: ["jsnext:main", "browser", "main"]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        // 提取出css
        loaders: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        }),
        include: path.resolve(__dirname, "src")
      },
      {
        test: /\.css$/,
        // 提取出css
        loaders: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader"]
        })
      },
      {
        test: /\.(gif|png|jpe?g|eot|woff|ttf|svg|pdf)$/,
        loader: "base64-inline-loader"
      }
    ]
  },
  entry: {
    main: "./src/main.js"
  },
  plugins: [
    // new WebPlugin({
    //   template: "./src/index.html",
    //   filename: "index.html"
    // }),
    // new ExtractTextPlugin({
    //   filename: "[name].css",
    //   allChunks: true
    // })
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: "head",
      inlineSource: ".(js|css)"
    }),
    new HtmlWebpackPlugin({
      template: "./src/en.html",
      filename: "en.html",
      inject: "head",
      inlineSource: ".(js|css)"
    }),
    new ExtractTextPlugin({
      filename: "[name]_[contenthash:8].css",
      allChunks: true
    }),
    new HtmlWebpackInlineSourcePlugin()
  ],
  devtool: "source-map"
};
