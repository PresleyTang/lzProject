import React from 'react'
import { Icon , InputItem, NavBar ,Toast } from 'antd-mobile';
import {axiosGet} from "../util/axios";
import * as data from '../config/dataurl';

export default class SkillDataDetails extends React.Component{

    constructor(props){
        super(props);
        this.state={
            SkillData:{
                name: null,
                sex: null,
                tel: null,
                qq: null,
                photo: null,
                home: null,
                studyId: null,
                school: null,
                gradutetime: null,
                special: null,
                specialdetailed: null,
                education: null,
                experience: null,
                time: null,
                addr: null,
                content: null,
                certificates:[],
                honors:[],
                specialtys:[],
            }
        }
    }
    componentDidMount(){
        var viewHeight = document.documentElement.clientHeight-138.5;
        this.setState({viewHeight:viewHeight});
        this.getSkillData();
    }

    getSkillData = () =>{
        if(this.props.match.params.type==1){
            axiosGet(data.Get_detail+"?userId="+this.props.match.params.id+"&type=2",function(result){
                if(result.data.status==10){
                    Toast.fail("您未登录,请先登录",2)
                    window.location.href='/login';
                }
                this.setState({
                    SkillData:result.data.data,
                })
            }.bind(this));
        }
        else if(this.props.match.params.type==2){
            axiosGet(data.Getused_detail+"?userId="+this.props.match.params.id+"&type=2",function(result){
                if(result.data.status==10){
                    Toast.fail("您未登录,请先登录",2)
                    window.location.href='/login';
                }
                this.setState({
                    SkillData:result.data.data,
                })
            }.bind(this));
        }
    }

