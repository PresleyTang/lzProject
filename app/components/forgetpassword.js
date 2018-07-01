import React from 'react'
import { Icon , InputItem, NavBar  } from 'antd-mobile';


export default class Forgetpassword extends React.Component{

    constructor(props){
        super(props);
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
                    <InputItem type="phone" >手机号码</InputItem>
                    <InputItem maxLength="4" >验证码<a>获取验证码</a></InputItem>
                    <InputItem type="password" >新密码</InputItem>
                    <InputItem type="password" >确认密码</InputItem>
                </div>
                <div className='forgetButton'>
                    <button>确定</button>
                </div>
            </div>
        );
    }
}