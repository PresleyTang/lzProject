import React from 'react'
import { TabBar, NavBar ,ListView  } from 'antd-mobile';
import {ListViewExample,ListViewExamplemid} from '../components/listViewExample'
import {ListViewExamplemhome} from "./listViewExample";

export default class Index extends React.Component{

    constructor(props){
        super(props);
        this.state={
            fullScreen: false,
            selectedTab: 'redTab',
            hidden: false,
            viewHeight:null,
        }
        const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
        const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];
        const dataSource = new ListView.DataSource({
            getRowData,
            getSectionHeaderData: getSectionData,
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });
        this.state = {
            dataSource,
            isLoading: true,
        };
    };
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
                        }}
                    >
                        <ListViewExamplemid/>
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