import React, {Component, PropTypes} from 'react';
import { BrowserRouter } from 'react-router-dom'
import { BrowserRouter as Router, Route,Redirect,Switch } from 'react-router-dom'

import Login from '../components/login';
import Forgetpassword from '../components/forgetpassword';
import Registered from '../components/registered';
import Index from '../components/index';
import Try from '../components/try';


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
                    <Route path="/login" component={Login}></Route>
                    <Route path="/forgetpassword" component={Forgetpassword}></Route>
                    <Route path="/registered" component={Registered}></Route>
                    <Route path="/index" component={Index}></Route>
                    <Route path="/try" component={Try}></Route>

                </Switch>
            </Router>
        </BrowserRouter>
    }
    componentDidMount(){
    }
}
