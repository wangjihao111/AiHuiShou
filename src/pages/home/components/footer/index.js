import React,{Component} from "react"
import { Link } from 'react-router-dom'
import "./footer.css"


class Footer  extends Component{
    render(){
        return(
            <div className="footer" >
                <Link to="/" ><div className="down-one"></div></Link>
                <Link ><div className="down-two"></div></Link>
                <Link  ><div className="down-three"></div></Link>
                <Link  ><div className="down-four"></div></Link>
            </div>
        )
    }
}

export default Footer