const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use("/api",proxy({
        target : "https://m.aihuishou.com/portal-api",
        pathRewrite: {
            '^/api' : '/',
        },
        changeOrigin: true,
        secure:true
    }))
}