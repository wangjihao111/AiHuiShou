import React,{Component} from "react"
import "./home.css"
import {BrowserRouter,Route,Link,Redirect,Switch} from "react-router-dom"
import { Menu, Icon,Input } from 'antd';
import Shopping from "../../assets/img/shopping.png";
import Down from "../../assets/img/down.png";
import {withRouter} from "react-router-dom"
import 'antd/dist/antd.css';
import Footer from "./components/footer/index"

import {homeRoutes} from "../../routes/index"



class Home  extends Component{
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log(e.key);
        this.setState({
            current: e.key,
        });

    };
    handleClicks = e =>{
        // console.log(e.key)
        this.props.history.push(e.key)
        window.location.reload()
    }
    render(){
        console.log(this.props)
        return(
            <BrowserRouter>
            <div style={{position:"relative"}} >
                <div className="home" >
                    <div className="home-header">
                        <div className="home-header-wrapper">
                            <div className="location">
                                北京市
                                <img src={Down} alt=""/>
                            </div>
                            <div style={{height: "32px",
                                width: "228px"}}>
                                <Input style={{borderRadius: "32px",boxShadow: "0 0.01rem 0.2rem rgba(207,213,215,.3)"}}  prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder="搜索您要卖的品牌、机器型号"/>
                            </div>
                            <div>
                                <img style={{marginTop:"-2px",marginRight:"7px"}} src={Shopping} alt=""/>
                            </div>
                        </div>
                        <div className="navs-header">
                            <Menu style={{display:"flex",listStyle:"none"}} onClick={this.handleClick} defaultSelectedKeys={['${this.props.location.pathname}']} mode="horizontal">
                                    <Menu.Item key="/home/recommend" onClick={this.handleClicks} >
                                        <img className="logo-list" src="https://sr.aihuishou.com/appgateway/homenav/recommend-highlight@2x.png" alt=""/>
                                    </Menu.Item>
                                    <Menu.Item key="/home/phoneSell" onClick={this.handleClicks}>
                                        <img className="logo-list3" src="https://sr.aihuishou.com/appgateway/homenav/shouji-default@2x.png" alt=""/>
                                    </Menu.Item>
                                    <Menu.Item key="/home/laptoSell" onClick={this.handleClicks}>
                                        <img className="logo-list2" src="https://sr.aihuishou.com/appgateway/homenav/bijiben-default@2x.png" alt=""/>
                                    </Menu.Item>
                                    <Menu.Item key="/home/tabletSell" onClick={this.handleClicks}>
                                        <img className="logo-list3" src="https://sr.aihuishou.com/appgateway/homenav/pingban-default@2x.png" alt=""/>
                                    </Menu.Item>
                            </Menu>
                        </div>
                    </div>
                </div>
                {/*<Recommend/>*/}
                {/*<PhoneSell/>*/}
                {this.props.children}
                <Footer/>
            </div>
            </BrowserRouter>
        )
    }

}

export default withRouter(Home)