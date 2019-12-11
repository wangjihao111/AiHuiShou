import React,{Component} from "react"
import "./Recommend.css"
import Ontime from "../../../assets/img/onTime.png"
import Time from "../components/time"


class Recommend  extends Component{
    render(){
        return(
            <div className="Recommend">
                <div className="content">
                    <div className="head-image">
                        <img src="https://sr.aihuishou.com/sos/image/637098616822353940282852574.png?x-oss-process=image/quality,q_80&size=750x200" alt=""/>
                    </div>
                    <div className="bg-color"></div>
                    <div className="coupon-container">
                        <img src={Ontime} alt=""/>
                        <div className="dd">
                            <div className="time-container">
                                <Time/>
                            </div>
                            <button className="recycle-button">立即回收</button>
                        </div>
                    </div>
                </div>
                <div style={{width:"100%",height:"107px"}}>
                    <img style={{width:"100%",height:"100%"}} src="https://sr.aihuishou.com/sos/image/6371113857392099001695494157.png?x-oss-process=image/quality,q_80&size=750x214" alt=""/>
                </div>
                <div style={{width:"100%",height:"50px"}}>
                    <img style={{width:"100%",height:"100%"}} src="https://sr.aihuishou.com/sos/image/6369162687464023901904800109.png?x-oss-process=image/quality,q_80&size=750x100" alt=""/>
                </div>
                <div className="sos-navigators-container">
                    <div className="sos-navigators-type">
                        <img src="https://sr.aihuishou.com/sos/image/636915304029273240688456435.png?x-oss-process=image/quality,q_80&size=142x142" alt=""/>
                        <span>卖手机</span>
                    </div>
                    <div className="sos-navigators-type">
                        <img src="https://sr.aihuishou.com/sos/image/6369153041238368801628141271.png?x-oss-process=image/quality,q_80&size=142x142" alt=""/>
                        <span>卖笔记本</span>
                    </div>
                    <div className="sos-navigators-type">
                        <img src="https://sr.aihuishou.com/sos/image/636915304203160180355749842.png?x-oss-process=image/quality,q_80&size=142x142" alt=""/>
                        <span>卖平板</span>
                    </div>
                    <div className="sos-navigators-type">
                        <img src="https://sr.aihuishou.com/sos/image/636915304278953410260135749.png?x-oss-process=image/quality,q_80&size=142x142" alt=""/>
                        <span>摄影摄像</span>
                    </div>
                    <div className="sos-navigators-type">
                        <img src="https://sr.aihuishou.com/sos/image/636915304338106990270685409.png?x-oss-process=image/quality,q_80&size=142x142" alt=""/>
                        <span>智能数码</span>
                    </div>
                </div>
                <div className="sos-images-container" >
                    <img src="https://sr.aihuishou.com/sos/image/6367657649175868001951108153.png?x-oss-process=image/quality,q_80&size=750x152" alt=""/>
                </div>
                <div style={{width:"100%",height:"60px"}} className="sos-images-container">
                    <img style={{width:"100%"}} src="https://sr.aihuishou.com/sos/image/6369153144225446201046201211.png?x-oss-process=image/quality,q_80&size=750x120" alt=""/>
                </div>
                <div style={{width:"100%"}}>
                    <img style={{width:"100%"}} src="https://sr.aihuishou.com/sos/image/637015655122542250737729988.png?x-oss-process=image/quality,q_80&size=1125x240" alt=""/>
                </div>
                <div style={{width:"100%"}}>
                    <img style={{width:"50%"}} src="https://sr.aihuishou.com/sos/image/637086625979481740447561084.png?x-oss-process=image/quality,q_80&size=564x360" alt=""/>
                    <img style={{width:"50%"}} src="https://sr.aihuishou.com/sos/image/6370156460103741902031714725.png?x-oss-process=image/quality,q_80&size=562x360" alt=""/>
                </div>
                <div style={{width:"100%"}}>
                    <img style={{width:"100%"}} src="https://sr.aihuishou.com/sos/image/6369153154777424901322365757.png?x-oss-process=image/quality,q_80&size=750x120" alt=""/>
                </div>
                <div style={{width:"100%"}}>
                    <img style={{width:"50%"}} src="https://sr.aihuishou.com/sos/image/637050196467569760130834693.png?x-oss-process=image/quality,q_80&size=561x360" alt=""/>
                    <img style={{width:"50%"}} src="https://sr.aihuishou.com/sos/image/6370501966139021602096631161.png?x-oss-process=image/quality,q_80&size=564x360" alt=""/>
                </div>
                <div style={{width:"100%"}}>
                    <img style={{width:"50%"}} src="https://sr.aihuishou.com/sos/image/636916318586896200533901957.png?x-oss-process=image/quality,q_80&size=561x342" alt=""/>
                    <img style={{width:"50%"}} src="https://sr.aihuishou.com/sos/image/6369163186592548101156564608.png?x-oss-process=image/quality,q_80&size=564x342" alt=""/>
                </div>
                <div style={{width:"100%"}}>
                    <img style={{width:"100%"}} src="https://sr.aihuishou.com/sos/image/636987880394289280980121688.png?x-oss-process=image/quality,q_80&size=1125x810" alt=""/>
                </div>
                <div className="page-float">
                    <img src="https://sr.aihuishou.com/sos/image/6371090386582682401342462359.png?x-oss-process=image/quality,q_80&size=120x120" alt=""/>
                </div>
            </div>
        )
    }
}

export default Recommend