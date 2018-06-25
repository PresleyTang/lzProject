import React from 'react'
import { Tabs , Picker ,ListView ,List  } from 'antd-mobile';
import {axiosGet} from '../util/axios'
import { StickyContainer,Sticky } from 'react-sticky';

let pageIndex = 0;



const tabs = [
    { title: '套餐情况' },
    { title: '购买记录' },
];
const tabsmid = [
    { title: '招兼职人才' },
    { title: '招技能人才' },
    { title: '招就业人才' },
];
const seasons = [
    [
        {
            label: '2013',
            value: '2013',
        },
        {
            label: '2014',
            value: '2014',
        },
    ],
];
function renderTabBar(props) {
    return (<Sticky>
        {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
    </Sticky>);
}
export class ListViewExample extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            viewHeight: null,
            packageHistory: [],
        }
    }
    componentDidMount(){
        var viewHeight = document.documentElement.clientHeight-138.5;
        this.setState({viewHeight:viewHeight});
        axiosGet("/api/package/get.do"+"?pageNum=1&pageSize=10",function(result){
            this.setState({
                packageHistory:result.data.data.list,
            })
        }.bind(this));
        //var root=document.getElementsByClassName("am-list sticky-list am-list-view-scrollview")[0];
        //root.style.cssText="height:"+viewHeight+"px";
    }

    getData = () =>{
        var i=0;
        return  this.state.packageHistory.map(item=>{
            return <div style={{marginTop:'14px'}}>
                <div className='oncebuytime'>{item.buytime}</div>
                <div className='oncetext'>您花费了{item.money}元购买了{item.total}份{item.name}的简历。您可以去搜索简历了！</div>
            </div>
            })
    }


    render(){
        return (
            <div>
                <div className='indexTabs'>
                <StickyContainer>
                    <Tabs tabs={tabs}
                          initalPage={'t2'}
                          renderTabBar={renderTabBar}
                    >
                        <div style={{ display: 'flex', justifyContent: 'center', height: this.state.viewHeight, backgroundColor: '#fff',flexWrap: 'wrap',flexDirection: 'row'}}>
                            <div className='once'>
                                <div className='oncetitle'>兼职人才</div>
                                <div className='oncetext'>
                                    自企业注册起免费送您50份简历，简历用完后请及时购买，收费标准如下:
                                </div>
                                <div className='oncedata'>
                                    <div className='oncedatabody'>
                                        <div className='oncedatabodytop'>1份3元</div>
                                        <div className='oncedatabodybottom'>购买</div>
                                    </div>
                                    <div className='oncedatabody'>
                                        <div className='oncedatabodytop'>10份28元</div>
                                        <div className='oncedatabodybottom'>购买</div>
                                    </div>
                                    <div className='oncedatabody'>
                                        <div className='oncedatabodytop'>30份78元</div>
                                        <div className='oncedatabodybottom'>购买</div>
                                    </div>
                                    <div className='oncedatabody'>
                                        <div className='oncedatabodytop'>50份100元</div>
                                        <div className='oncedatabodybottom'>购买</div>
                                    </div>
                                </div>
                            </div>
                            <div className='once'>
                                <div className='oncetitle'>就业人才</div>
                                <div className='oncetext'>
                                    自企业注册起免费送您80份简历，简历用完后请及时购买，收费标准如下:
                                </div>
                                <div className='oncedata'>
                                    <div className='oncedatabody'>
                                        <div className='oncedatabodytop'>1份8元</div>
                                        <div className='oncedatabodybottom'>购买</div>
                                    </div>
                                    <div className='oncedatabody'>
                                        <div className='oncedatabodytop'>10份70元</div>
                                        <div className='oncedatabodybottom'>购买</div>
                                    </div>
                                    <div className='oncedatabody'>
                                        <div className='oncedatabodytop'>30份200元</div>
                                        <div className='oncedatabodybottom'>购买</div>
                                    </div>
                                    <div className='oncedatabody'>
                                        <div className='oncedatabodytop'>50份300元</div>
                                        <div className='oncedatabodybottom'>购买</div>
                                    </div>
                                </div>
                            </div>
                            <div className='once'>
                                <div className='oncetitle'>技能人才</div>
                                <div className='oncetext'>
                                    自企业注册起免费送您50份简历，简历用完后请及时购买，收费标准如下:
                                </div>
                                <div className='oncedata'>
                                    <div className='oncedatabody'>
                                        <div className='oncedatabodytop'>1份10元</div>
                                        <div className='oncedatabodybottom'>购买</div>
                                    </div>
                                    <div className='oncedatabody'>
                                        <div className='oncedatabodytop'>10份80元</div>
                                        <div className='oncedatabodybottom'>购买</div>
                                    </div>
                                    <div className='oncedatabody'>
                                        <div className='oncedatabodytop'>30份200元</div>
                                        <div className='oncedatabodybottom'>购买</div>
                                    </div>
                                    <div className='oncedatabody'>
                                        <div className='oncedatabodytop'>50份320元</div>
                                        <div className='oncedatabodybottom'>购买</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div style={{ height: this.state.viewHeight, backgroundColor: '#fff',paddingTop:'10px' }}>
                            <div>{this.getData()}</div>
                        </div>
                    </Tabs>
                </StickyContainer>
                </div>
            </div>
        );
    }
}

