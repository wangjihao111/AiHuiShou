import React,{Component} from "react"
import Home from "./pages/home/index"
import {Route,Redirect,Switch} from "react-router-dom"
import {homeRoutes,mainRoutes} from "./routes"
import {getTitle} from "./api/api"

class App  extends Component{
    render(){
        return(
            <Home>
                <Switch>
                    {
                        homeRoutes.map(route=>{
                            return <Route key={route.pathname} path={route.pathname} render={()=><route.component/>}/>
                        })
                    }
                    <Redirect to={homeRoutes[0].pathname} from="/" exact/>
                    {
                        mainRoutes.map(route=>{
                            return <Route key={route.pathname} path={route.pathname} render={()=><route.component/>}/>
                        })
                    }
                </Switch>
            </Home>
        )
    }
    componentDidMount(){
        getTitle()
    }
}

export default App