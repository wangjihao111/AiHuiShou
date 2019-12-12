import React, { Component } from 'react'
import "../../assets/css/login/login.css"
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {withRouter,Link} from "react-router-dom"
const { TabPane } = Tabs;
class Login extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };
    
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login-container">
                <div className="login-header">
                    <Link to="/my"><span className="back"></span>登录</Link>
                </div>
                <div className="banner">
                    <img src="https://sr.aihuishou.com/c2b/zy-fe/cra_prod/neom/static/media/login_banner.8bac3c37.png"/>
                </div>
                <div className="card-container">
                    <Tabs type="card" className="login_cont">
                        <TabPane tab="手机号快捷登录" key="1">
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <Form.Item>
                                    {getFieldDecorator('phone', {
                                        rules: [{ required: true, message: 'Please input your username!' }],
                                    })(
                                        <Input
                                        type="number"
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="手机号"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('check', {
                                        rules: [{ required: true, message: 'Please input your Password!' }],
                                    })(
                                        <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="text"
                                        placeholder="验证码"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('remember', {
                                        valuePropName: 'checked',
                                        initialValue: true,
                                    })(<Checkbox>我已详细阅读并同意 用户协议</Checkbox>)}
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        登录
                                    </Button>
                                    <p style={{textAlign:"center"}}>未注册过的手机号将自动创建爱回收账户</p>
                                </Form.Item>
                            </Form>
                        </TabPane>
                        <TabPane tab="账户密码登录" key="2">
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <Form.Item>
                                    {getFieldDecorator('username', {
                                        rules: [{ required: true, message: 'Please input your username!' }],
                                    })(
                                        <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="爱回收账号"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: 'Please input your Password!' }],
                                    })(
                                        <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="密码"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('remember-', {
                                        valuePropName: 'checked',
                                        initialValue: true,
                                    })(<Checkbox>我已详细阅读并同意 用户协议</Checkbox>)}
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        登录
                                    </Button>
                                    <p style={{textAlign:"center"}}>未注册过的手机号将自动创建爱回收账户</p>
                                </Form.Item>
                            </Form>
     
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}

const Logins = Form.create({ name: 'normal_login' })(Login);
export default withRouter(Logins) 
