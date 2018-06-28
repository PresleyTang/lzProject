import React from 'react'
import { Tabs , Picker ,DatePicker ,List  } from 'antd-mobile';
import {axiosGet} from '../util/axios'
import { StickyContainer,Sticky } from 'react-sticky';
import * as data from '../config/dataurl'

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
            partData:[],       //兼职
            skillData:[],      //技能
            employmentData:[], //就业
            partDataNum:[],       //兼职
            skillDataNum:[],      //技能
            employmentDataNum:[], //就业
            options:{
                schools:[],
                referrers:[],
                certificates:[],
                educations:[],
                experiences:[],
                honors:[],
                intentionjobs:[],
                intentionparttimes:[],
                parttimeaddrs:[],
                specials:[],
                specialtys:[],
                userstates:[],
                provinces:[],
                wages:[],
                worktimes:[],
            },  //选项
            show: true,
            viewHeight: null,
        }
    }
    componentDidMount(){
        var viewHeight = document.documentElement.clientHeight-138.5;
        this.setState({viewHeight:viewHeight});
        this.getPartData(1,10);
        this.getSkillData(1,10);
        this.getEmploymentData(1,10);
        this.mapOtions();

    }
    mapOtions =()=>{
        axiosGet("/weixin/options/getAllOptions.action",function(result){
            var schools = this.convert(result.data.options.schools);
            var referrers = this.convert(result.data.options.referrers);
            var certificates = this.convert(result.data.options.certificates);
            var educations = this.convert(result.data.options.educations);
            var experiences = this.convert(result.data.options.experiences);
            var honors = this.convert(result.data.options.honors);
            var intentionjobs = this.convert(result.data.options.intentionjobs);
            var intentionparttimes = this.convert(result.data.options.intentionparttimes);
            var parttimeaddrs = this.convert(result.data.options.parttimeaddrs);
            var specials = this.convert(result.data.options.specials);
            var specialtys = this.convert(result.data.options.specialtys);
            var userstates = this.convert(result.data.options.userstates);
            var provinces = this.convertprovinces(result.data.options.provinces);
            var wages = this.convert(result.data.options.wages);
            var worktimes = this.convert(result.data.options.worktimes);

            var option = {
                schools:[schools],
                referrers:[referrers],
                certificates:[certificates],
                educations:[educations],
                experiences:[experiences],
                honors:[honors],
                intentionjobs:[intentionjobs],
                intentionparttimes:[intentionparttimes],
                parttimeaddrs:[parttimeaddrs],
                specials:[specials],
                specialtys:[specialtys],
                userstates:[userstates],
                provinces:[provinces],
                wages:[wages],
                worktimes:[worktimes],
            };
            this.setState({options:option})

        }.bind(this));

    }

    convert = (rawData) => {
        const keyPatt = / *(Id)/;
        const valuePatt = / *(Value)/;

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
        const keyPatt = / *(id)/;
        const valuePatt = / *(name)/;

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

    getPartData = (pageNum,pageSize) =>{
        axiosGet("/api/user/searchParttime.do"+"?pageNum="+pageNum+"&pageSize="+pageSize,function(result){
            this.setState({
                partData:result.data.data.list,
            })
        }.bind(this));


        axiosGet("/api/user/getCVinfo.do"+"?type=1",function(result){
            this.setState({
                partDataNum:result.data.data,
            })
        }.bind(this));
    }


    getSkillData = (pageNum,pageSize) =>{
        axiosGet("/api/user/search.do"+"?pageNum="+pageNum+"&pageSize="+pageSize,function(result){
            this.setState({
                skillData:result.data.data.list,
            })
        }.bind(this));


        axiosGet("/api/user/getCVinfo.do"+"?type=2",function(result){
            this.setState({
                skillDataNum:result.data.data,
            })
        }.bind(this));
    }

    getEmploymentData = (pageNum,pageSize) =>{
        axiosGet("/api/user/search.do"+"?pageNum="+pageNum+"&pageSize="+pageSize,function(result){
            this.setState({
                employmentData:result.data.data.list,
            })
        }.bind(this));

        axiosGet("/api/user/getCVinfo.do"+"?type=3",function(result){
            this.setState({
                employmentDataNum:result.data.data,
            })
        }.bind(this));

    }

    showData = (data) => {
        return data.map(item=>{
            return <div className='rowbody'>
                <div className='rowimg'><img src='https://static.udaing.com/images/user/DF46EDC86C02484BBC3210D418E0A944.jpg'/></div>
                <div className='rowtext'>
                    <div style={{height:'30px'}}>{item.name}<span style={{marginLeft:'20px'}}>{item.sex}</span></div>
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
        console.log(this.state,"2123")
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
                                    <span>已购简历({this.state.partDataNum.已购简历})</span>
                                    <span>已下载简历({this.state.partDataNum.已下载简历})</span>
                                    <span>剩余简历({this.state.partDataNum.剩余简历})</span>
                                    <div className='more'style={this.state.show?{right:'40%'}:null}><button onClick={this.changerShow}>筛选条件</button></div>
                                    <div className='more'style={this.state.show?{display:'none'}:null}><button>搜索</button></div>
                                </div>
                                <div className='tabpicker' style={this.state.show?{display:'none'}:null}>
                                    <div className='tabmid'>
                                        <Picker
                                            data={this.state.options.schools}
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
                                            data={this.state.options.intentionparttimes}
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
                                            data={this.state.options.parttimeaddrs}
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
                                            data={this.state.options.worktimes}
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
                                <div className='tabonce' style={this.state.show?null:{paddingTop:'0'}}>
                                    <div>{this.showData(this.state.partData)}</div>
                                </div>
                            </div>
                            <div style={{justifyContent: 'center', height: this.state.viewHeight, backgroundColor: '#fff',flexWrap: 'wrap',flexDirection: 'row'}}>
                                <div className='tabtitle'>
                                    <span>已购简历({this.state.skillDataNum.已购简历})</span>
                                    <span>已下载简历({this.state.skillDataNum.已下载简历})</span>
                                    <span>剩余简历({this.state.skillDataNum.剩余简历})</span>
                                    <div className='more'style={this.state.show?{right:'40%'}:null}><button onClick={this.changerShow}>筛选条件</button></div>
                                    <div className='more'style={this.state.show?{display:'none'}:null}><button>搜索</button></div>
                                </div>
                                <div className='tabpicker' style={this.state.show?{display:'none'}:null}>
                                    <div className='tabmid'>
                                        <Picker
                                            data={this.state.options.schools}
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
                                            data={this.state.options.provinces}
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
                                            data={this.state.options.educations}
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
                                            data={this.state.options.specials}
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
                                            data={this.state.options.specialtys}
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
                                <div className='tabonce' style={this.state.show?null:{paddingTop:'0'}}>
                                    <div>{this.showData(this.state.skillData)}</div>
                                </div>

                            </div>
                            <div style={{justifyContent: 'center', height: this.state.viewHeight, backgroundColor: '#fff',flexWrap: 'wrap',flexDirection: 'row'}}>
                                <div className='tabtitle'>
                                    <span>已购简历({this.state.employmentDataNum.已购简历})</span>
                                    <span>已下载简历({this.state.employmentDataNum.已下载简历})</span>
                                    <span>剩余简历({this.state.employmentDataNum.剩余简历})</span>
                                    <div className='more'style={this.state.show?{right:'40%'}:null}><button onClick={this.changerShow}>筛选条件</button></div>
                                    <div className='more'style={this.state.show?{display:'none'}:null}><button>搜索</button></div>
                                </div>
                                <div className='tabpicker' style={this.state.show?{display:'none'}:null}>
                                    <div className='tabmid' >
                                        <Picker
                                            data={this.state.options.schools}
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
                                            data={this.state.options.provinces}
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
                                            data={this.state.options.educations}
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
                                            data={this.state.options.specials}
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
                                            data={this.state.options.certificates}
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
                                            data={this.state.options.honors}
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
                                        <DatePicker
                                            mode="date"
                                            title="毕业时间"
                                            extra="Optional"
                                            value={this.state.date}
                                            onChange={date => this.setState({ date })}
                                        >
                                            <List.Item arrow="down">毕业时间-起</List.Item>
                                        </DatePicker>

                                    </div>
                                    <div className='tabmid' >
                                        <DatePicker
                                            mode="date"
                                            title="毕业时间"
                                            extra="Optional"
                                            value={this.state.date}
                                            onChange={date => this.setState({ date })}
                                        >
                                            <List.Item arrow="down">毕业时间-终</List.Item>
                                        </DatePicker>

                                    </div>
                                    <div className='tabmid' >
                                        <Picker
                                            data={this.state.options.experiences}
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
                                            data={this.state.options.provinces}
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
                                            data={this.state.options.intentionjobs}
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
                                <div className='tabonce' style={this.state.show?null:{paddingTop:'0'}}>
                                    <div>{this.showData(this.state.employmentData)}</div>
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
                    <div className='homessagemodel'>
                        我的消息<span style={{float:'right'}}><img src='http://udaing-static.oss-cn-beijing.aliyuncs.com/tjmimg/more.png'/></span>
                    </div>
                </div>
                <div className='homebutton'><button>退出登录</button></div>

            </div>

        );
    }
}