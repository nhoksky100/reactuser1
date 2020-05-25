import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from '../Component/User/Signup';
import Home from '../Component/Home';
import Login from '../Component/User/Login';
import Content from '../Component/Content/Content';


class DieuhuongUrl extends Component {
    render() {
        return (
            <Route>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Signup/" component={Signup} />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/chitiet/:slug.:id.html" component={Content} />
                </div>
            </Route>
        );
    }
}

export default DieuhuongUrl;