export class ListViewExamplemid extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            data:[],
            show: true,
            viewHeight: null,
        }
    }
    componentDidMount(){
        var viewHeight = document.documentElement.clientHeight-138.5;
        this.setState({viewHeight:viewHeight});

        axiosGet("/api/user/searchParttime.do"+"?pageNum=1&pageSize=10&schoolld=2",function(result){
            console.log(result.data.data.list)
            this.setState({
                data:result.data.data.list,
            })
        }.bind(this));
        console.log(this.state.data)
    }

    showData = () => {
        return this.state.data.map(item=>{
            return <div className='rowbody'>
                <div className='rowimg'><img src='https://static.udaing.com/images/user/DF46EDC86C02484BBC3210D418E0A944.jpg'/></div>
                <div className='rowtext'>
                    <div style={{height:'30px'}}>{item.name}{item.sex}</div>
                    <div style={{height:'30px'}}>{item.school}</div>
                </div>

                <div className='rowbutton'><button>查看</button></div>
            </div>
        })
    }

    changerShow = () =>{
        if(this.state.show){
            this.setState({
                show:false,
            })
        }
        else {
            this.setState({
                show:true,
            })
        }
    }



    render(){
        return (
            <div>
                <div className='indexTabs'>
                    <StickyContainer>
                        <Tabs tabs={tabsmid}
                              initalPage={'t2'}
                              renderTabBar={renderTabBar}
                        >
                            <div style={{height: this.state.viewHeight, backgroundColor: '#fff'}}>
                                <div className='tabtitle'>
                                    <span>已购简历(20)</span>
                                    <span>已下载简历(10)</span>
                                    <span>剩余简历(10)</span>
                                    <div className='more'style={this.state.show?{right:'40%'}:null}><button onClick={this.changerShow}>筛选条件</button></div>
                                    <div className='more'style={this.state.show?{display:'none'}:null}><button>重置</button></div>
                                </div>
                                <div className='tabpicker' style={this.state.show?{display:'none'}:null}>
                                    <div className='tabmid'>
                                        <Picker
                                            data={seasons}
                                            title="学校"
                                            cascade={false}
                                            value={this.state.sValue}
                                            onChange={v => this.setState({ sValue: v })}
                                            onOk={v => this.setState({ sValue: v })}
                                        >
                                            <List.Item arrow="down">学校</List.Item>
                                        </Picker>
                                    </div>
                                    <div className='tabmid'>
                                        <Picker
                                            data={seasons}
                                            title="意向兼职"
                                            cascade={false}
                                            value={this.state.sValue}
                                            onChange={v => this.setState({ sValue: v })}
                                            onOk={v => this.setState({ sValue: v })}
                                        >
                                            <List.Item arrow="down">意向兼职</List.Item>
                                        </Picker>
                                    </div>
                                    <div className='tabmid'>
                                        <Picker
                                            data={seasons}
                                            title="兼职地点"
                                            cascade={false}
                                            value={this.state.sValue}
                                            onChange={v => this.setState({ sValue: v })}
                                            onOk={v => this.setState({ sValue: v })}
                                        >
                                            <List.Item arrow="down">兼职地点</List.Item>
                                        </Picker>
                                    </div>
                                    <div className='tabmid'>
                                        <Picker
                                            data={seasons}
                                            title="兼职时间"
                                            cascade={false}
                                            value={this.state.sValue}
                                            onChange={v => this.setState({ sValue: v })}
                                            onOk={v => this.setState({ sValue: v })}
                                        >
                                            <List.Item arrow="down">兼职时间</List.Item>
                                        </Picker>
                                    </div>
                                </div>
                                <div className='tabonce'>
                                    <div>{this.showData()}</div>
                                </div>
                            </div>
                            <div style={{justifyContent: 'center', height: this.state.viewHeight, backgroundColor: '#fff',flexWrap: 'wrap',flexDirection: 'row'}}>
                                <div className='tabtitle'>
                                    <span>已购简历(20)</span>
                                    <span>已下载简历(10)</span>
                                    <span>剩余简历(10)</span>
                                    <div className='more'style={this.state.show?{right:'40%'}:null}><button onClick={this.changerShow}>筛选条件</button></div>
                                    <div className='more'style={this.state.show?{display:'none'}:null}><button>重置</button></div>
                                </div>
                                <div className='tabpicker' style={this.state.show?{display:'none'}:null}>
                                    <div className='tabmid'>
                                        <Picker
                                            data={seasons}
                                            title="学校"
                                            cascade={false}
                                            value={this.state.sValue}
                                            onChange={v => this.setState({ sValue: v })}
                                            onOk={v => this.setState({ sValue: v })}
                                        >
                                            <List.Item arrow="down">学校</List.Item>
                                        </Picker>
                                    </div>
                                    <div className='tabmid'>
                                        <Picker
                                            data={seasons}
                                            title="籍贯"
                                            cascade={false}
                                            value={this.state.sValue}
                                            onChange={v => this.setState({ sValue: v })}
                                            onOk={v => this.setState({ sValue: v })}
                                        >
                                            <List.Item arrow="down">籍贯</List.Item>
                                        </Picker>
                                    </div>
                                    <div className='tabmid'>
                                        <Picker
                                            data={seasons}
                                            title="学历"
                                            cascade={false}
                                            value={this.state.sValue}
                                            onChange={v => this.setState({ sValue: v })}
                                            onOk={v => this.setState({ sValue: v })}
                                        >
                                            <List.Item arrow="down">学历</List.Item>
                                        </Picker>
                                    </div>
                                    <div className='tabmid'>
                                        <Picker
                                            data={seasons}
                                            title="专业"
                                            cascade={false}
                                            value={this.state.sValue}
                                            onChange={v => this.setState({ sValue: v })}
                                            onOk={v => this.setState({ sValue: v })}
                                        >
                                            <List.Item arrow="down">专业</List.Item>
                                        </Picker>
                                    </div>
                                    <div className='tabmid'>
                                        <Picker
                                            data={seasons}
                                            title="特长"
                                            cascade={false}
                                            value={this.state.sValue}
                                            onChange={v => this.setState({ sValue: v })}
                                            onOk={v => this.setState({ sValue: v })}
                                        >
                                            <List.Item arrow="down">特长</List.Item>
                                        </Picker>
                                    </div>
                                </div>
                                <div className='tabonce'>
                                    <div>{this.showData()}</div>
                                </div>

                            </div>
                            <div style={{justifyContent: 'center', height: this.state.viewHeight, backgroundColor: '#fff',flexWrap: 'wrap',flexDirection: 'row'}}>
                                <div className='tabtitle'>
                                    <span>已购简历(20)</span>
                                    <span>已下载简历(10)</span>
                                    <span>剩余简历(10)</span>
                                    <div className='more'style={this.state.show?{right:'40%'}:null}><button onClick={this.changerShow}>筛选条件</button></div>
                                    <div className='more'style={this.state.show?{display:'none'}:null}><button>重置</button></div>
                                </div>
                                <div className='tabpicker' style={this.state.show?{display:'none'}:null}>
                                    <div className='tabmid' >
                                        <Picker
                                            data={seasons}
                                            title="学校"
                                            cascade={false}
                                            value={this.state.sValue}
                                            onChange={v => this.setState({ sValue: v })}
                                            onOk={v => this.setState({ sValue: v })}
                                        >
                                            <List.Item arrow="down">学校</List.Item>
                                        </Picker>
                                    </div>
                                    <div className='tabmid' >
                                        <Picker
                                            data={seasons}
                                            title="籍贯"
                                            cascade={false}
                                            value={this.state.sValue}
                                            onChange={v => this.setState({ sValue: v })}
                                            onOk={v => this.setState({ sValue: v })}
                                        >
                                            <List.Item arrow="down">籍贯</List.Item>
                                        </Picker>
                                    </div>
                                    <div className='tabmid' >
                                        <Picker
                                            data={seasons}
                                            title="学历"
                                            cascade={false}
                                            value={this.state.sValue}
                                            onChange={v => this.setState({ sValue: v })}
                                            onOk={v => this.setState({ sValue: v })}
                                        >
                                            <List.Item arrow="down">学历</List.Item>
                                        </Picker>
                                    </div>
                                    <div className='tabmid' >
                                        <Picker
                                            data={seasons}
                                            title="专业"
                                            cascade={false}
                                            value={this.state.sValue}
                                            onChange={v => this.setState({ sValue: v })}
                                            onOk={v => this.setState({ sValue: v })}
                                        >
                                            <List.Item arrow="down">专业</List.Item>
                                        </Picker>
                                    </div>
                                    <div className='tabmid' >
                                        <Picker
                                            data={seasons}
                                            title="证书"
                                            cascade={false}
                                            value={this.state.sValue}
                                            onChange={v => this.setState({ sValue: v })}
                                            onOk={v => this.setState({ sValue: v })}
                                        >
                                            <List.Item arrow="down">证书</List.Item>
                                        </Picker>
                                    </div>
                                    <div className='tabmid' >
                                        <Picker
                                            data={seasons}
                                            title="荣誉"
                                            cascade={false}
                                            value={this.state.sValue}
                                            onChange={v => this.setState({ sValue: v })}
                                            onOk={v => this.setState({ sValue: v })}
                                        >
                                            <List.Item arrow="down">荣誉</List.Item>
                                        </Picker>
                                    </div>
                                    <div className='tabmid' >
                                        <Picker
                                            data={seasons}
                                            title="毕业时间"
                                            cascade={false}
                                            value={this.state.sValue}
                                            onChange={v => this.setState({ sValue: v })}
                                            onOk={v => this.setState({ sValue: v })}
                                        >
                                            <List.Item arrow="down">毕业时间</List.Item>
                                        </Picker>
                                    </div>
                                    <div className='tabmid' >
                                        <Picker
                                            data={seasons}
                                            title="工作经验"
                                            cascade={false}
                                            value={this.state.sValue}
                                            onChange={v => this.setState({ sValue: v })}
                                            onOk={v => this.setState({ sValue: v })}
                                        >
                                            <List.Item arrow="down">工作经验</List.Item>
                                        </Picker>
                                    </div>
                                    <div className='tabmid' >
                                        <Picker
                                            data={seasons}
                                            title="意向城市"
                                            cascade={false}
                                            value={this.state.sValue}
                                            onChange={v => this.setState({ sValue: v })}
                                            onOk={v => this.setState({ sValue: v })}
                                        >
                                            <List.Item arrow="down">意向城市</List.Item>
                                        </Picker>
                                    </div>
                                    <div className='tabmid' >
                                        <Picker
                                            data={seasons}
                                            title="意向岗位"
                                            cascade={false}
                                            value={this.state.sValue}
                                            onChange={v => this.setState({ sValue: v })}
                                            onOk={v => this.setState({ sValue: v })}
                                        >
                                            <List.Item arrow="down">意向岗位</List.Item>
                                        </Picker>
                                    </div>
                                </div>
                                <div className='tabonce'>
                                    <div>{this.showData()}</div>
                                </div>

                            </div>

                        </Tabs>
                    </StickyContainer>
                </div>
            </div>
        );
    }
}

