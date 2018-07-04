import React from 'react'
import { Icon , InputItem, NavBar ,Toast } from 'antd-mobile';
import {axiosGet} from "../util/axios";
import * as data from '../config/dataurl';


export default class Message extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            messageData: []

        }
    }
    componentDidMount(){
        var viewHeight = document.documentElement.clientHeight-138.5;
        this.setState({viewHeight:viewHeight});
        this.getPartData();

    }

    getPartData = () =>{
            axiosGet(data.Get_message+"?pageNum=1&pageSize=10",function(result){
                if(result.data.status==10){
                    Toast.fail("您未登录,请先登录",2)
                    window.location.href='/login';
                }
                console.log(result)
                this.setState({
                    messageData:result.data.data.list,
                })
            }.bind(this));
    }

    showData = (data) =>{
        if(data==null){
            return <div style={{width:'80%',margin:'10px 10%',textAlign:'center'}}>暂无系统消息</div>
        }
        else {
            return data.map(item => {
                    if(item.messageTime!=null){
                        return <div style={{borderBottom:'1px solid #ddd'}}>
                                <div className='forgetonces' style={{textAlign: 'center',width: '100%',fontSize: '16px',padding: '5px 0px'}}>{item.messageTime}</div>
                            <div><div style={{width:'60px',height:'60px',display:'inline-block'}}>
                                <img src='https://www.lezaixy.com/images/company/1.png' style={{width:'100%'}}/>
                            </div><div style={{
                                width:'calc(100% - 120px)',
                                display:'inline-block',
                                textAlign:
                                    'center',
                                height: '60px',
                                verticalAlign: 'top',
                                lineHeight: '60px',
                                fontSize: '18px',
                            }}>{item.messageTitle}</div></div>
                                <div className='forgetonces' style={{width:'calc(100% - 120px)',margin:'10px 60px',minHeight:'40px',lineHeight:'20px'}}>{item.messageContext}</div>

                               </div>
                    }

                    else {

                    }
                }
            )
        }
       }


    render(){
        return (
            <div>
                <div className='forgetNavBar'>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left"/>}
                    onLeftClick={() =>{
                        window.location.href='/home';
                }
            }
                >消息</NavBar>
                </div>
                <div className='forgetInput'>
                    {this.showData(this.state.messageData)}
                </div>

            </div>
        );
    }
}