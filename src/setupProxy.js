const proxy = require("http-proxy-middleware");

// npm
// http://rap2api.taobao.org/app/mock/239579/home
module.exports = (app)=>{
    app.use("/api",proxy({
        target : "https://m.aihuishou.com/",
        pathRewrite: {
            '^/api' : '/',
        },
        changeOrigin: true,
        secure:true
    }))
}