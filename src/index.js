import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom"
// import {mainRoutes} from "./routes"
import {mainRoutes} from "./routes"
import App from "./App"
import Place from "./pages/placeChoose/index"
import Upgrade from "./pages/upgrade/index"


ReactDOM.render(
    (
        <Router>
            <Switch>
                <Route path="/placeChoose" component={Place}/>
                <Route path="/upgrade" component={Upgrade}/>
                <Route path="/" component={App}  />
                {/*<Redirect to="/home/recommend" from="/" />*/}
            </Switch>
        </Router>
    ),document.getElementById("root"))