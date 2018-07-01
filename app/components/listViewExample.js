import React from 'react'
import { Tabs , Picker ,DatePicker ,List ,Toast ,Modal,Button} from 'antd-mobile';
import {axiosGet} from '../util/axios'
import { StickyContainer,Sticky } from 'react-sticky';
import * as data from '../config/dataurl'

const alert = Modal.alert;

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
        axiosGet("/company/api/package/get.do"+"?pageNum=1&pageSize=10",function(result){
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
    buy=(event)=>{
        var type = event.currentTarget.getAttribute('data-type');
        var total = event.currentTarget.getAttribute('data-total');
        var money = event.currentTarget.getAttribute('data-money');
        var typeName
        if(type==1){
            typeName = "兼职人才"
        }
        else if(type==2){
            typeName = "就业人才"
        }
        else if(type==3){
            typeName = "技能人才"
        }
        else{

        }
        console.log(type)
        console.log(total)
        console.log(money)
        const alertInstance = alert('确认', '您要购买的是'+typeName+'\r\n共:'+total+"份"+'\r\n共:'+money+"元", [
            {text: '取消', onPress: () => console.log('cancel'), style: 'default'},
            {text: '确认', onPress: () => {
                    window.location.href="/company/api/package/buy.do"+"?type="+type+"&total="+total+"&money="+money
                }},
        ]);

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
                                            <div className='oncedatabodybottom'><Button type="primary" inline size="small"  data-type={"1"} data-total={"1"} data-money={"3"}  onClick={this.buy}>购买</Button></div>
                                        </div>
                                        <div className='oncedatabody'>
                                            <div className='oncedatabodytop'>10份28元</div>
                                            <div className='oncedatabodybottom'><Button type="primary" inline size="small"  data-type={"1"} data-total={"10"} data-money={"28"}  onClick={this.buy}>购买</Button></div>
                                        </div>
                                        <div className='oncedatabody'>
                                            <div className='oncedatabodytop'>30份78元</div>
                                            <div className='oncedatabodybottom'><Button type="primary" inline size="small"  data-type={"1"} data-total={"30"} data-money={"78"}  onClick={this.buy}>购买</Button></div>
                                        </div>
                                        <div className='oncedatabody'>
                                            <div className='oncedatabodytop'>50份100元</div>
                                            <div className='oncedatabodybottom'><Button type="primary" inline size="small"  data-type={"1"} data-total={"50"} data-money={"100"}  onClick={this.buy}>购买</Button></div>
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
                                            <div className='oncedatabodybottom'><Button type="primary" inline size="small"  data-type={"2"} data-total={"1"} data-money={"8"}  onClick={this.buy}>购买</Button></div>
                                        </div>
                                        <div className='oncedatabody'>
                                            <div className='oncedatabodytop'>10份70元</div>
                                            <div className='oncedatabodybottom'><Button type="primary" inline size="small"  data-type={"2"} data-total={"10"} data-money={"70"}  onClick={this.buy}>购买</Button></div>
                                        </div>
                                        <div className='oncedatabody'>
                                            <div className='oncedatabodytop'>30份200元</div>
                                            <div className='oncedatabodybottom'><Button type="primary" inline size="small"  data-type={"2"} data-total={"30"} data-money={"200"}  onClick={this.buy}>购买</Button></div>
                                        </div>
                                        <div className='oncedatabody'>
                                            <div className='oncedatabodytop'>50份300元</div>
                                            <div className='oncedatabodybottom'><Button type="primary" inline size="small"  data-type={"2"} data-total={"50"} data-money={"300"}  onClick={this.buy}>购买</Button></div>
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
                                            <div className='oncedatabodybottom'><Button type="primary" inline size="small"  data-type={"3"} data-total={"1"} data-money={"10"}  onClick={this.buy}>购买</Button></div>
                                        </div>
                                        <div className='oncedatabody'>
                                            <div className='oncedatabodytop'>10份80元</div>
                                            <div className='oncedatabodybottom'><Button type="primary" inline size="small"  data-type={"3"} data-total={"10"} data-money={"80"}  onClick={this.buy}>购买</Button></div>
                                        </div>
                                        <div className='oncedatabody'>
                                            <div className='oncedatabodytop'>30份200元</div>
                                            <div className='oncedatabodybottom'><Button type="primary" inline size="small"  data-type={"3"} data-total={"30"} data-money={"200"}  onClick={this.buy}>购买</Button></div>
                                        </div>
                                        <div className='oncedatabody'>
                                            <div className='oncedatabodytop'>50份320元</div>
                                            <div className='oncedatabodybottom'><Button type="primary" inline size="small"  data-type={"3"} data-total={"50"} data-money={"320"}  onClick={this.buy}>购买</Button></div>
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
                certificates:[],
                educations:[],
                experiences:[],
                honors:[],
                intentionjobs:[],
                intentionparttimes:[],
                parttimeaddrs:[],
                provinces:[],
                recruiterCategories:[],
                recruiterSizes:[],
                schools:[],
                specials:[],
                specialtys:[],
                worktimes:[],
            },  //选项
            show: true,
            index: 0,
            getindex: 1,
            viewHeight: null,
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
        console.log(this.props.name)
        this.setState({
             index:this.props.Id-1,
        })

    }

    mapOtions =()=>{
        axiosGet("/company/api/get/all.do",function(result){
            var certificates = this.convert(result.data.certificates);
            var educations = this.convert(result.data.educations);
            var experiences = this.convert(result.data.experiences);
            var honors = this.convert(result.data.honors);
            var intentionjobs = this.convert(result.data.intentionjobs);
            var intentionparttimes = this.convert(result.data.intentionparttimes);
            var parttimeaddrs = this.convert(result.data.parttimeaddrs);
            var specials = this.convert(result.data.specials);
            var specialtys = this.convert(result.data.specialtys);
            var provinces = this.convertprovinces(result.data.provinces);
            var schools = this.convert(result.data.schools);
            var recruiterCategories = this.convert(result.data.recruiterCategories);
            var worktimes = this.convert(result.data.worktimes);


            var option = {
                schools:[schools],
                recruiterCategories:[recruiterCategories],
                certificates:[certificates],
                educations:[educations],
                experiences:[experiences],
                honors:[honors],
                intentionjobs:[intentionjobs],
                intentionparttimes:[intentionparttimes],
                parttimeaddrs:[parttimeaddrs],
                specials:[specials],
                specialtys:[specialtys],
                provinces:[provinces],
                worktimes:[worktimes],
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

    getPartData = (pageNum,pageSize) =>{
        axiosGet("/company/api/user/searchParttime.do"+"?pageNum="+pageNum+"&pageSize="+pageSize,function(result){
            if(result.data.status==10){
                Toast.fail("您未登录,请先登录",2)
                window.location.href='/login';
            }
            this.setState({
                partData:result.data.data.list,
            })
        }.bind(this));


        axiosGet("/company/api/user/getCVinfo.do"+"?type=1",function(result){
            this.setState({
                partDataNum:result.data.data,
            })
        }.bind(this));
    }

    getSkillData = (pageNum,pageSize) =>{
        axiosGet("/company/api/user/search.do"+"?pageNum="+pageNum+"&pageSize="+pageSize+"&type=2",function(result){
            if(result.data.status==10){
                Toast.fail("您未登录,请先登录",2)
                window.location.href='/login';
            }
            this.setState({
                skillData:result.data.data.list,
            })
        }.bind(this));


        axiosGet("/company/api/user/getCVinfo.do"+"?type=2",function(result){
            this.setState({
                skillDataNum:result.data.data,
            })
        }.bind(this));
    }

    getEmploymentData = (pageNum,pageSize) =>{
        axiosGet("/company/api/user/search.do"+"?pageNum="+pageNum+"&pageSize="+pageSize+"&type=3",function(result){
            if(result.data.status==10){
                Toast.fail("您未登录,请先登录",2)
                window.location.href='/login';
            }
            this.setState({
                employmentData:result.data.data.list,
            })
        }.bind(this));

        axiosGet("/company/api/user/getCVinfo.do"+"?type=3",function(result){
            this.setState({
                employmentDataNum:result.data.data,
            })
        }.bind(this));

    }

    showPartData = (data) => {
        return data.map(item=>{
            return <div className='rowbody'>
                <div className='rowimg'><img src='https://www.lezaixy.com/images/company/1.png'/></div>
                <div className='rowtext'>
                    <div style={{height:'40px'}}>{item.name}<span style={{marginLeft:'20px'}}>{item.sex}</span></div>
                    <div style={{height:'40px',fontSize:'14px'}}>{item.school}</div>
                </div>
                <div className='rowbutton'><Button type="primary" inline size="small" style={{marginTop:'24px'}} data-userId={item.userId}  onClick={this.PartDataDetails}>查看</Button></div>
            </div>
        })
    }

    PartDataDetails = (event) =>{
        var userId = event.currentTarget.getAttribute('data-userid');
        const alertInstance = alert('查看', '查看简历，您剩余简历份数会减少哦，请及时关注！（如果您已经查看过当前简历则不会减少简历份数！）', [
            {text: '取消', onPress: () => console.log('cancel'), style: 'default'},
            {text: '确认', onPress: () => {
                    window.location.href="/personalDetails/"+userId+"/1";
                }},
        ]);

    }

    showSkillData = (data) => {
        return data.map(item=>{
            return <div className='rowbody'>
                <div className='rowimg'><img src={'http://'+item.portrait}/></div>
                <div className='rowtext'>
                    <div style={{height:'40px'}}>{item.name}<span style={{marginLeft:'20px'}}>{item.sex}</span></div>
                    <div style={{height:'40px',fontSize:'14px'}}>{item.school}</div>
                </div>

                <div className='rowbutton'><Button type="primary" inline size="small" style={{marginTop:'24px'}} data-userId={item.userId}  onClick={this.SkillDataDetails}>查看</Button></div>
            </div>
        })
    }

    SkillDataDetails = (event) =>{

        var userId = event.currentTarget.getAttribute('data-userid');
        const alertInstance = alert('查看', '查看简历，您剩余简历份数会减少哦，请及时关注！（如果您已经查看过当前简历则不会减少简历份数！）', [
            {text: '取消', onPress: () => console.log('cancel'), style: 'default'},
            {text: '确认', onPress: () => {
                    window.location.href="/skillDataDetails/"+userId+"/1";
                }},
        ]);

    }

    showEmploymentData = (data) => {
        return data.map(item=>{
            return <div className='rowbody'>
                <div className='rowimg'><img src={'http://'+item.portrait}/></div>
                <div className='rowtext'>
                    <div style={{height:'40px'}}>{item.name}<span style={{marginLeft:'20px'}}>{item.sex}</span></div>
                    <div style={{height:'40px',fontSize:'14px'}}>{item.school}</div>
                </div>

                <div className='rowbutton'><Button type="primary" inline size="small" style={{marginTop:'24px'}} data-userId={item.userId}  onClick={this.EmploymentDataDetails}>查看</Button></div>
            </div>
        })
    }

    EmploymentDataDetails = (event) =>{

        var userId = event.currentTarget.getAttribute('data-userid');
        const alertInstance = alert('查看', '查看简历，您剩余简历份数会减少哦，请及时关注！（如果您已经查看过当前简历则不会减少简历份数！）', [
            {text: '取消', onPress: () => console.log('cancel'), style: 'default'},
            {text: '确认', onPress: () => {
                    window.location.href="/employmentDataDetails/"+userId+"/1";
                }},
        ]);
    }

    searchEmploymentData = () =>{


        var {startGraduateTime} = this.state;
        var {endGraduateTime} = this.state;
        var startDateStr=null;
        var endDateStr =null;
        if(startGraduateTime!=null){
            startDateStr = startGraduateTime.getFullYear()+"-"+(startGraduateTime.getMonth()+1)+"-"+startGraduateTime.getDate()
        }
        if(endGraduateTime!=null){
            endDateStr = endGraduateTime.getFullYear()+"-"+(endGraduateTime.getMonth()+1)+"-"+endGraduateTime.getDate()
        }


        console.log(startDateStr)
        console.log(endDateStr)
        console.log(Date.parse(this.state.startGraduateTime))
        console.log(Date.parse(this.state.endGraduateTime))
    axiosGet("/company/api/user/search.do"+"?type=3"+
            (this.state.schoolValue==null?"":"&schoolId="+this.state.schoolValue)+
            (this.state.provincesValue==null?"":"&userNativeplace="+this.state.provincesValue)+
            (this.state.educationsValue==null?"":"&educationId="+this.state.educationsValue)+
            (this.state.specialsValue==null?"":"&specialId="+this.state.specialsValue)+
            (this.state.certificatesValue==null?"":"&certificateId="+this.state.certificatesValue)+
            (this.state.honorsValue==null?"":"&honorId="+this.state.honorsValue)+
            (startDateStr==null?"":"&userGraduatetimeStart="+startDateStr)+
            (endDateStr==null?"":"&userGraduatetimeEnd="+endDateStr)+
            (this.state.experiencesValue==null?"":"&experienceIdexperienceId="+this.state.experiencesValue)+
            (this.state.goprovincesValue==null?"":"&intentioncity="+this.state.goprovincesValue)+
            (this.state.intentionjobsValue==null?"":"&intentionjobId="+this.state.intentionjobsValue),function(result){
            if(result.data.status==0){
                Toast.success(result.data.msg,2)
                this.setState({
                    employmentData:[],
                })
            }
            else{
                Toast.success("找到了"+result.data.data.list.length+"个结果",2)
                this.setState({
                    employmentData:result.data.data.list,
                })
            }

        }.bind(this));
    }

    searchSkillData = () =>{
        axiosGet("/company/api/user/search.do"+"?type=2"+
            (this.state.schoolValue==null?"":"&schoolId="+this.state.schoolValue)+
            (this.state.provincesValue==null?"":"&userNativeplace="+this.state.provincesValue)+
            (this.state.educationsValue==null?"":"&educationId="+this.state.educationsValue)+
            (this.state.specialsValue==null?"":"&specialId="+this.state.specialsValue)+
            (this.state.specialtysValue==null?"":"&specialtyId="+this.state.specialtysValue),function(result){
            if(result.data.status==0){
                Toast.success(result.data.msg,2)
                this.setState({
                    skillData:[],
                })
            }
            else{
                Toast.success("找到了"+result.data.data.list.length+"个结果",2)
                this.setState({
                    skillData:result.data.data.list,
                })
            }

        }.bind(this));
    }

    searchPartData = () =>{
        axiosGet("/company/api/user/searchParttime.do"+"?"+
            (this.state.schoolValue==null?"":"schoolId="+this.state.schoolValue)+
            (this.state.intentionparttimesValue==null?"":"&intentionparttimeIds="+this.state.intentionparttimesValue)+
            (this.state.parttimeaddrsValue==null?"":"&parttimeaddrIds="+this.state.parttimeaddrsValue)+
            (this.state.worktimesValue==null?"":"&worktimeIds="+this.state.worktimesValue),function(result){
            if(result.data.status==0){
                Toast.success(result.data.msg,2)
                this.setState({
                    partData:[],
                })
            }
            else{
                Toast.success("找到了"+result.data.data.list.length+"个结果",2)
                this.setState({
                    partData:result.data.data.list,
                })
            }

        }.bind(this));
    }

    changerRestatus = () =>{
        this.setState({
            schoolValue:null,
            intentionparttimesValue:null,
            parttimeaddrsValue:null,
            worktimesValue:null,
            //
            provincesValue:null,
            educationsValue:null,
            specialsValue:null,
            specialtysValue:null,
            //
            certificatesValue:null,
            honorsValue:null,
            experiencesValue:null,
            startGraduateTime:null,
            endGraduateTime:null,
            goprovincesValue:null,
            intentionjobsValue:null,
        })
        this.getPartData(1,10);
        this.getSkillData(1,10);
        this.getEmploymentData(1,10);

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

    getDownWorks = () => {
        window.location.href = "/downWorks/"+this.state.getindex;
    }

    render(){
        return (
            <div>
                <div className='indexTabs'>
                    <StickyContainer>
                        <Tabs tabs={tabsmid}
                              page={this.state.index}
                              swipeable={false}
                              renderTabBar={renderTabBar}
                              onTabClick={(tab, index) => { console.log('onChange', index, tab);
                                  this.setState({
                                      index:index,
                                      getindex:index+1,
                                  })
                                  console.log(this.state.index)
                              }}
                        >
                            <div style={{height: this.state.viewHeight, backgroundColor: '#fff'}}>
                                <div className='tabtitle'>
                                    <span>已购简历({this.state.partDataNum.buy})</span>
                                    <span onClick={this.getDownWorks} style={{color:'blue'}}>已下载简历({this.state.partDataNum.down})</span>
                                    <span>剩余简历({this.state.partDataNum.total})</span>
                                    <div className='more' style={this.state.show?{right:' calc(50% - 54px)'}:null}><Button type="primary" inline size="small" onClick={this.changerShow}>{this.state.show?"打开查找条件":"关闭"}</Button></div>
                                    <div className='more' style={this.state.show?{display:'none'}:null}><Button type="primary" inline size="small" onClick={this.changerRestatus}>重置</Button></div>
                                    <div className='more' style={(this.state.show?{display:'none'}:null)}><Button type="primary" inline size="small" onClick={this.searchPartData}>搜索</Button></div>
                                </div>
                                <div className='tabpicker' style={this.state.show?{display:'none'}:null}>
                                    <div className='tabmid'>
                                        <Picker
                                            data={this.state.options.schools}
                                            title="学校"
                                            cascade={false}
                                            value={this.state.schoolValue}
                                            onChange={v => this.setState({ schoolValue: v })}
                                            onOk={v => this.setState({ schoolValue: v })}
                                        >
                                            <List.Item arrow="down">学校</List.Item>
                                        </Picker>
                                    </div>
                                    <div className='tabmid'>
                                        <Picker
                                            data={this.state.options.intentionparttimes}
                                            title="意向兼职"
                                            cascade={false}
                                            value={this.state.intentionparttimesValue}
                                            onChange={v => this.setState({ intentionparttimesValue: v })}
                                            onOk={v => this.setState({ intentionparttimesValue: v })}
                                        >
                                            <List.Item arrow="down">意向兼职</List.Item>
                                        </Picker>
                                    </div>
                                    <div className='tabmid'>
                                        <Picker
                                            data={this.state.options.parttimeaddrs}
                                            title="兼职地点"
                                            cascade={false}
                                            value={this.state.parttimeaddrsValue}
                                            onChange={v => this.setState({ parttimeaddrsValue: v })}
                                            onOk={v => this.setState({ parttimeaddrsValue: v })}
                                        >
                                            <List.Item arrow="down">兼职地点</List.Item>
                                        </Picker>
                                    </div>
                                    <div className='tabmid'>
                                        <Picker
                                            data={this.state.options.worktimes}
                                            title="兼职时间"
                                            cascade={false}
                                            value={this.state.worktimesValue}
                                            onChange={v => this.setState({ worktimesValue: v })}
                                            onOk={v => this.setState({ worktimesValue: v })}
                                        >
                                            <List.Item arrow="down">兼职时间</List.Item>
                                        </Picker>
                                    </div>
                                </div>
                                <div className='tabonce' style={this.state.show?null:{paddingTop:'50px'}}>
                                    <div>{this.showPartData(this.state.partData)}</div>
                                </div>
                            </div>
                            <div style={{justifyContent: 'center', height: this.state.viewHeight, backgroundColor: '#fff',flexWrap: 'wrap',flexDirection: 'row'}}>
                                <div className='tabtitle'>
                                    <span>已购简历({this.state.skillDataNum.buy})</span>
                                    <span onClick={this.getDownWorks} style={{color:'blue'}}>已下载简历({this.state.skillDataNum.down})</span>
                                    <span>剩余简历({this.state.skillDataNum.total})</span>
                                    <div className='more' style={this.state.show?{right:' calc(50% - 54px)'}:null}><Button type="primary" inline size="small" onClick={this.changerShow}>{this.state.show?"打开查找条件":"关闭"}</Button></div>
                                    <div className='more' style={this.state.show?{display:'none'}:null}><Button type="primary" inline size="small" onClick={this.changerRestatus}>重置</Button></div>
                                    <div className='more' style={(this.state.show?{display:'none'}:null)}><Button type="primary" inline size="small" onClick={this.searchSkillData}>搜索</Button></div>
                                </div>
                                <div className='tabpicker' style={this.state.show?{display:'none'}:null}>
                                    <div className='tabmid'>
                                        <Picker
                                            data={this.state.options.schools}
                                            title="学校"
                                            cascade={false}
                                            value={this.state.schoolValue}
                                            onChange={v => this.setState({ schoolValue: v })}
                                            onOk={v => this.setState({ schoolValue: v })}
                                        >
                                            <List.Item arrow="down">学校</List.Item>
                                        </Picker>
                                    </div>
                                    <div className='tabmid'>
                                        <Picker
                                            data={this.state.options.provinces}
                                            title="籍贯"
                                            cascade={false}
                                            value={this.state.provincesValue}
                                            onChange={v => this.setState({ provincesValue: v })}
                                            onOk={v => this.setState({ provincesValue: v })}
                                        >
                                            <List.Item arrow="down">籍贯</List.Item>
                                        </Picker>
                                    </div>
                                    <div className='tabmid'>
                                        <Picker
                                            data={this.state.options.educations}
                                            title="学历"
                                            cascade={false}
                                            value={this.state.educationsValue}
                                            onChange={v => this.setState({ educationsValue: v })}
                                            onOk={v => this.setState({ educationsValue: v })}
                                        >
                                            <List.Item arrow="down">学历</List.Item>
                                        </Picker>
                                    </div>
                                    <div className='tabmid'>
                                        <Picker
                                            data={this.state.options.specials}
                                            title="专业"
                                            cascade={false}
                                            value={this.state.specialsValue}
                                            onChange={v => this.setState({ specialsValue: v })}
                                            onOk={v => this.setState({ specialsValue: v })}
                                        >
                                            <List.Item arrow="down">专业</List.Item>
                                        </Picker>
                                    </div>
                                    <div className='tabmid'>
                                        <Picker
                                            data={this.state.options.specialtys}
                                            title="特长"
                                            cascade={false}
                                            value={this.state.specialtysValue}
                                            onChange={v => this.setState({ specialtysValue: v })}
                                            onOk={v => this.setState({ specialtysValue: v })}
                                        >
                                            <List.Item arrow="down">特长</List.Item>
                                        </Picker>
                                    </div>
                                </div>
                                <div className='tabonce' style={this.state.show?null:{paddingTop:'10px'}}>
                                    <div>{this.showSkillData(this.state.skillData)}</div>
                                </div>

                            </div>
                            <div style={{justifyContent: 'center', height: this.state.viewHeight, backgroundColor: '#fff',flexWrap: 'wrap',flexDirection: 'row'}}>
                                <div className='tabtitle'>
                                    <span>已购简历({this.state.employmentDataNum.buy})</span>
                                    <span onClick={this.getDownWorks} style={{color:'blue'}}>已下载简历({this.state.employmentDataNum.down})</span>
                                    <span>剩余简历({this.state.employmentDataNum.total})</span>
                                    <div className='more' style={this.state.show?{right:' calc(50% - 54px)'}:null}><Button type="primary" inline size="small" onClick={this.changerShow}>{this.state.show?"打开查找条件":"关闭"}</Button></div>
                                    <div className='more' style={this.state.show?{display:'none'}:null}><Button type="primary" inline size="small" onClick={this.changerRestatus}>重置</Button></div>
                                    <div className='more' style={(this.state.show?{display:'none'}:null)}><Button type="primary" inline size="small" onClick={this.searchEmploymentData}>搜索</Button></div>
                                </div>
                                <div className='tabpicker' style={this.state.show?{display:'none'}:null}>
                                    <div className='tabmid' >
                                        <Picker
                                            data={this.state.options.schools}
                                            title="学校"
                                            cascade={false}
                                            value={this.state.schoolValue}
                                            onChange={v => this.setState({ schoolValue: v })}
                                            onOk={v => this.setState({ schoolValue: v })}
                                        >
                                            <List.Item arrow="down">学校</List.Item>
                                        </Picker>
                                    </div>
                                    <div className='tabmid' >
                                        <Picker
                                            data={this.state.options.provinces}
                                            title="籍贯"
                                            cascade={false}
                                            value={this.state.provincesValue}
                                            onChange={v => this.setState({ provincesValue: v })}
                                            onOk={v => this.setState({ provincesValue: v })}
                                        >
                                            <List.Item arrow="down">籍贯</List.Item>
                                        </Picker>
                                    </div>
                                    <div className='tabmid' >
                                        <Picker
                                            data={this.state.options.educations}
                                            title="学历"
                                            cascade={false}
                                            value={this.state.educationsValue}
                                            onChange={v => this.setState({ educationsValue: v })}
                                            onOk={v => this.setState({ educationsValue: v })}
                                        >
                                            <List.Item arrow="down">学历</List.Item>
                                        </Picker>
                                    </div>
                                    <div className='tabmid' >
                                        <Picker
                                            data={this.state.options.specials}
                                            title="专业"
                                            cascade={false}
                                            value={this.state.specialsValue}
                                            onChange={v => this.setState({ specialsValue: v })}
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
                                            value={this.state.certificatesValue}
                                            onChange={v => this.setState({ certificatesValue: v })}
                                            onOk={v => this.setState({ certificatesValue: v })}
                                        >
                                            <List.Item arrow="down">证书</List.Item>
                                        </Picker>
                                    </div>
                                    <div className='tabmid' >
                                        <Picker
                                            data={this.state.options.honors}
                                            title="荣誉"
                                            cascade={false}
                                            value={this.state.honorsValue}
                                            onChange={v => this.setState({ honorsValue: v })}
                                            onOk={v => this.setState({ honorsValue: v })}
                                        >
                                            <List.Item arrow="down">荣誉</List.Item>
                                        </Picker>
                                    </div>
                                    <div className='tabmid' >
                                        <DatePicker
                                            mode="date"
                                            title="毕业时间"
                                            extra="Optional"
                                            format={"YYYY-MM-DD"}
                                            value={this.state.startGraduateTime}
                                            onChange={
                                                startGraduateTime => this.setState({ startGraduateTime })}
                                        >
                                            <List.Item arrow="down">毕业时间-起</List.Item>
                                        </DatePicker>

                                    </div>
                                    <div className='tabmid' >
                                        <DatePicker
                                            mode="date"
                                            title="毕业时间"
                                            extra="Optional"
                                            format={"YYYY-MM-DD"}
                                            value={this.state.endGraduateTime}
                                            onChange={endGraduateTime => this.setState({ endGraduateTime })}
                                        >
                                            <List.Item arrow="down">毕业时间-终</List.Item>
                                        </DatePicker>

                                    </div>
                                    <div className='tabmid' >
                                        <Picker
                                            data={this.state.options.experiences}
                                            title="工作经验"
                                            cascade={false}
                                            value={this.state.experiencesValue}
                                            onChange={v => this.setState({ experiencesValue: v })}
                                            onOk={v => this.setState({ experiencesValue: v })}
                                        >
                                            <List.Item arrow="down">工作经验</List.Item>
                                        </Picker>
                                    </div>
                                    <div className='tabmid' >
                                        <Picker
                                            data={this.state.options.provinces}
                                            title="意向城市"
                                            cascade={false}
                                            value={this.state.goprovincesValue}
                                            onChange={v => this.setState({ goprovincesValue: v })}
                                            onOk={v => this.setState({ goprovincesValue: v })}
                                        >
                                            <List.Item arrow="down">意向城市</List.Item>
                                        </Picker>
                                    </div>
                                    <div className='tabmid' >
                                        <Picker
                                            data={this.state.options.intentionjobs}
                                            title="意向岗位"
                                            cascade={false}
                                            value={this.state.intentionjobsValue}
                                            onChange={v => this.setState({ intentionjobsValue: v })}
                                            onOk={v => this.setState({ intentionjobsValue: v })}
                                        >
                                            <List.Item arrow="down">意向岗位</List.Item>
                                        </Picker>
                                    </div>
                                </div>
                                <div className='tabonce' style={this.state.show?null:{paddingTop:'20px'}}>
                                    <div>{this.showEmploymentData(this.state.employmentData)}</div>
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
            showData:{
                name:null,
                phone:null,
                categoryValue:null,
                sizeValue:null,
                portrait:null,
            },
        }
    }

    componentDidMount(){
        var viewHeight = document.documentElement.clientHeight-95;
        this.setState({viewHeight:viewHeight});
        axiosGet("/company/api/user/get_info.do",function(result){
            if(result.data.status==10){
                Toast.fail("您未登录,请先登录",2)
                window.location.href='/login';
            }
            this.setState({
                showData:result.data.data,
            })
        }.bind(this));

    }
    exit =()=>{

        const alertInstance = alert('确认', '您确认退出吗？', [
            {text: '取消', onPress: () => console.log('cancel'), style: 'default'},
            {text: '确认', onPress: () => {
                    axiosGet("/company/api/user/exit.do",function(result){
                        if(result.data.status==1){
                            Toast.success(result.data.data,2);
                        }
                        window.location.href='/login';
                    }.bind(this));
                }},
        ]);
    }

    render(){
        return (
            <div className='homebody' style={{height:this.state.viewHeight}}>
                <div className='homeimg'><img src="https://www.lezaixy.com/images/company/1.png"/></div>
                <div className='homename'>{this.state.showData.name}</div>
                <div className='homemessage'>
                    <div className='homessagenum'>
                        我的账号<span style={{float:'right'}}>{this.state.showData.phone}</span>
                    </div>
                    <div className='homessagelei'>
                        企业分类<span style={{float:'right'}}>{this.state.showData.categoryValue}</span>
                    </div>
                    <div className='homessagemodel'>
                        企业规模<span style={{float:'right'}}>{this.state.showData.sizeValue}</span>
                    </div>
                    <div className='homessagemodel'>
                        我的消息<span style={{float:'right'}}><img src='http://udaing-static.oss-cn-beijing.aliyuncs.com/tjmimg/more.png'/></span>
                    </div>
                </div>
                <div className='homebutton'><Button type="warning" onClick={this.exit}>退出登录</Button></div>

            </div>

        );
    }
}