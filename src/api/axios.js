import axios from "axios";
import 'antd/dist/antd.css';
//1.先实例化axios

const service = axios.create({
    baseURL: "https://m.aihuishou.com/portal-api"
})
//2.请求拦截器
service.interceptors.request.use(config=>{
    // config.headers.authToken = "12312412412312"
    return config
})

//3.相应拦截器
service.interceptors.response.use(res=>{
        return res.data
})


export default service;