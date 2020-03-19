## 一份优雅简约的简历

- 优化构建，页面秒开无闪烁
- 自适应屏幕兼容移动端
- 可在线浏览
- 自动生成 PDF，全自动化流程

## Todo-List

- [x] 加入英文版
- [x] 允许打包两个版本
    ```js
    // 修改webpack-dist.config.js，参考链接：https://www.cnblogs.com/amiezhang/p/9723565.html
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
    ```
- [ ] 修复生成两个版本的pdf  

## 使用

1. fork 本项目后再 clone 到本地修改
2. 进入项目目录执行`npm i`安装依赖
3. 执行`npm run dev`开始开发
4. 构建静态网页`npm run build`

## 自定义保存pdf
方案：`谷歌浏览器` - `右键`选择`打印` 或者 `(Ctrl + P)` - `目标打印机` 选择 `另保存为 PDF` - `更多设置`的`选项`可以加上`图片背景`，`边距`可以选择`无` - `保存`
