module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "localhost:3000/api/",
        ws: true,
        changeOrigin: true
      }
    }
  }
}