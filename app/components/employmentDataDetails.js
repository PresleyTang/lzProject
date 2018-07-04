import React from 'react'
import { Icon , InputItem, NavBar ,Toast } from 'antd-mobile';
import {axiosGet} from "../util/axios";
import * as data from '../config/dataurl'


export default class EmploymentDataDetails extends React.Component{

    constructor(props){
        super(props);
        this.state={
            EmploymentData:{
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
                accessionTime: null,
                companyName: null,
                companyPosition: null,
                certificates:[],
                honors:[],
                specialtys:[],
                intentioncitys:[],
                intentionjobs:[],
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
        axiosGet(data.Get_detail+"?userId="+this.props.match.params.id+"&type=3",function(result){
            if(result.data.status==10){
                Toast.fail("您未登录,请先登录",2)
                window.location.href='/login';
            }
            this.setState({
                EmploymentData:result.data.data,
            })
        }.bind(this));
        }
        else if(this.props.match.params.type==2){
        axiosGet(data.Getused_detail+"?userId="+this.props.match.params.id+"&type=3",function(result){
                if(result.data.status==10){
                    Toast.fail("您未登录,请先登录",2)
                    window.location.href='/login';
                }
                this.setState({
                    EmploymentData:result.data.data,
                })
            }.bind(this));
        }
    }

    showEmploymentData = (data) =>{
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
                    else if(item.intentioncity!=null){
                        return <div className='forgetonces' style={{width:'100%'}}>{item.intentioncity}</div>
                    }
                    else if(item.intentionjobValue!=null){
                        return <div className='forgetonces'>{item.intentionjobValue}</div>
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
                            window.location.href='/downWorks/3';
                        }
                        else if(this.props.match.params.type==1){
                            window.location.href='/search/3';
                        }
                    }
                    }
                >个人简介</NavBar>
                </div>
                <div className='forgetInput'>
                    <div className='forgettop'>
                        <div className='forgettopleft'><img src={'http://'+this.state.EmploymentData.photo}/></div>
                        <div className='forgettopright'>
                            <div className='forgettoponce'>
                                <div className='forgettoponceleft'>姓名：</div>
                                <div className='forgettoponceright'>{this.state.EmploymentData.name==""||this.state.EmploymentData.name==null?"无":this.state.EmploymentData.name}</div>
                            </div>
                            <div className='forgettoponce'>
                                <div className='forgettoponceleft'>性别：</div>
                                <div className='forgettoponceright'>{this.state.EmploymentData.sex==""||this.state.EmploymentData.sex==null?"无":this.state.EmploymentData.sex}</div>
                            </div>
                            <div className='forgettoponce'>
                                <div className='forgettoponceleft'>联系方式：</div>
                                <div className='forgettoponceright'>{this.state.EmploymentData.tel==""||this.state.EmploymentData.tel==null?"无":this.state.EmploymentData.tel}</div>
                            </div>
                            <div className='forgettoponce'>
                                <div className='forgettoponceleft'>QQ：</div>
                                <div className='forgettoponceright'>{this.state.EmploymentData.qq==""||this.state.EmploymentData.qq==null?"无":this.state.EmploymentData.qq}</div>
                            </div>
                            <div className='forgettoponce'>
                                <div className='forgettoponceleft'>籍贯：</div>
                                <div className='forgettoponceright'>{this.state.EmploymentData.home==""||this.state.EmploymentData.home==null?"无":this.state.EmploymentData.home}</div>
                            </div>


                        </div>
                    </div>

