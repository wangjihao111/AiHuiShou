import {
    Recommend,
    PhoneSell,
    LaptoSell,
    TabletSell,
} from "../pages/index"
import Home from "../pages/home/index"

export const mainRoutes = [{
    pathname : "/",
    component : Home
},]


export const homeRoutes = [{
    pathname : "/home/recommend",
    component : Recommend
},{
    pathname : "/home/phoneSell",
    component : PhoneSell
},{
    pathname : "/home/laptoSell",
    component : LaptoSell
},{
    pathname : "/home/tabletSell",
    component : TabletSell
}]