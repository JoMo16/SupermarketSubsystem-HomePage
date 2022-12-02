const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy: {
      '/api': {
        // target: 'http://192.168.40.36:8022', // 根据自己情况配置
        target: 'http://192.168.206.232:8022', // 根据自己情况配置
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/su"
        }
      },
    }
  }
})
