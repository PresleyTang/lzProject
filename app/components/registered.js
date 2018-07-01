import React from 'react'
import { Icon , InputItem, NavBar ,Picker,List ,Toast,Button,ImagePicker} from 'antd-mobile';
import {axiosPost,axiosGet} from '../util/axios'

const data = [{
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121',
}, {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    id: '2122',
}];

export default class Registered extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            files: [],
            phoneValue:null,
            newpasswordValue:null,
            repasswordValue:null,
            nameValue:null,
            enterpriseValue:null,
            enterpriseValueNum:null,
            scaleValue:null,
            scaleValueNum:null,
            hasError: false,
            data: [],
            cols: 1,
            pickerValue: [],
            asyncValue: [],
            sValue: ['法律/教育/咨询'],
            sValue1: ['1-20人'],
            visible: false,
            options:{
                recruiterSizes:[],
                recruiterCategories:[],

            },  //选项
        };
    };
    componentDidMount(){

        this.mapOtions();

    }

    mapOtions =()=>{

        axiosGet("/company/api/get/all.do",function(result){
            console.log(result)
            var recruiterSizes = this.convert(result.data.recruiterSizes);
            var recruiterCategories = this.convert(result.data.recruiterCategories);

            var option = {
                recruiterSizes:[recruiterSizes],
                recruiterCategories:[recruiterCategories],
            };
            this.setState({options:option})
        }.bind(this));

    }

    convert = (rawData) => {
        const keyPatt = /^([a-z]|[A-Z])*Id$/;
        const valuePatt = /^([a-z]|[A-Z])*Value$/;

        return rawData.map(item=>{
            for (var key in item){
                if (key.match(keyPatt)) {
                    item['value'] = item[key]+"";
                }
                if (key.match(valuePatt)) {
                    item['label'] = item[key];
                }
                delete item[key]
            }
            return item;
        })
    }

    convertprovinces = (rawData) => {
        const keyPatt = /^([a-z]|[A-Z])*id$/;
        const valuePatt = /^([a-z]|[A-Z])*name$/;

        return rawData.map(item=>{
            for (var key in item){
                if (key.match(keyPatt)) {
                    item['value'] = item[key]+"";
                }
                if (key.match(valuePatt)) {
                    item['label'] = item[key];
                }
                delete item[key]
            }
            return item;
        })
    }

    getdo =()=>{

        if(this.state.phoneValue==null||this.state.repasswordValue==null||this.state.nameValue==null||this.state.enterpriseValue==null
            ||this.state.scaleValue==null){
            Toast.fail("输入不能为空",2)
        }
        else if(this.state.repasswordValue!=this.state.newpasswordValue){
            Toast.fail("确认密码与新密码不符",2)
        }
        else{
            var data = {}

            data["recruiter.phone"] = this.state.phoneValue;
            data["recruiter.password"] = this.state.newpasswordValue;
            data["recruiter.name"] = this.state.nameValue;
            data["recruiter.categoryId"] = this.state.enterpriseValue;
            data["recruiter.sizeId"] = this.state.scaleValue;
            data["file"] = this.state.files[0].url;



            axiosPost("/company/api/user/reg.do",data,function(result){

                this.setState({
                    partData:result.data.data.list,
                })
            }.bind(this));
        }
    }

    tip=()=>{
        Toast.fail("暂不支持")
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

    onChange = (files) => {
        this.setState({
            files:files,
        });
    }



    render(){
        console.log(this.state.files)
        return (
            <div>
                <div className='forgetNavBar'>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={() => setTimeout(()=>{
                        window.location.href='/login';
                    },200)}
                >注册</NavBar>
                </div>
                <div className='forgetInput'>
                    <InputItem type="phone" style={{fontSize:'14px'}}  type="phone"
                               placeholder="请输入手机号"
                               error={this.state.hasError}
                               onErrorClick={this.onErrorClick}
                               onChange={this.onChangeint}
                               value={this.state.phoneValue}>手机号码</InputItem>
                    <InputItem maxLength="4" placeholder="请输入验证码" style={{fontSize:'14px'}} onChange={v=> this.setState({verificationValue:v})}>验证码<a onClick={this.tip}>获取验证码</a></InputItem>
                    <InputItem type="password" placeholder="请输入密码" style={{fontSize:'14px'}} onChange={v=>this.setState({newpasswordValue:v})}>新密码</InputItem>
                    <InputItem type="password" placeholder="请确认密码"style={{fontSize:'14px'}} onChange={v=>this.setState({repasswordValue:v})}>确认密码</InputItem>
                    <InputItem maxLength={"20"} placeholder="企业名称" style={{fontSize:'14px'}} onChange={v=>this.setState({nameValue:v})}>企业名称</InputItem>
                    <Picker
                        data={this.state.options.recruiterCategories}
                        title="选择企业分类"
                        cascade={false}
                        extra="请选择(可选)"
                        value={this.state.enterpriseValueNum}
                        onChange={v => this.setState({ enterpriseValue: v[0],enterpriseValueNum:v })}
                        onOk={v => this.setState({ enterpriseValue: v[0],enterpriseValueNum:v })}
                    >
                        <List.Item arrow="horizontal">企业分类</List.Item>
                    </Picker>
                    <Picker
                        data={this.state.options.recruiterSizes}
                        title="选择企业规模"
                        cascade={false}
                        extra="请选择(可选)"
                        value={this.state.scaleValueNum}
                        onChange={v => this.setState({ scaleValue: v[0],scaleValueNum:v })}
                        onOk={v => this.setState({ scaleValue: v[0],scaleValueNum: v })}
                    >
                        <List.Item arrow="horizontal">企业规模</List.Item>
                    </Picker>
                    <div style={{fontSize:'14px',padding:'14px'}}>企业营业执照</div>
                    <ImagePicker
                        files={this.state.files}
                        onChange={this.onChange}
                        onImageClick={(index, fs) => console.log(index, fs)}
                        selectable={this.state.files.length < 1}
                        accept="image/gif,image/jpeg,image/jpg,image/png"
                    />

                </div>
                <div className='forgetButton'>
                    <Button type="primary" onClick={this.getdo}>确定</Button>
                </div>
            </div>
        );
    }
}