    showData = (data) =>{
        if(data==null){
            return <div>无</div>
        }
        else{
            return data.map(item => {
                    if(item.certificateValue!=null){
                        return <div className='forgetonces'>{item.certificateValue}</div>
                    }
                    else if(item.honorValue!=null){
                        return <div className='forgetonces' style={{width:'100%'}}>{item.honorValue}</div>
                    }
                    else if(item.specialtyValue!=null){
                        return <div className='forgetonces'>{item.specialtyValue}</div>
                    }
                    else {

                    }
                }
            );
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
                            window.location.href='/downWorks/2';
                        }
                        else if(this.props.match.params.type==1){
                            window.location.href='/search/2';
                        }
                    }
                    }
                >个人简介</NavBar>
                </div>
                <div className='forgetInput'>
                    <div className='forgettop'>
                        <div className='forgettopleft'><img src={'http://'+this.state.SkillData.photo}/></div>
                        <div className='forgettopright'>
                            <div className='forgettoponce'>
                                <div className='forgettoponceleft'>姓名：</div>
                                <div className='forgettoponceright'>{this.state.SkillData.name==""||this.state.SkillData.name==null?"无":this.state.SkillData.name}</div>
                            </div>
                            <div className='forgettoponce'>
                                <div className='forgettoponceleft'>性别：</div>
                                <div className='forgettoponceright'>{this.state.SkillData.sex==""||this.state.SkillData.sex==null?"无":this.state.SkillData.sex}</div>
                            </div>
                            <div className='forgettoponce'>
                                <div className='forgettoponceleft'>联系方式：</div>
                                <div className='forgettoponceright'>{this.state.SkillData.tel==""||this.state.SkillData.tel==null?"无":this.state.SkillData.tel}</div>
                            </div>
                            <div className='forgettoponce'>
                                <div className='forgettoponceleft'>QQ：</div>
                                <div className='forgettoponceright'>{this.state.SkillData.qq==""||this.state.SkillData.qq==null?"无":this.state.SkillData.qq}</div>
                            </div>
                            <div className='forgettoponce'>
                                <div className='forgettoponceleft'>籍贯：</div>
                                <div className='forgettoponceright'>{this.state.SkillData.home==""||this.state.SkillData.home==null?"无":this.state.SkillData.home}</div>
                            </div>


                        </div>
                    </div>

                    <div className='forgettop' style={{marginTop:'20px', paddingBottom:'20px'}}>
                        <div className='forgettoplefttime'>学校信息</div>
                        <div className='forgettoprighttime'>
                            <div className='timeonce'>
                                <div className='timeleft'>我的学号：</div>
                                <div className='timeright'>{this.state.SkillData.studyId==""||this.state.SkillData.studyId==null?"无":this.state.SkillData.studyId}</div>
                            </div>
                            <div className='timeonce'>
                                <div className='timeleft'>毕业院校：</div>
                                <div className='timeright'>{this.state.SkillData.school==""||this.state.SkillData.school==null?"无":this.state.SkillData.school}</div>
                            </div>
                            <div className='timeonce'>
                                <div className='timeleft'>毕业时间：</div>
                                <div className='timeright'>{this.state.SkillData.gradutetime==""||this.state.SkillData.gradutetime==null?"无":this.state.SkillData.gradutetime}</div>
                            </div>
                            <div className='timeonce'>
                                <div className='timeleft'>专业分类：</div>
                                <div className='timeright'>{this.state.SkillData.special==""||this.state.SkillData.special==null?"无":this.state.SkillData.special}</div>
                            </div>
                            <div className='timeonce'>
                                <div className='timeleft'>所学专业：</div>
                                <div className='timeright'>{this.state.SkillData.specialdetailed==""||this.state.SkillData.specialdetailed==null?"无":this.state.SkillData.specialdetailed}</div>
                            </div>
                            <div className='timeonce'>
                                <div className='timeleft'>学历：</div>
                                <div className='timeright'>{this.state.SkillData.education==""||this.state.SkillData.education==null?"无":this.state.SkillData.education}</div>
                            </div>
                            <div className='timeonce'>
                                <div className='timeleft'>工作经验：</div>
                                <div className='timeright'>{this.state.SkillData.experience==""||this.state.SkillData.experience==null?"无":this.state.SkillData.experience}</div>
                            </div>

                        </div>
                    </div>

                    <div className='forgettop' style={{marginTop:'20px', paddingBottom:'20px'}}>
                        <div className='forgettoplefttime'>实践经历</div>
                        <div className='forgettoprighttime'>
                            <div className='timeonce'>
                                <div className='timeleft'>实践时间：</div>
                                <div className='timeright'>{this.state.SkillData.time==""||this.state.SkillData.time==null?"无":this.state.SkillData.time}</div>
                            </div>
                            <div className='timeonce'>
                                <div className='timeleft'>实践地点：</div>
                                <div className='timeright'>{this.state.SkillData.addr==""||this.state.SkillData.addr==null?"无":this.state.SkillData.addr}</div>
                            </div>
                            <div className='timeonce'>
                                <div className='timeleft'>实践内容：</div>
                                <div className='timeright'>{this.state.SkillData.content==""||this.state.SkillData.content==null?"无":this.state.SkillData.content}</div>
                            </div>

                        </div>
                    </div>

                    <div className='forgettop' style={{marginTop:'20px', paddingBottom:'20px'}}>
                        <div className='forgettoplefttime' style={{}}>证书</div>
                        <div className='forgettoprighttime'>
                            {this.showData(this.state.SkillData.certificates)}
                        </div>
                    </div>
                    <div className='forgettop' style={{marginTop:'20px', paddingBottom:'20px'}}>
                        <div className='forgettoplefttime' style={{}}>荣誉</div>
                        <div className='forgettoprighttime'>
                            {this.showData(this.state.SkillData.honors)}
                        </div>
                    </div>
                    <div className='forgettop' style={{marginTop:'20px', paddingBottom:'20px'}}>
                        <div className='forgettoplefttime' style={{}}>特长</div>
                        <div className='forgettoprighttime'>
                            {this.showData(this.state.SkillData.specialtys)}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}