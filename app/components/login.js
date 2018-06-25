import React from 'react'
import {Toast} from 'antd-mobile';
import {axiosPost} from '../util/axios'
export default class Login extends React.Component{

    constructor(props){
        super(props);
        this.state={
            phone:null,
            password:null,
        }
    };
    componentDidMount(){


    }
    getIndex = () =>{
        var data={
            phone:this.state.phone,
            password:this.state.password,
        }
        if(data.phone==null||data.password==null){
            Toast.fail("输入不能为空！",2)
        }
        else{
        axiosPost("/api/user/login.do",data,function(result){
            console.log(result);
            if(result.data.status == 0){
                Toast.success(result.data.msg,2);
            }
            else if(result.data.status == 1){
                Toast.success("登陆成功",2);
                setTimeout(()=>{
                     window.location.href='/index';
                },200)

            }
            else{
                console.log(result);
            }

        });
      }
    }

    getRegistered = () =>{
        setTimeout(()=>{
            window.location.href='/registered';
        },200)
    }

    getForgetpassword = () =>{
        setTimeout(()=>{
            window.location.href='/forgetpassword';
        },200)
    }

    changePhone = (event) => {
        this.setState({phone: event.target.value});
        // setTimeout(()=>{
        //     console.log(this.state.phone)
        // },200)

    }
    changePassword = (event) => {
        this.setState({password: event.target.value});
        // setTimeout(()=>{
        //     console.log(this.state.password)
        // },200)

    }

    render(){
        return (
            <div>
            <div className='loginimg'><img src="https://static.udaing.com/images/user/DF46EDC86C02484BBC3210D418E0A944.jpg"/></div>
            <div className='logininput'><input placeholder={"请输入账号"} onChange={this.changePhone}/></div>
            <div className='logininput' style={{marginTop:'20px'}}><input placeholder={"请输入密码"}onChange={this.changePassword} type='password'/></div>
            <div className='logintext'><a onClick={this.getForgetpassword}>忘记密码</a><a style={{float:'right'}} onClick={this.getRegistered}>新用户注册</a></div>
            <div className='loginbutton' onClick={this.getIndex}><button>登录</button></div>
            </div>
        );
    }
}