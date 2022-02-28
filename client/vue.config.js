module.exports = {
  devServer: {
    proxy: {
      '/article': {
        target: 'http://localhost:7001',
        // websocket服务
        ws: true,
        // 开启虚拟服务
        changeOrigin: true
      }
    }
  }
}
