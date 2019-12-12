import axios from "./axios"
// https://m.aihuishou.com/portal-api/home-nav?cityid=
export const getTitle = ()=>{
    axios.get("/portal-api/home-nav?cityid=").then(res=>{
        console.log( res.data )
    })
}