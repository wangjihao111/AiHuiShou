import React, { Component, Fragment } from "react"
import 'antd/dist/antd.css';
import "./css/public.css"
import Footer from "../home/components/footer"

import "./css/index.css"
import {getInfo} from "../../api/api"
import { Carousel } from 'antd';
import { Item } from "rc-menu";
class upgrade extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listData: [
             
            ]}
    }
    addInfo(){
        const newArr = []
        for(let i = 0;i < 10; i++){
            newArr.push(this.state.listData)
        }
       
        return newArr
       
    }
    render() {
        return (
            <Fragment>
                <header><h2>爱回收 0元换新机</h2></header>
                <section className="sec">
                    <div className="box">
                        
                        
                        {
                            this.state.listData.map((item,index)=>{
                               
                                if(item.type == "slider"){
                                    console.log(item.items)
                                    return(
                                        <article key={index}>
                                            <Carousel autoplay >
                                               {
                                                   item.items.map((item3,index3)=>{
                                                       return(
                                                           <div><img src={item3.imageUrl}></img></div>
                                                       )
                                                   })
                                               }
                                            </Carousel>
                                        </article>
                                    )
                                }else if(item.type == "singleImage"){
                                    return(
                                        <aside className="title">
                                            <img src={item.items[0].imageUrl}></img>
                                        </aside>
                                    )
                                }else if(item.type == "newProduct"){
                                   if(item.items[0].displayPosition == "Left"){
                                       const item2 = item.items[0].items[0]
                                        return(
                                            <div key={index} className="list">
                                            <div className="picture">
                                                <div className="top"><p>{item2.subsidyText}</p><span>￥{item2.subsidies}</span></div>
                                                <img src={item2.imgUrl}></img>
                                                <div className="bottom"><p>{item2.skuParams}</p></div>
                                            </div>
                                            <div className="words">
                                                <h2>{item2.name}</h2>
                                                <p>{item2.promotionText}</p>
                                                <div><i>官方指导价</i><span>￥{item2.officialPrice}</span></div>
    
                                                <button onClick={this.toDetailsPage.bind(this,item2.productId)}>{item2.buttonText}</button>
                                            </div>
                                        </div>
                                        )
                                    }else if(item.items[0].displayPosition == "Multi"){
                                        const item2 = item.items[0].items[0]
                                        return(
                                            <div key={index} className="list list2">
                                            <div className="picture">
                                                <div className="top"><p>{item2.subsidyText}</p><span>￥{item2.subsidies}</span></div>
                                                <img src={item2.imgUrl}></img>
                                                <div className="bottom"><p>{item2.skuParams}</p></div>
                                            </div>
                                            <div className="words">
                                                <h2>{item2.name}</h2>
                                                <p>{item2.promotionText}</p>
                                                <div><i>官方指导价</i><span>￥{item2.officialPrice}</span></div>

                                                <button onClick={this.toDetailsPage.bind(this,"sssSW")}>{item2.buttonText}</button>
                                            </div>

                                        </div>
                                        )
                                    }
                                }
                               
                            })
                        }
                    </div>
                </section>
                <Footer/>
            </Fragment>
        )
    }
    toDetailsPage(id){
        this.props.history.push("/DetailsPage",{id})
    }

    componentDidMount(){
        getInfo().then(res=>{

            this.setState({
                listData : res.data.data 
            })           
        })
    }
}
export default upgrade