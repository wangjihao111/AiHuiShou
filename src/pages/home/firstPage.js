import React,{Component} from "react"
import Home from "./index"
import Footer from "./components/footer/index"
import {Route,Redirect,Switch} from "react-router-dom"
import {homeRoutes} from "../../routes/index"


class FirstPage  extends Component{
    render(){
        return(
            <Home>
                <Switch>
                    {
                        homeRoutes.map(route=>{
                            return <Route key={route.pathname} path={route.pathname} component={route.component}/>
                        })
                    }
                    <Redirect to={homeRoutes[0].pathname} from="/" exact/>
                </Switch>
            </Home>
        )
    }
}

export default FirstPage