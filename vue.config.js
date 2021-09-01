module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "src": "@",
        "assets": "@/assets",
        "common": "@/common",
        "compontents": "@/compontents",
        "network": "@/network",
        "views": "@/views",
      }
    }
  },
  lintOnSave: false,
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  }
}