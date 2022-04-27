const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer:{
  //   open:true,
  //   host:'localhost',
  //   port:8080,
  //   https:false,
  //   proxy: {
  //     '/api':{
  //       target:'http://localhost/user/',
  //       ws: true,
  //       changOrigin: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // }

})
