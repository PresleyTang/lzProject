import React from 'react'
import ReactDOM from 'react'
import { Icon , Button, NavBar ,Toast ,PullToRefresh} from 'antd-mobile';
import {axiosGet} from "../util/axios";
import * as data from '../config/dataurl'

export default class DownWorks extends React.Component{

    constructor(props){
        super(props);
        this.state={
            SkillData:[],
            refreshing: false,
            down: true,
            pageNum:1,
            pageSize:10,
            height: document.documentElement.clientHeight,
            data: [],
        }
    }
    componentDidMount(){
        var viewHeight = document.documentElement.clientHeight;
        this.getSkillData();
    }

    getSkillData = () =>{
        axiosGet(data.GetUsed+"?type="+this.props.match.params.id+"&pageNum="+this.state.pageNum+"&pageSize="+this.state.pageSize,function(result){
            if(result.data.status==10){
                Toast.fail("您未登录,请先登录",2)
                window.location.href='/login';
            }
            if(this.state.pageNum>1){
                var nextData = result.data.data.list;
                var finshData = this.state.SkillData.concat(nextData)
                this.setState({
                    SkillData:finshData,
                })
            }
            else{
                this.setState({
                    SkillData:result.data.data.list,
                })
            }

        }.bind(this));
    }

    DataDetails = (event) =>{
        var userId = event.currentTarget.getAttribute('data-userid');


        if(this.props.match.params.id==1){
            window.location.href="/personalDetails/"+userId+"/2";
        }
        else if(this.props.match.params.id==2){
            window.location.href="/skillDataDetails/"+userId+"/2";
        }
        else if(this.props.match.params.id==3){
            window.location.href="/employmentDataDetails/"+userId+"/2";
        }
        else{

        }

    }

    showEmploymentData = (data) => {
        if(data.length==0){
            return <div style={{width:'80%',margin:'10px 10%',textAlign:'center'}}>暂无已下载简历</div>
        }
        return data.map(item=>{
            return <div className='rowbody' style={{marginTop:'10px'}}>
                <div className='rowimg' ><img src={'http://'+item.userPortrait}/></div>
                <div className='rowtext'style={{width:'calc(100% - 155px)'}}>
                    <div style={{height:'40px'}}>{item.userName}<span style={{marginLeft:'20px'}}>{item.userSex}</span></div>
                    <div style={{height:'40px',fontSize:'14px'}}>{item.userSchool}</div>
                </div>

                <div className='rowbutton'><Button type="primary" inline size="small" style={{marginTop:'24px'}} data-userId={item.userId}  onClick={this.DataDetails}>查看</Button></div>
            </div>
        })
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
                    window.location.href='/search/'+this.props.match.params.id;
                },200)}
                >已下载简历</NavBar>
                </div>
                <div>{this.showEmploymentData(this.state.SkillData)}</div>
                <PullToRefresh
                    damping={60}
                    ref={el => this.ptr = el}
                    style={{
                        overflow: 'auto',
                    }}
                    indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
                    direction={'up'}
                    refreshing={this.state.refreshing}
                    onRefresh={() => {
                        var pageNum=this.state.pageNum+1
                        this.setState({ refreshing: true,pageNum:pageNum });
                        setTimeout(() => {
                            this.setState({ refreshing: false });
                        }, 1000);
                        this.getSkillData();
                    }}
                >
                    <div className='PullToRefreshup'>请在此处上拉加载更多</div>
                </PullToRefresh>

            </div>
        );
    }
}