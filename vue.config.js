module.exports = {
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/home/*':{
        // target:'http://localhost:8081',
        // target:'http://yangguo.natapp1.cc',
       target:'http://localhost:8887',
        changeOrigin:true,
        // pathRewrite:{
        //   '/home':''
        // }
      },
        '/pms/*':{
            target:'http://localhost:8866',
            changeOrigin:true,
        }
        ,
        '/cart/*':{
            target:'http://localhost:8844',
            changeOrigin:true,
        }
        ,
        '/sso/*':{
            target:'http://localhost:8877',
            changeOrigin:true,
        }
        ,
        '/member/*':{
            target:'http://localhost:8877',
            changeOrigin:true,
        } ,
        '/order/*':{
            target:'http://localhost:8844',
            changeOrigin:true,
        },
        '/es/*':{
            target:'http://localhost:8054',
            changeOrigin:true,
            pathRewrite:{
              '/es':''
            }
        }
    }
  },
  // publicPath:'/app',
  // outputDir:'dist',
  // indexPath:'index2.html',
  // lintOnSave:false,
  productionSourceMap:true,
  chainWebpack:(config)=>{
    config.plugins.delete('prefetch');
  }
}