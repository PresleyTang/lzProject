import React from 'react'
import { Icon , InputItem, NavBar ,Picker,List } from 'antd-mobile';

const data1 = [
    [
        {
            label: '法律/教育/咨询',
            value: '法律/教育/咨询',
        },
        {
            label: '金融/保险/证券',
            value: '金融/保险/证券',
        },
        {
            label: '互联网/大数据/电商',
            value: '互联网/大数据/电商',
        },
        {
            label: '电子/通信/集成',
            value: '电子/通信/集成',
        },
        {
            label: '广告/媒体/策划',
            value: '广告/媒体/策划',
        },
        {
            label: '建筑/房地产/装修',
            value: '建筑/房地产/装修',
        },
        {
            label: '能源/化工/电力',
            value: '能源/化工/电力',
        },
        {
            label: '餐饮/旅游/住宿',
            value: '餐饮/旅游/住宿',
        },
        {
            label: '政府/事业/公益',
            value: '政府/事业/公益',
        },
        {
            label: '家政/快递/物业',
            value: '家政/快递/物业',
        },
        {
            label: '仓储/物流/运输',
            value: '仓储/物流/运输',
        },
        {
            label: '食品/医药/消费品',
            value: '食品/医药/消费品',
        },
        {
            label: '设备/材料/工具',
            value: '设备/材料/工具',
        },
        {
            label: '生产/制造/纺织',
            value: '生产/制造/纺织',
        },
        {
            label: '商务技术服务',
            value: '商务技术服务',
        },

    ],
];

const data2 = [
    [
        {
            label: '1-20人',
            value: '1-20人',
        },
        {
            label: '20-50人',
            value: '20-50人',
        },
        {
            label: '50-100人',
            value: '50-100人',
        },
        {
            label: '100-200人',
            value: '100-200人',
        },
        {
            label: '200-500人',
            value: '200-500人',
        },
        {
            label: '500-1000人',
            value: '500-1000人',
        },

    ],
];
export default class Registered extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data: [],
            cols: 1,
            pickerValue: [],
            asyncValue: [],
            sValue: ['法律/教育/咨询'],
            sValue1: ['1-20人'],
            visible: false,
        };
    };

    render(){
        return (
            <div>
                <div className='forgetNavBar'>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                >注册</NavBar>
                </div>
                <div className='forgetInput'>
                    <InputItem type="phone" >手机号码</InputItem>
                    <InputItem maxLength="4" >验证码<a>获取验证码</a></InputItem>
                    <InputItem type="password" >新密码</InputItem>
                    <InputItem type="password" >确认密码</InputItem>
                    <InputItem>企业名称</InputItem>
                    <Picker
                        data={data1}
                        title="选择企业分类"
                        cascade={false}
                        extra="请选择(可选)"
                        value={this.state.sValue}
                        onChange={v => this.setState({ sValue: v })}
                        onOk={v => this.setState({ sValue: v })}
                    >
                        <List.Item arrow="horizontal">企业分类</List.Item>
                    </Picker>
                    <Picker
                        data={data2}
                        title="选择企业规模"
                        cascade={false}
                        extra="请选择(可选)"
                        value={this.state.sValue1}
                        onChange={v => this.setState({ sValue: v })}
                        onOk={v => this.setState({ sValue: v })}
                    >
                        <List.Item arrow="horizontal">企业规模</List.Item>
                    </Picker>

                </div>
                <div className='forgetButton'>
                    <button>确定</button>
                </div>
            </div>
        );
    }
}