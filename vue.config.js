module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        // 这里的选项会传递给 postcss-loader
        postcssOptions: {
          plugins: {
            "autoprefixer": {
              "overrideBrowserslist": [
                "Android 4.1",
                "iOS 7.1",
                "Chrome > 31",
                "ff > 31",
                "ie >= 8"
              ]
            },
            "postcss-pxtorem": {
              "rootValue": 37.5,
              "propList": [
                "*"
              ]
            }
          },
        }
      }
    }
  },
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:3000",
        ws: true,
        changeOrigin: true
      }
    }
  }
}