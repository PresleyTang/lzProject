import React from 'react'
import { Icon , InputItem, NavBar ,Toast ,Button } from 'antd-mobile';
import {axiosPost} from "../util/axios";
import * as digital from "../config/dataurl";


export default class Forgetpassword extends React.Component{

    constructor(props){
        super(props);
        this.state={
            hasError:null,
            phoneValue:null,
            newpasswordValue:null,
            repasswordValue:null,

        }
    }
    onErrorClick = () => {
        if (this.state.hasError) {
            Toast.info('Please enter 11 digits');
        }
    }
    onChangeint = (value) => {
        if (value.replace(/\s/g, '').length < 11) {
            this.setState({
                hasError: true,
            });
        } else {
            this.setState({
                hasError: false,
            });
        }
        this.setState({
            phoneValue:value
        });
    }
    tip=()=>{
        Toast.fail("暂不支持")
    }
    getdo =()=>{

        if(this.state.phoneValue==null||this.state.hasError){
            Toast.fail("手机号输入有误",2)
        }
        else if(this.state.newpasswordValue==null){
            Toast.fail("密码不能为空",2)
        }
        else if(this.state.repasswordValue==null){
            Toast.fail("密码不能为空",2)
        }
        else if(this.state.repasswordValue!=this.state.newpasswordValue){
            Toast.fail("确认密码错误。请重新输入",2)
        }
        else{

            var data = {
                phone:this.state.phoneValue,
                code:this.state.newpasswordValue,
            }

            axiosPost(digital.Get_back,data,function(result){
                console.log(result)
            }.bind(this));
        }
    }

    render(){
        return (
            <div>
                <div className='forgetNavBar'>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left"/>}
                    onLeftClick={() =>
                        setTimeout(()=>{
                    window.location.href='/login';
                },200)}
                >忘记密码</NavBar>
                </div>
                <div className='forgetInput'>
                    <InputItem type="phone" style={{fontSize:'14px'}}  type="phone"
                               placeholder="请输入手机号"
                               error={this.state.hasError}
                               onErrorClick={this.onErrorClick}
                               onChange={this.onChangeint}
                               value={this.state.phoneValue}>手机号码</InputItem>
                    <InputItem maxLength="4" placeholder="请输入验证码" style={{fontSize:'14px'}} onChange={v=> this.setState({verificationValue:v})}>验证码<a className='Inputa' onClick={this.tip}>获取验证码</a></InputItem>
                    <InputItem type="password" placeholder="请输入密码" style={{fontSize:'14px'}} onChange={v=>this.setState({newpasswordValue:v})}>新密码</InputItem>
                    <InputItem type="password" placeholder="请确认密码"style={{fontSize:'14px'}} onChange={v=>this.setState({repasswordValue:v})}>确认密码</InputItem>
                </div>
                <div className='forgetButton'>
                    <Button type="primary" onClick={this.getdo}>确定</Button>
                </div>
            </div>
        );
    }
}