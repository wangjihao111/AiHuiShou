import React,{Component,Fragment} from "react"
import ListContent from "./component/listContent"
import {getData,getTopDate} from "../../api/api"
import { Icon } from 'antd';
import 'antd/dist/antd.css';
import "./css/css.css"
class PhionList extends Component{
    constructor(props){
        super(props)
        this.state={
            list : [],
            topList : []
        }
    }
    render(){
        return(
            <Fragment>
                <header style={{position: "static",display:"flex",flexDirection:"row"}}><Icon onClick={this.goBack.bind(this)} className="back" type="left" /></header>
                <div className="nav" >
                    <ul onClick={this.changeNav.bind(this)}>
                        {
                            this.state.topList.map((item,index)=>{
                                return(
                                <li key={index} onClick={this.changeLeft.bind(this,item.id)}>{item.name}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <section style={{position:"static"}}>
                    <div className="box">
                        <div className="leftBox">
                            <div className="left">
                                <ul onClick={this.changeNav2.bind(this)}>
                                    {
                                        this.state.list.map((item,index)=>{
                                            return(
                                            <li key={index}>{item.name}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            
                        </div>
                        <div className="rightBox">
                            <ListContent />
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
    changeNav(e){
      
        const es = e.target.parentNode.childNodes
            for(let i = 0;i<es.length;i++){
                es[i].style.color = "#666"
                es[i].style.fontSize = "0.14rem"
                es[i].style.fontWeight = "500"
            }
            e.target.style.color = "#000"
            e.target.style.fontSize = "0.18rem"
            e.target.style.fontWeight = "800"
            
    }
    changeNav2(e){
        const es = e.target.parentNode.childNodes
            for(let i = 0;i<es.length;i++){
                es[i].style.color = "#666"
                es[i].style.background = "#fff"
                es[i].style.fontWeight = "500"
                es[i].style.border="1px solid #e1e1e1"
            }
            e.target.style.color = "#000"
            e.target.style.fontWeight = "800"
            e.target.style.border="none"
            e.target.style.background = "none"
            e.target.style.borderLeft = "0.05rem solid #f9e72c"
           
    }
    changeLeft(id){
        getData(id).then(res=>{
           
            this.setState({
                list : res.data.data
            })
          
        })
    }
    goBack(){
        this.props.history.go(-1)
    }
    componentDidMount(){
        getTopDate().then(res=>{
            this.setState({
                topList : res.data.data
            })
            
        })
        getData(1).then(res=>{
           
            this.setState({
                list : res.data.data
            })
           
        })
    }
}
export default PhionList