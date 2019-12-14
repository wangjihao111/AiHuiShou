import React,{Component,Fragment} from "react"
import { Icon } from 'antd';
import 'antd/dist/antd.css';
import "./css/css.css"
import { Carousel ,BackTop} from 'antd';
import {getDetails} from "../../api/api"
// import constants from "jest-haste-map/build/constants";

class DetailsPage extends Component{
    constructor(props){
        super(props)
        this.state={
            phionList : [],
            phionList2 : [],
            picture : []
          
        }
    }
    render(){
       if(this.state.phionList.length && this.state.picture.length){
        const phion = this.state.phionList[0]
        console.log( phion.skus)
        console.log(this.state.phionList[0])
        return(
            <Fragment>
            <header style={{display:"flex",flexDirection:"row"}}><Icon onClick={this.goBack.bind(this)} className="back" type="left" /><p>{phion.productName}</p></header>
                <section onScroll={this.holdTop.bind(this)}>
                    <div className="box" >
                        <div className="banner">
                            <Carousel autoplay >
                                {
                                    phion.headerMedias.map((item2,index2)=>{
                                        return(
                                            <div key={index2}><img src={item2.imageUrl}></img></div>
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                        <div className="modle">
                            <div>
                                <img style={{display:"inline-block",width:"8%"}} src="data:image/png;base64,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"></img>
                                <span style={{fontWeight:"800",color:"#000"}}>{phion.productName}</span>
                                <p style={{fontSize:"0.14rem",color:"#666"}}>{phion.subtitle}</p>
                            </div>
                            <div className="choseModel">
                                <div><p>新机机型</p></div>
                                <div style={{display:"flex",justifyContent: "space-between"}}><span>{phion.skus[0].name.substr(6)}</span><span>¥{phion.skus[0].price/100}</span><Icon style={{margin:"auto 0"}} type="right" /></div>
                            </div>
                            <div className="choseModel2 ">
                                <div><p>旧机抵扣</p></div>
                                <div onClick={this.toPhione.bind(this)} style={{display:"flex",justifyContent: "space-between"}}><span>添加想卖的旧机，可抵扣新机款</span><Icon style={{margin:"auto 0"}} type="right" /></div>
                                <div><span>添加更多旧机</span></div>
                            </div>
                            <div className="choseModel2">
                                <div><p>优惠福利</p></div>
                                <div className="xinjiu" style={{display:"flex",justifyContent: "space-between"}}><span>以旧换新旧机加价</span><span style={{color:"#3eb052"}}>-¥100</span></div>
                                <div className="shoudan"><span>登录领优惠，旧机多抵2%（限首单）</span><Icon style={{margin:"auto 0"}} type="right" /></div>
                            </div>

                        </div>
                        <img style={{width:"100%"}} src="https://sr.aihuishou.com/cms/image/6371110262169252609517390.jpg" />
                        <ul className="nav" onClick={this.navChange.bind(this)}>
                            <li>图文详情</li>
                            <li>基本参数</li>
                            <li>包装售后</li>
                        </ul>
                        {
                            this.state.picture.map((item,index)=>{
                                return(
                                    <img ke={index} style={{width:"100%"}} src={item.imageUrl} />
                                )
                               
                            })
                        }
                        {/* <div className="xzxj">
                            <div><span >选择新机</span><Icon type="close" /></div>
                            <div><img style={{width:"0.6rem"}} src="https://ahs-trade-in-static.aihuishou.com/trade-in-product-option-img/77b8d39a4b9d5541MTU3NDgyNzc0MTM5MA==.jpg"></img><span>¥3699</span></div>
                            <div><span>所在地区</span><span>（所在城市可能会影响库存，请准确选择）</span><p><Icon type="tag" /><span className="text">北京市</span><Icon type="right" /></p></div>
                            <div></div>
                        </div> */}
                    </div>
                    
                </section>
                <footer>
                    <div className="kefu"><Icon className="erji" type="customer-service" /><p>客服</p></div>
                    <div className="btn1">添加旧机获取超值换新价</div>
                    <div className="btn2">添加旧机</div>
                </footer>
                <div>
                    <BackTop target={() => document.getElementsByTagName("section")[0]} />
                    <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
                    
                </div>
            </Fragment>
        )
       }else{
           return(<div>暂无数据</div>)
       }
       
    }
    // shouldComponentUpdate(props,state){
    //     console.log(state)
    //     // if(!props.length){
    //     //     return false
    //     // }else{
    //     //     return true
    //     // }
    // }
    componentDidMount(){
        //请求数据
        getDetails()
        .then(res=>{
            // console.log(res)
           for(let i=0;i< res.data.data.length;i++){
                if(res.data.data[i].productId == this.props.location.state.id){
                    this.setState({
                        
                        phionList : [res.data.data[i]],
                        picture : res.data.data[i].introduction
                    })
                }
           } 
        })
    }
    //跳转列表
    toPhione(){
        this.props.history.push("/PhionList")
    }
    //返回上一页
    goBack(){
        this.props.history.go(-1)
    }
    //选项卡
    navChange(e){
    const es = e.target.parentNode.childNodes
    for(let i = 0;i<es.length;i++){
        es[i].style.color = "#666"
    }
       e.target.style.color = "#c79c56"
    }

    //选项卡吸顶
    holdTop(e){
        const nav = document.getElementsByClassName("nav")[0]
        const s = e.target
        if(s.scrollTop > 924){
            nav.style.position = "fixed"
            nav.style.top = "0.45rem"
        }else{
            nav.style.position="static"
        }
        
    }
}
export default DetailsPage