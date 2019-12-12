import React, { Component } from 'react'
import "../../assets/css/service/index.css"
import 'antd/dist/antd.css';
import { 
    Tabs,
    Drawer, 
    Radio
} from 'antd';
import {getShopList,getShopList2} from "../../api/api"
import {withRouter} from 'react-router-dom'

import Footer from "../../pages/home/components/footer/index"
const { TabPane } = Tabs;
const RadioGroup = Radio.Group;

function callback(key) {
  console.log(key);
}
class Services extends Component {
    state = {
        data :[],
        data2:[],
        current: 'one',
        visible: false, 
        placement: 'top' 
      };
    render() {
        return (
            <div id="wrapper">
                <div className="shop-list">
                    <div className="header">服务站</div>
                    <Tabs defaultActiveKey="1" onChange={callback} className="service">
                        <TabPane tab="附近(73)" key="1" >
                            {
                                this.state.data.map((item)=>(
                                    <div className="list" key={item.id} onClick={this.jumpChange.bind(this,item.id)}>
                                        <div className="store-item">
                                            <a className="store-cont">
                                                <p className="title">{item.name}</p>
                                                <div className="desc">{item.address}</div>
                                                <div className="service-tags">
                                                    <span>旧机回收</span>
                                                    <span>以旧换新</span>
                                                </div>
                                            </a>
                                            <div className="actions">
                                                <a className="action-contact"><span>联系服务站</span></a>
                                                <a className="action-map"><span>查看地图</span></a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </TabPane>
                        <TabPane tab="东城区(5)" key="2">
                            <div>324345435</div>
                            <h1>ddefvvf</h1>
                        </TabPane>
                        <TabPane tab="西城区(6)" key="3">
                        Content of Tab Pane 3
                        </TabPane>
                        <TabPane tab="朝阳区(18)" key="4">
                        Content of Tab Pane 3
                        </TabPane>
                        <TabPane tab="海淀区(12)" key="5">
                        Content of Tab Pane 3
                        </TabPane>
                        <TabPane tab="丰台区(9)" key="6">
                        Content of Tab Pane 3
                        </TabPane>
                        <TabPane tab="房山区(3)" key="7">
                            {
                                this.state.data2.map((item)=>(
                                    <div className="list" key={item.id} onClick={this.jumpChange.bind(this,item.id)}>
                                        <div className="store-item">
                                            <a className="store-cont">
                                                <p className="title">{item.name}</p>
                                                <div className="desc">{item.address}</div>
                                                <div className="service-tags">
                                                    <span>旧机回收</span>
                                                    <span>以旧换新</span>
                                                </div>
                                            </a>
                                            <div className="actions">
                                                <a className="action-contact"><span>联系服务站</span></a>
                                                <a className="action-map"><span>查看地图</span></a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </TabPane>
                        <TabPane tab="顺义区(2)" key="8">
                        Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                    <RadioGroup
                        style={{ marginRight: 8 }}
                        defaultValue={this.state.placement}
                        onChange={this.onChange}
                        >
                    </RadioGroup>
                    <span className="region-all-btn"  onClick={this.showDrawer}></span>
                    <Drawer
                        title="服务站"
                        placement={this.state.placement}
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                        >
                        <div className="region-block">
                            <span className="region-all-btn"></span>
                            <div className="region-list">
                                <p>全部商区</p>
                            </div>
                        </div>
                        <ul className="region-modal" >
                            <li className="active">附近</li>
                            <li>东城区</li>
                            <li>西城区</li>
                            <li>朝阳区</li>
                            <li>丰台区</li>
                            <li>石景山区</li>
                            <li>海淀区</li>
                            <li>房山区</li>
                            <li>通州区</li>
                            <li>顺义区</li>
                            <li>昌平区</li>
                            <li>大兴区</li>
                            <li>怀柔区</li>
                            <li>密云区</li>
                        </ul>
                    </Drawer>
                    
                </div>
                
                <Footer/>
            </div>
        )
    }
    //请求列表数据
    getListRequest = ()=>{
        getShopList().then(res=>{
            res.data.data.map(item=>{
				return item
			})
            this.setState({
                data:[...res.data.data]
            })
        })
    }
    //请求列表数据
    getListRequest2 = ()=>{
        getShopList2().then(res=>{
            console.log(res)
            res.data.map(item=>{
                console.log(res.data)
				return item
			})
            this.setState({
                data2:[...res.data]
            })
        })
    }
    jumpChange=(id)=>{
        this.props.history.push({pathname:`/detail/${id}`,state:{data:id}})
    }
    //抽屉
    showDrawer = () => {
        this.setState({
          visible: true,
        });
      };
    
      onClose = () => {
        this.setState({
          visible: false,
        });
      };
    
      onChange = e => {
        this.setState({
          placement: e.target.value,
        });
      };
    componentDidMount(){
        this.getListRequest();
        this.getListRequest2();
    }
}
export default withRouter(Services)
