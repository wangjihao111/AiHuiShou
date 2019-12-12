import React,{Component} from "react"
import Home from "./pages/home/index"
import {Route,Redirect,Switch} from "react-router-dom"
import {homeRoutes,mainRoutes} from "./routes"
import FirstPage from "./pages/home/firstPage"
import Footer from "./pages/home/components/footer/index"
import {getTitle} from "./api/api"

class App  extends Component{
    render(){
        return(
           <div>
               <FirstPage/>
               <Footer/>
           </div>
        )
    }
    componentDidMount(){
        getTitle()
    }
}

export default App