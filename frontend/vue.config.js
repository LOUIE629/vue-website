const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // host: '0.0.0.0',
    // port: 8080,
    /* 使用代理 */
    proxy: { // string | Object
        '/api': {
            /* 目标代理服务器地址 */
            target: 'http://api.map.baidu.com/location/ip?ak=gG84Tx1UO2eungf7uo3i0jD30wdc1Brn',
            /* 允许跨域 */
            changeOrigin: true,
            pathRewrite: {
              '^/api': '' //规定请求地址以什么作为开头
          }
        },
    },
  }
})
