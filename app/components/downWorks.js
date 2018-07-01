import React from 'react'
import { Icon , Button, NavBar ,Toast } from 'antd-mobile';
import {axiosGet} from "../util/axios";


export default class DownWorks extends React.Component{

    constructor(props){
        super(props);
        this.state={
            SkillData:[]
        }
    }
    componentDidMount(){
        var viewHeight = document.documentElement.clientHeight-138.5;
        this.setState({viewHeight:viewHeight});
        this.getSkillData();
    }

    getSkillData = () =>{
        axiosGet("/company/api/user/getUsed.do"+"?type="+this.props.match.params.id,function(result){
            if(result.data.status==10){
                Toast.fail("您未登录,请先登录",2)
                window.location.href='/login';
            }
            this.setState({
                SkillData:result.data.data.list,
            })
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
        return data.map(item=>{
            return <div className='rowbody' style={{marginTop:'10px',width:'calc(100% - 26px)'}}>
                <div className='rowimg' ><img src='http://udaing-static.oss-cn-beijing.aliyuncs.com/tjmimg/leizai.png'/></div>
                <div className='rowtext'style={{width:'calc(100% - 155px)'}}>
                    <div style={{height:'30px'}}>{item.userName}<span style={{marginLeft:'20px'}}>{item.userSex}</span></div>
                    <div style={{height:'30px'}}>{item.userSchool}</div>
                </div>

                <div className='rowbutton'><Button type="primary" inline size="small" style={{marginTop:'24px'}} data-userId={item.userId}  onClick={this.DataDetails}>查看</Button></div>
            </div>
        })
    }

    render(){
        console.log(this.props.match.params.id)
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

            </div>
        );
    }
}