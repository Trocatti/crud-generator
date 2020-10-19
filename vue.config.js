const packageJson = require("./package.json");

process.env.VUE_APP_NAME = packageJson.name;
process.env.VUE_APP_VERSION = packageJson.version;

module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? `/${packageJson.name}` : "/",
  transpileDependencies: [/\bvue-awesome\b/],
  //Debug vscode-vue
  configureWebpack: {
    devtool: "source-map"
  }
  // devServer: {
  //     disableHostCheck: true
  // }
};
