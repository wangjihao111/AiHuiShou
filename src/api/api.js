import axios from "./axios"

export const getTitle = ()=>{
    axios.post("/home-tab?cityid=31&latitude=&longitude=").then(res=>{
        console.log( res.data )
    })
}