export class ListViewExamplemhome extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            fullScreen: false,
            selectedTab: 'redTab',
            hidden: false,
            viewHeight: null,
        }
    }

    componentDidMount(){
        var viewHeight = document.documentElement.clientHeight-95;
        this.setState({viewHeight:viewHeight});
        setTimeout(() => {
            this.setState({
                show:true,
            });
        }, 600);
    }

    changerShow = () =>{
        if(this.state.show){
            this.setState({
                show:false,
            })
        }
        else {
            this.setState({
                show:true,
            })
        }
    }

    render(){
        return (
            <div className='homebody' style={{height:this.state.viewHeight}}>
                <div className='homeimg'><img src="https://static.udaing.com/images/user/DF46EDC86C02484BBC3210D418E0A944.jpg"/></div>
                <div className='homename'>廊坊乐在人力资源公司</div>
                <div className='homemessage'>
                    <div className='homessagenum'>
                        我的账号<span style={{float:'right'}}>18333679043</span>
                    </div>
                    <div className='homessagelei'>
                        企业分类<span style={{float:'right'}}>法律/教育/咨询</span>
                    </div>
                    <div className='homessagemodel'>
                        企业规模<span style={{float:'right'}}>20-30人</span>
                    </div>
                </div>
                <div className='homebutton'><button>退出登录</button></div>

            </div>

        );
    }
}