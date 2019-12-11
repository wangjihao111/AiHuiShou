import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom"
// import {mainRoutes} from "./routes"
import App from "./App"

ReactDOM.render(
    (
        <Router>
            <Switch>
                <Route path="/" render={()=><App/>}/>
                {/*{*/}
                    {/*mainRoutes.map(route=>{*/}
                        {/*return <Route key={route.pathname} path={route.pathname} component={route.component}/>*/}
                    {/*})*/}
                {/*}*/}
                <Redirect to="/" exact/>
            </Switch>
        </Router>
    ),document.getElementById("root"))