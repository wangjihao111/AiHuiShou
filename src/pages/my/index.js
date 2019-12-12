import React, { Component } from 'react'
import { Icon } from 'antd';
import "../../assets/css/my/index.css"
import Footer from "../../pages/home/components/footer/index"
import {Link} from "react-router-dom"
export default class My extends Component {
    render() {
        return (
            <div className="my-wrap">
                <div className="account-center">
                    <div className="header-tit">
                        <span>我的<span></span></span>
                        <Icon type="shopping-cart" />
                    </div>
                    <div className="user-content">
                        <div className="avatar">
                            <img src="data:image/png;base64,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" alt=""/>
                        </div>
                        <Link to="/login"><a className="to-login">
                            <p className="login-now">点击登录</p>
                            <div className="login-tips" ></div>
                        </a></Link>
                        <Link to="/login"><a className="setting">设置</a></Link>
                    </div>
                    <div className="package">
                        <a className="wallet-box" href="#/wallet">
                            <span className="left">
                                <span className="title">钱包</span>
                                <span className="tip">登录后查看</span>
                            </span>
                            <span className="right"></span>
                        </a>
                        <a className="coupon-box" href="#/wallet">
                            <span className="left">
                                <span className="title">券包</span>
                                <span className="tip">登录后查看</span>
                            </span>
                            <span className="right"></span>
                        </a>
                    </div>
                    <div className="order">
                        <h3>我的订单</h3>
                        <ul>
                            <li><a href="https://m.aihuishou.com/rn/#/user/myOrderList?tab=old" className="order-link">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAALVBMVEUAAAAyMjIyMjIzMzMzMzMzMzMzMzMyMjI0NDQyMjIyMjI0NDQzMzM2NjYzMzNAAop2AAAADnRSTlMAf0Vz7+LZmTv4WyKwExgAiwQAAAB3SURBVDjLYyATKAsiASOEeNs7FJABE+eYhyrxsgEqwfbOHdmokncJUAm9JxuQLeT2ewRl2T1HdUrdYyhD7iGI5AKaInwBzkcw1oHsPUBIgrBRcDAqMSpBbQnVIBwScU9JlUAYRSjjYGY1QpkTMzsTKAAwiwzyAAAp1p6ljWaH1QAAAABJRU5ErkJggg==" alt=""/>
                                <span>旧机回收</span>
                                </a>
                            </li>
                            <span className="after"></span>
                            <li><a href="https://m.aihuishou.com/rn/#/user/myOrderList?tab=new" className="order-link">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAhFBMVEUAAAAzMzMzMzMyMjIyMjIzMzMzMzMzMzMzMzMzMzM0NDQuLi4xMTEyMjIzMzMzMzMzMzMzMzMzMzMzMzM0NDQ0NDQzMzM0NDQvLy8zMzMzMzMzMzMzMzM0NDQzMzMyMjIzMzMyMjIzMzMyMjIyMjIzMzMyMjIyMjIzMzM0NDQzMzMzMzPtaGukAAAAK3RSTlMAf9YeKcc34d/YIwQZ9e2qZUT8+FM9FRAK8KWNeVdMNC/pzrmunnNcv5RtU3H5rQAAAXhJREFUSMe9k9tuozAURU9IaTABQkIohCbk3sus//+/cWuXRqMJtqWq62kLsbhsnyPjPG6XEsIO2IYIMZp1gKDQ5IcgoYDkKUToN/A2DxDSHngPEWQLlHJDVk7uUXwIsoCqloF1xRj6h9sTHKfD83PG6EQzPcKptUIJanKXnemnrmBhhRe4iJPye0b2pgMX77DqTbxCtXcK8zfYPOhgOpi5D/8pAdV8xrTwOvxDDs8mLlc6ei3H0cYtsHN/FKy+8gUqpaJxNhCLpVF48b3gaYSbZH3bc/rgIpPf49Cp2f9IboheZKDO8WFys7h+9F+NwmY/dXHWd6WDUDRewxq1Jut49hvWzsQer2F9BWxVEx1f/ba0tsPqt6UxJObb2whm7lHJjlDLsKVxay8/3qNWdsDtll4/0zNj5MMB/LEdHBillIErrPT71lDE9+iW/3RQpB/CQvzIZhA1AYLsc7jsvAV7+Cd/wVYaJMzPaDrxp1FmDv3JrudSfpa/H5JaSAYPtu8AAAAASUVORK5CYII=" alt=""/>
                                <span>以旧换新</span>
                                </a>
                            </li>
                            <span className="after"></span>
                            <li><a href="https://m.aihuishou.com/rn/#/user/myOrderList?tab=nbs" className="order-link">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAllBMVEUAAAAwMDAvLy8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMtLS0AAAAzMzMsLCw0NDQzMzMzMzMzMzMyMjI0NDQtLS0yMjIzMzMzMzMyMjIzMzMyMjIzMzMyMjIyMjIzMzMyMjIyMjIzMzMzMzMxMTEyMjIwMDAzMzMzMzMyMjIyMjIxMTEyMjIwMDAxMTEyMjI3NzczMzNy7OsgAAAAMXRSTlMAIA/fbfXp732RgggBdAsE+/nQYVwW5NmrUjQkysWeeT23l4dYRxS+sYtoQqQtGtQXO+wMmQAAAd9JREFUSMd80tluwjAUhOEh1AEaCFlKwhLKvpdK//u/XBUgQVnc78qSPfKxNary9qu13px4dNd/5imwVWGRAANPVnFIrrzjTC76lcUI6GUw0osLJ6DbUasvIOt8Ql8vPXCuIaRO6/wGTr7qAR0MbNQ0jiDy1QxoBsRq+ADTUVtAF3CdxgUJjNQe8Lr5Xs0eEs8SUAzJUFVTWMkWGLuwrk1kYGENaAs7VdyhK3tgBpvGE856uMLS18MNzHP0DiSNTx3ouReAcR+A6WtiCFWxgl25fHOLFhnw6r27lJ1KeQqnxfkhBMN68X5Ucia541iFI/RUsYZIdjfIVOEHBI6s+rBVVQaxrCLYN8u6lM0cjK+qiYGDLDbwrboBpL5azSBYqO6vvXpbURiGojC8ag9WGtSqg1M77RxkPKP+7/9yYkGpNkbFW7+7BFYSNpvsfRtK2XgR/N34A2I1zXbgWytYAkvTOH8M4Y9ser/A3Lu6tw1ksks+gfCiVtVOpltM3IdANT6MJ3LoNAO5ngx478DLgSl8qyaCmVyCyx5vQWrkMoEo0dkQCjmZaq6cdP1q5bSC9L/WvVFLbr0v6Mfd6nkFMNI9Wx8IF51yADDVfR8FJ2mgR5jRgKNwk+tReRYM14lsDmfySqYIapwTAAAAAElFTkSuQmCC" alt=""/>
                                <span>维修</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="my-comfort">
                        <img src="https://sr.aihuishou.com/sos/image/6370276313776257502111354159.png?x-oss-process=image/quality,q_80&size=1125x168" alt=""/>
                        <img src="https://sr.aihuishou.com/sos/image/637027631510877320591472000.png?x-oss-process=image/quality,q_80&size=1125x165" alt=""/>
                        <img src="https://sr.aihuishou.com/sos/image/6370276316475823301119439052.png?x-oss-process=image/quality,q_80&size=1125x165" alt=""/>
                        <img src="https://sr.aihuishou.com/sos/image/6370276318359902502069800477.png?x-oss-process=image/quality,q_80&size=1125x228" alt=""/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
