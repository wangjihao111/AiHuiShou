import React,{Component} from "react"
import { PageHeader,Input,Icon,Tooltip } from 'antd';
import 'antd/dist/antd.css'
import "./city.css"
import {getCity, getShopList} from "../../api/api"
import CityBack from "../../assets/img/CityBack.png"



class placeChoose  extends Component{
    state = {
        data :[],
        alphabetList:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"],
        cityChoose:[]

    }
    render(){
        return(
            <div style={{position:"relative"}}>
                <div className="cityHeader">
                    <div className="City-header">
                        <span onClick={this.handlerBack} style={{marginLeft:"-0.4rem"}}>
                            <img src={CityBack} alt=""/>
                        </span>
                        <span>选择城市</span>
                        <span></span>
                    </div>
                    <div style={{width:"100%",height:".46rem",backgroundColor:"#d8d8d8"}}>
                        <Input style={{borderRadius: ".01rem",width:"90%",boxShadow: "0 0.01rem 0.2rem rgba(207,213,215,.3)",margin:".1rem .1rem"}}  prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder="请输入城市名称查询"/>
                    </div>
                </div>
                <div style={{display:"flex",flexDirection:"column",marginTop:"1rem"}} className="cityChoose">
                    {
                        this.state.data.map((item)=>(
                            <div key={item.name} onClick={this.handlerChoose.bind(this,item.name)}>{item.name}</div>
                        ))
                    }
                </div>
                <div className="alphabet">
                    {
                        this.state.alphabetList.map((item)=>(
                            <span key={item}>{item}</span>
                        ))
                    }

                </div>
            </div>
        )
    }
    getListCity = ()=>{
        getCity().then(res=>{
            res.data.data.map(item=>{
                return item
            })
            this.setState({
                data:[...res.data.data]
            })
        })
    }
    handlerBack= e =>{
        this.props.history.go(-1)
    }
    handlerChoose(name) {
        // this.props.history.go(-1)
        console.log(name)
        this.state.cityChoose.push(name)
        //
        // this.setState({
        //     cityChoose : this.state.cityChoose.push(name)
        // })
        // console.log(this.state.cityChoose.splice(-1))
        this.props.history.go(-1)
        console.log(this.state.cityChoose)
    }
    componentDidMount(){
        this.getListCity()
    }
}


export default placeChoose