                    <div className='forgettop' style={{marginTop:'20px', paddingBottom:'20px'}}>
                        <div className='forgettoplefttime'>学校信息</div>
                        <div className='forgettoprighttime'>
                            <div className='timeonce'>
                                <div className='timeleft'>我的学号：</div>
                                <div className='timeright'>{this.state.EmploymentData.studyId==""||this.state.EmploymentData.studyId==null?"无":this.state.EmploymentData.studyId}</div>
                            </div>
                            <div className='timeonce'>
                                <div className='timeleft'>毕业院校：</div>
                                <div className='timeright'>{this.state.EmploymentData.school==""||this.state.EmploymentData.school==null?"无":this.state.EmploymentData.school}</div>
                            </div>
                            <div className='timeonce'>
                                <div className='timeleft'>毕业时间：</div>
                                <div className='timeright'>{this.state.EmploymentData.gradutetime==""||this.state.EmploymentData.gradutetime==null?"无":this.state.EmploymentData.gradutetime}</div>
                            </div>
                            <div className='timeonce'>
                                <div className='timeleft'>专业分类：</div>
                                <div className='timeright'>{this.state.EmploymentData.special==""||this.state.EmploymentData.special==null?"无":this.state.EmploymentData.special}</div>
                            </div>
                            <div className='timeonce'>
                                <div className='timeleft'>所学专业：</div>
                                <div className='timeright'>{this.state.EmploymentData.specialdetailed==""||this.state.EmploymentData.specialdetailed==null?"无":this.state.EmploymentData.specialdetailed}</div>
                            </div>
                            <div className='timeonce'>
                                <div className='timeleft'>学历：</div>
                                <div className='timeright'>{this.state.EmploymentData.education==""||this.state.EmploymentData.education==null?"无":this.state.EmploymentData.education}</div>
                            </div>
                            <div className='timeonce'>
                                <div className='timeleft'>工作经验：</div>
                                <div className='timeright'>{this.state.EmploymentData.experience==""||this.state.EmploymentData.experience==null?"无":this.state.EmploymentData.experience}</div>
                            </div>

                        </div>
                    </div>

                    <div className='forgettop' style={{marginTop:'20px', paddingBottom:'20px'}}>
                        <div className='forgettoplefttime'>工作经历</div>
                        <div className='forgettoprighttime'>
                            <div className='timeonce'>
                                <div className='timeleft'>实习时间：</div>
                                <div className='timeright'>{this.state.EmploymentData.accessionTime==""||this.state.EmploymentData.accessionTime==null?"无":this.state.EmploymentData.accessionTime}</div>
                            </div>
                            <div className='timeonce'>
                                <div className='timeleft'>实习地点：</div>
                                <div className='timeright'>{this.state.EmploymentData.companyName==""||this.state.EmploymentData.companyName==null?"无":this.state.EmploymentData.companyName}</div>
                            </div>
                            <div className='timeonce'>
                                <div className='timeleft'>实习职务：</div>
                                <div className='timeright'>{this.state.EmploymentData.companyPosition==""||this.state.EmploymentData.companyPosition==null?"无":this.state.EmploymentData.companyPosition}</div>
                            </div>
                            <div className='timeonce'>
                                <div className='timeleft'>工资待遇：</div>
                                <div className='timeright'>{this.state.EmploymentData.wageValue==""||this.state.EmploymentData.wageValue==null?"无":this.state.EmploymentData.wageValue}</div>
                            </div>

                        </div>
                    </div>

                    <div className='forgettop' style={{marginTop:'20px', paddingBottom:'20px'}}>
                        <div className='forgettoplefttime'>意向城市</div>
                        <div className='forgettoprighttime'>
                            {this.showEmploymentData(this.state.EmploymentData.intentioncitys)}
                        </div>
                    </div>
                    <div className='forgettop' style={{marginTop:'20px', paddingBottom:'20px'}}>
                        <div className='forgettoplefttime'>意向岗位</div>
                        <div className='forgettoprighttime'>
                            {this.showEmploymentData(this.state.EmploymentData.intentionjobs)}
                        </div>
                    </div>
                    <div className='forgettop' style={{marginTop:'20px', paddingBottom:'20px'}}>
                        <div className='forgettoplefttime' >证书</div>
                        <div className='forgettoprighttime'>
                            {this.showEmploymentData(this.state.EmploymentData.certificates)}
                        </div>
                    </div>
                    <div className='forgettop' style={{marginTop:'20px', paddingBottom:'20px'}}>
                        <div className='forgettoplefttime' >荣誉</div>
                        <div className='forgettoprighttime'>
                            {this.showEmploymentData(this.state.EmploymentData.honors)}
                        </div>
                    </div>
                    <div className='forgettop' style={{marginTop:'20px', paddingBottom:'20px'}}>
                        <div className='forgettoplefttime'>特长</div>
                        <div className='forgettoprighttime'>
                            {this.showEmploymentData(this.state.EmploymentData.specialtys)}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}