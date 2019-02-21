import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import {createBrowserHistory} from "history";

import App from './App/App';
import Login from './page/login/login';

export default class MyRoute extends React.Component {
    render() {
        return (
            <Router history={createBrowserHistory()}>
                <Switch>
                    <Route exact path="/index/login" component={Login}/>
                    <App/>
                </Switch>
            </Router>
        )
    }
}
