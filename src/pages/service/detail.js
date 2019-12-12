import React, { Component, Fragment } from 'react'
import "../../assets/css/service/detail.css"
import {getShopList} from "../../api/api"
import {withRouter} from 'react-router-dom'
class Detail extends Component {
    // constructor(props, context) {
    //     super(props, context)
    //     console.info(props)
    //     // this.userList = props.location.state.data
    //     this.index = props.location.state.data
    // }
    state = {
        data:[]
    }   
    render() {
        return (
            <Fragment>
                {
                this.state.data.map((item)=>(
                    <div className="shop-detail" key={item.id}>
                        <div className="head">
                            <span className="back" onClick={this.jumpBack.bind(this)}></span>
                            <h2>服务站信息</h2>
                        </div>
                        <div className="shop-cover">
                            <img src={item.imgUrl} alt="" />
                        </div>
                        <div className="detail-section">
                            <h3>{item.name}</h3>
                            <span className="operating-hours">营业时间 {item.normalBusinessStartTime} - {item.normalBusinessEndTime}</span>
                            <p className="address-text"><a href="#/shop/map/32">{item.address}</a></p>
                            <div className="contact-item"><a className="link" href="tel:02180111030,1018">{item.mobile.split(',')[0]} 转分机号 {item.mobile.split(',')[1]}</a></div>
                        </div>
                        <div className="service-section">
                            <h3 className="service-tit">服务</h3>
                            <div className="service-content">
                                <div className="service-item">
                                    <h4 className="item-title">旧机回收</h4>
                                    <div className="item-desc">手机 笔记本 平板 摄影摄像 智能数码</div>
                                    <a className="item-btn" href="#/category?type=shouji">去回收</a>
                                    <span className="item-icon item-icon-0"></span>
                                </div>
                            </div>
                            <div className="service-item">
                                <h4 className="item-title">以旧换新</h4>
                                <div className="item-desc">正品自营 全国联保</div>
                                <a className="item-btn" href="#/ofnew/home">去换新</a>
                                <span className="item-icon item-icon-2"></span>
                            </div>
                        </div>
                    </div>
                ))
                }
            </Fragment>
        )    
    }
    componentDidMount(){
        this.getListRequest(this.props.location.state.data);
    }
    //请求列表数据
    getListRequest = (id)=>{
        getShopList().then(res=>{
            let data = res.data.data.filter(item=>{
                return item.id === id
            })
            this.setState({
                data
            })
            console.log(this.state.data)
        })
    } 
    jumpBack(){
        this.props.history.push("/service")
    }
}
export default withRouter(Detail) 