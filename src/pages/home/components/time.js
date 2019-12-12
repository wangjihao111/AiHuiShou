import React, { Component } from 'react';
import "./time.css"

 class NoTimeContent extends Component {
         constructor(props) {
                 super(props)
                 this.state = {
                         day: 0,
                         hour: 0,
                         minute: 0,
                         second: 0
                 }
             }
         render() {
                 return (
                         <div>
                             <h2>
                             <div style={{fontSize:"15px",display:"flex",fontWeight:"500"}}><p className="time">{this.state.day}</p>天 <p className="time">{this.state.hour}</p>时<p className="time">{this.state.minute}</p>分<p className="time">{this.state.second}</p>秒</div>
                     </h2>
                 </div>
             )
         }

     componentDidMount() {
               const end = Date.parse(new Date('2019-12-28 24:00'))
               this.countFun(end);
             }

       //卸载组件取消倒计时
       componentWillUnmount(){
             clearInterval(this.timer);
           }

       countFun = (end) => {

             let now_time = Date.parse(new Date());
             var remaining = end - now_time;

             this.timer = setInterval(() => {
                 //防止出现负数
               if (remaining > 1000) {
                 remaining -= 1000;
                 let day = Math.floor((remaining / 1000 / 3600) / 24);
                 let hour = Math.floor((remaining / 1000 / 3600) % 24);
                 let minute = Math.floor((remaining / 1000 / 60) % 60);
                 let second = Math.floor(remaining / 1000 % 60);

                 this.setState({
                     day:day,
                     hour:hour < 10 ? "0" + hour : hour,
                     minute:minute < 10 ? "0" + minute : minute,
                     second:second < 10 ? "0" + second : second
                 })
               } else {
                 clearInterval(this.timer);
                //倒计时结束时触发父组件的方法
                 //this.props.timeEnd();
              }
            }, 1000);
          }
     }
     export default NoTimeContent;
