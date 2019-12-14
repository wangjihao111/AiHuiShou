import axios from "./axios"
// https://m.aihuishou.com/portal-api/home-nav?cityid=
export const getTitle = ()=>{
    axios.get("/api/portal-api/home-nav?cityid=").then(res=>{
        // console.log( res.data )
    })
}
export const getShopList =()=>{
    return axios.get("/api/portal-api/city/31/shop")
}
export const getShopList2 =()=>{
    return axios.post("/api/api/shop2")
}
export const getInfo = ()=>{
    return axios.get("/api/portal-api/ofnew/home?cityId=31&longitude=&latitude=&inquiryKey=&productId=")
}
export const getTopDate = ()=>{
    return axios.get("/api/portal-api/sub-category")
}
export const getData = (page)=>{
    // return axios.post("/dubai-gateway/v2/products/33280?cityId=31")
    return axios.get("/api/portal-api/product/category-brands/" + page)
}
export const getDetails = ()=>{
    
    return axios.post("http://rap2api.taobao.org/app/mock/239579/Details")
}
export const getList = ()=>{
    
    return axios.post("http://rap2api.taobao.org/app/mock/239579/phioneListInfo")
}
export const getCity =()=>{
    return axios.get("/api/portal-api/city/all")
}
