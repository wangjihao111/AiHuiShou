import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom"
// import {mainRoutes} from "./routes"
import {mainRoutes} from "./routes"
import App from "./App"
import {
    My,
    Service,
    Detail,
    Login,
    Upgrade,
    PhionList,
    DetailsPage,
    PlaceChoose
    } from "./pages/index"
// import Place from "./pages/placeChoose/index"
// import Upgrade from "./pages/upgrade/index"
// import {Service,My,Login, Detail} from "./pages/index"

ReactDOM.render(
    (
        <Router>
            <Switch>
                <Route path="/placeChoose" component={PlaceChoose}/>
                <Route path="/upgrade" component={Upgrade}/>
                <Route path="/DetailsPage" component={DetailsPage} />
                <Route path="/PhionList" component={PhionList}/>
                <Route path="/service" component={Service}/>
                <Route path="/my" component={My}/>
                <Route path="/login" component={Login}/>
                 <Route path="/detail/:id" component={Detail}/>
                <Route path="/" excat component={App}  />
                {/*<Redirect to="/home/recommend" from="/" />*/}
            </Switch>
        </Router>
    ),document.getElementById("root"))