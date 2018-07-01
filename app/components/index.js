import React from 'react'
import { TabBar, NavBar ,ListView  } from 'antd-mobile';
import {ListViewExample,ListViewExamplemid} from '../components/listViewExample'
import {ListViewExamplemhome} from "./listViewExample";

export default class Index extends React.Component{

    constructor(props){
        super(props);
        var selectedTab = "blueTab"
        var path = props.location.pathname;
        if(path.indexOf("/search")==0){
            selectedTab='greenTab';
        }else if(path.indexOf("/home")==0){
            selectedTab='yellowTab';
        }
        this.state={
            fullScreen: false,
            selectedTab: selectedTab,
            hidden: false,
            viewHeight:null,
        }
    };

    componentDidMount(){
        window.global_var  = 'demo'
    }

    render(){
        return (
            <div>
                <div className='indexNavBar'>
                <NavBar
                        mode="dark"
                    >主页</NavBar>
                </div>
                <div className='indexTabBar'>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="购买套餐"
                        key="购买套餐"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(http://udaing-static.oss-cn-beijing.aliyuncs.com/tjmimg/shoppingcart.png) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(http://udaing-static.oss-cn-beijing.aliyuncs.com/tjmimg/shoppingcart.png) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selected={this.state.selectedTab == 'blueTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                            this.props.history.push("/index");
                        }}
                        data-seed="logId"
                    >
                        <ListViewExample/>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(http://udaing-static.oss-cn-beijing.aliyuncs.com/tjmimg/center.png) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(http://udaing-static.oss-cn-beijing.aliyuncs.com/tjmimg/center.png) center center /  21px 21px no-repeat' }}
                            />
                        }
                        title="搜索简历"
                        key="搜索简历"
                        selected={this.state.selectedTab == 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                            this.props.history.push("/search");
                        }}
                    >
                        <ListViewExamplemid Id={this.props.match.params.id}/>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: 'http://udaing-static.oss-cn-beijing.aliyuncs.com/tjmimg/home.png' }}
                        selectedIcon={{ uri: 'http://udaing-static.oss-cn-beijing.aliyuncs.com/tjmimg/home.png' }}
                        title="企业主页"
                        key="企业主页"
                        selected={this.state.selectedTab == 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                            this.props.history.push("/home");
                        }}
                    >
                        <ListViewExamplemhome/>
                    </TabBar.Item>
                </TabBar>
                </div>
            </div>
        );
    }
}