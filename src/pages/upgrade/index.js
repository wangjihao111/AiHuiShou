import React, { Component, Fragment } from "react"
import 'antd/dist/antd.css';
import "./css/public.css"
import Footer from "../home/components/footer"

import "./css/index.css"
// import {getInfo} from "../../api/api"
import { Carousel } from 'antd';
class upgrade extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listData: [
                {"productId": 33280,
                "skuId": 940,
                "isShowPromotion": true,
                "promotionText": "性价比超高 双模5G",
                "defaultPriceType": 2,
                "isShowOfficialPrice": true,
                "isShowSubsidyTag": true,
                "subsidyText": "换新再省",
                "isShowMemoryTag": true,
                "isShowGiftTag": true,
                "giftTagImage": null,
                "buttonText": "立即换新",
                "name": "荣耀 V30 8GB 128GB 冰岛幻境 5G全网通",
                "subsidies": 100,
                "imgUrl": "https://ahs-trade-in-static.aihuishou.com/trade-in-product-option-img/0755800e770f0ff7MTU3NDgyNzc2MDAxNQ==.jpg",
                "skuParams": "8GB+128GB",
                "price": 3699,
                "officialPrice": 3699,
                "id": 2257,
                "url": "https://m.aihuishou.com/n/#/newproduct/detail/33280",
                "urlType": 0,
                "order": 0,
                "wechatApplet": null,
                "createOn": "2019-12-09T11:27:54+08:00",
                "trackKey": "81575862035928_2257_8_newProduct_V30",
                "wechatAppidOrigin": null,
                "wechatAppid": null}
            ]
        }
    }
    addInfo(){
        const newArr = []
        for(let i = 0;i < 10; i++){
            newArr.push(this.state.listData)
        }
        console.log(newArr)
        return newArr
        console.log('ss')
    }
    render() {
        return (
            <Fragment>
                <header><h2>爱回收 0元换新机</h2></header>
                <section>
                    <div className="box">
                        <div className="banner">
                            <Carousel autoplay >
                                <div>

                                </div>
                                <div>

                                </div>
                                <div>

                                </div>
                                <div>

                                </div>
                            </Carousel>
                        </div>
                        <div className="title">

                            <img src="https://sr.aihuishou.com/sos/image/6369342773031882901633133764.jpg?x-oss-process=image/quality,q_80&size=750x75"></img>

                        </div>
                        {
                            this.state.listData.map((item,index)=>{
                                return(
                                    <div key={index} className="list">
                                        <div className="picture">
                                            <div className="top"><p>{item.subsidyText}</p><span>￥100</span></div>
                                            <img src="https://ahs-trade-in-static.aihuishou.com/trade-in-product-option-img/0755800e770f0ff7MTU3NDgyNzc2MDAxNQ==.jpg?x-oss-process=image/resize,m_fill,w_200,h_200/quality,Q_80"></img>
                                            <div className="bottom"><p>8GB+128GB</p></div>
                                        </div>
                                        <div className="words">
                                            <h2>荣耀 V30 8GB 128GB 冰岛幻境 5G全网通</h2>
                                            <p>性价比超高 双模5G</p>
                                            <div><i>官方指导价</i><span>￥3699</span></div>

                                            <button>立即换购</button>
                                        </div>
                                    </div>
                                )
                            })
                        }

                       
                        <div className="title">
                            <img src="https://sr.aihuishou.com/sos/image/636934281505770480536443817.jpg?x-oss-process=image/quality,q_80&size=750x75"></img>
                        </div>
                        <div className="phions">
                            {
                                this.state.listData.map((item,index)=>{
                                    return(
                                        <div key={index} className="list list2">
                                            <div className="picture">
                                                <div className="top"><p>{item.subsidyText}</p><span>￥100</span></div>
                                                <img src="https://ahs-trade-in-static.aihuishou.com/trade-in-product-option-img/0755800e770f0ff7MTU3NDgyNzc2MDAxNQ==.jpg?x-oss-process=image/resize,m_fill,w_200,h_200/quality,Q_80"></img>
                                                <div className="bottom"><p>8GB+128GB</p></div>
                                            </div>
                                            <div className="words">
                                                <h2>荣耀 V30 8GB 128GB 冰岛幻境 5G全网通</h2>
                                                <p>性价比超高 双模5G</p>
                                                <div><i>官方指导价</i><span>￥3699</span></div>

                                                <button>立即换购</button>
                                            </div>

                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                        <div className="bottom">
                           <img src="https://sr.aihuishou.com/sos/image/6368308736179278501250759584.png?x-oss-process=image/quality,q_80&size=750x656" />
                            <img src="https://sr.aihuishou.com/sos/image/636783346407056120344016565.png?x-oss-process=image/quality,q_80&size=750x210" />
                        </div>

                    </div>
                </section>
                <Footer/>
            </Fragment>
        )
    }

    // componentDidMount(){
    //     getInfo().then(res=>{
    //         console.log(res)
    //     })
    //     this.setState({
    //         listData : this.addInfo()
    //     },()=>{
    //         console.log(this.state.listData)
    //     })
    //
    //
    // }
}
export default upgrade