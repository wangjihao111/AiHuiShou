import axios from "./axios"
// https://m.aihuishou.com/portal-api/home-nav?cityid=
export const getTitle = ()=>{
    axios.get("/portal-api/home-nav?cityid=").then(res=>{
        console.log( res.data )
    })
}
export const getShopList =()=>{
    return axios.get("/portal-api/city/31/shop")
}
export const getShopList2 =()=>{
    return axios.post("/api/shop2")
}