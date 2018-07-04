import React, {Component, PropTypes} from 'react';
import { BrowserRouter } from 'react-router-dom'
import { BrowserRouter as Router, Route,Redirect,Switch } from 'react-router-dom'

import Login from '../components/login';
import Forgetpassword from '../components/forgetpassword';
import Registered from '../components/registered';
import Index from '../components/index';
import PersonalDetails from '../components/personalDetails';
import SkillDataDetails from '../components/skillDataDetails';
import EmploymentDataDetails from '../components/employmentDataDetails';
import DownWorks from '../components/downWorks';
import Message from '../components/message';

const Article = () =>(
    <Switch>
        <Route exact path="/personalDetails" component={PersonalDetails}></Route>
        <Route path="/personalDetails/:id/:type" component={PersonalDetails}></Route>
        <Route exact path="/skillDataDetails" component={SkillDataDetails}></Route>
        <Route path="/skillDataDetails/:id/:type" component={SkillDataDetails}></Route>
        <Route exact path="/employmentDataDetails" component={EmploymentDataDetails}></Route>
        <Route path="/employmentDataDetails/:id/:type" component={EmploymentDataDetails}></Route>
        <Route exact path="/downWorks" component={DownWorks}></Route>
        <Route path="/downWorks/:id" component={DownWorks}></Route>
        <Route exact path="/search" component={Index}></Route>
        <Route path="/search/:id" component={Index}></Route>
    </Switch>
)

export default class AppRouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount() {

    }
    render() {
        return <BrowserRouter>
            <Router basename="/">
                <Switch>
                    <Route path="//" component={Login}></Route>
                    <Route path="/message" component={Message}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/forgetpassword" component={Forgetpassword}></Route>
                    <Route path="/registered" component={Registered}></Route>
                    <Route path="/index" component={Index}></Route>
                    <Route path="/home" component={Index}></Route>
                    <Route path="/search" component={Article}></Route>
                    <Route path="/personalDetails" component={Article}></Route>
                    <Route path="/skillDataDetails" component={Article}></Route>
                    <Route path="/employmentDataDetails" component={Article}></Route>
                    <Route path="/downWorks" component={Article}></Route>

                </Switch>
            </Router>
        </BrowserRouter>
    }
    componentDidMount(){
    }
}
