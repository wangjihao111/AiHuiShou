import React,{Component} from "react"
import { Link } from 'react-router-dom'
import "./footer.css"


class Footer  extends Component{
    handleupgrade= e =>{
        console.log(this.props)
        // this.props.history.push('/upgrade')
    }
    render(){
        return(
            <div className="footer" >
                <Link to="/home/recommend"><div  className="down-one"></div></Link>
                <Link to="/upgrade"><div className="down-two"></div></Link>
                <Link to="/service"><div className="down-three"></div></Link>
                <Link to="/my"><div className="down-four"></div></Link>
            </div>
        )
    }
}

export default Footer