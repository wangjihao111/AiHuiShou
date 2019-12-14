import React,{Component,Fragment} from "react"
import {getList} from "../../../api/api"
import "../css/listContent.css"
class ListContent extends Component{
    constructor(props){
        super(props)
        this.state={
            list : []
        }
    }
    render(){
        return (
            <Fragment>
                <ul className="listC">
                    <div className="tops">
                        {
                            this.state.list.map((item,index)=>{
                                if(index <= 2){
                                    return(
                                        <div>
                                            <img src={item.imgUrl} />
                                            <p>{item.name}</p>
                                            <span>{index+1}</span>
                                        </div>
                                    )
                                }
                            })
                        }
                        </div>
                       
                        {
                            this.state.list.map((item2,index2)=>{
                                if(index2 > 2){
                                    return(
                                        <li><span>{index2+1}</span>          <span>{item2.name}</span></li>
                                    )
                                }
                            })
                        }
                    
                   
                </ul>
            </Fragment>
        )
    }

    componentDidMount(){
        getList().then(res=>{
            console.log(res)
            this.setState(()=>{
                return{
                    list : res.data.data[0].data
                }
            })
            console.log(this.state.list)
        })
    }
}
export default ListContent