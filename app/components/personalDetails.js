import React from 'react'
import { Icon , InputItem, NavBar ,Toast } from 'antd-mobile';
import {axiosGet} from "../util/axios";


export default class PersonalDetails extends React.Component{

    constructor(props){
        super(props);
        this.state={
            partData:{
                parttimerName:null,
                parttimerGender:null,
                parttimerTel:null,
                schoolValue:null,
                worktimes:[],
                parttimes:[],
                parttimeaddrs:[],
            }
        }
    }
    componentDidMount(){
        var viewHeight = document.documentElement.clientHeight-138.5;
        this.setState({viewHeight:viewHeight});
        this.getPartData();

    }

    getPartData = () =>{
        if(this.props.match.params.type==1){
            axiosGet("/company/api/user/get_detail.do"+"?userId="+this.props.match.params.id+"&type=1",function(result){
                if(result.data.status==10){
                    Toast.fail("您未登录,请先登录",2)
                    window.location.href='/login';
                }
                this.setState({
                    partData:result.data.data,
                })
            }.bind(this));
        }
        else if(this.props.match.params.type==2){
            axiosGet("/company/api/user/getused_detail"+"?userId="+this.props.match.params.id+"&type=1",function(result){
                if(result.data.status==10){
                    Toast.fail("您未登录,请先登录",2)
                    window.location.href='/login';
                }
                this.setState({
                    partData:result.data.data,
                })
            }.bind(this));
        }
    }

    showData = (data,Value) =>{
        if(data==null){
            return <div>无</div>
        }
        else {
            return data.map(item => {
                    if(item.worktimeValue!=null){
                        return <div className='forgetonces'>{item.worktimeValue}</div>
                    }
                    else if(item.parttimeaddrValue!=null){
                        return <div className='forgetonces' style={{width:'50%'}}>{item.parttimeaddrValue}</div>
                    }
                    else if(item.intentionparttimeValue!=null){
                        return <div className='forgetonces'>{item.intentionparttimeValue}</div>
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
                        if(this.props.match.params.type==2){
                        window.location.href='/downWorks/1';
                    }
                    else if(this.props.match.params.type==1){
                        window.location.href='/search/1';
                    }
                }
            }



                >个人简介</NavBar>
                </div>
                <div className='forgetInput'>
                    <div className='forgettop'>
                        <div className='forgettopleft'><img src="http://udaing-static.oss-cn-beijing.aliyuncs.com/tjmimg/leizai.png"/></div>
                        <div className='forgettopright'>
                            <div className='forgettoponce'>
                                <div className='forgettoponceleft'>姓名：</div>
                                <div className='forgettoponceright'>{this.state.partData.parttimerName==""||this.state.partData.parttimerName==null?"无":this.state.partData.parttimerName}</div>
                            </div>
                            <div className='forgettoponce'>
                                <div className='forgettoponceleft'>性别：</div>
                                <div className='forgettoponceright'>{this.state.partData.parttimerGender==""||this.state.partData.parttimerGender==null?"无":this.state.partData.parttimerGender}</div>
                            </div>
                            <div className='forgettoponce'>
                                <div className='forgettoponceleft'>联系方式：</div>
                                <div className='forgettoponceright'>{this.state.partData.parttimerTel==""||this.state.partData.parttimerTel==null?"无":this.state.partData.parttimerTel}</div>
                            </div>
                            <div className='forgettoponce'>
                                <div className='forgettoponceleft'>所在学校：</div>
                                <div className='forgettoponceright'>{this.state.partData.schoolValue==""||this.state.partData.schoolValue==null?"无":this.state.partData.schoolValue}</div>
                            </div>


                        </div>
                    </div>
                    <div className='forgettop' style={{marginTop:'20px', paddingBottom:'20px'}}>
                        <div className='forgettoplefttime' style={{}}>兼职时间</div>
                        <div className='forgettoprighttime'>
                            {this.showData(this.state.partData.worktimes)}
                        </div>
                    </div>
                    <div className='forgettop' style={{marginTop:'20px', paddingBottom:'20px'}}>
                        <div className='forgettoplefttime' style={{}}>兼职意向工作</div>
                        <div className='forgettoprighttime'>
                            {this.showData(this.state.partData.parttimes)}
                        </div>
                    </div>
                    <div className='forgettop' style={{marginTop:'20px', paddingBottom:'20px'}}>
                        <div className='forgettoplefttime' style={{}}>兼职地点</div>
                        <div className='forgettoprighttime'>
                            {this.showData(this.state.partData.parttimeaddrs)}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}