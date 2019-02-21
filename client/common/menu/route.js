import React, {Component} from 'react';

import {Route, Redirect, Switch, BrowserRouter as Router} from 'react-router-dom'

import Index from "../../page/index";
import renderDetail from './utils/AdapterModule'

class route extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){

    }
    render() {
        return (
            <div>
                <Route path="/index" exact component={Index}/>
                {
                    this.props.menuList.map(function (parentMenu, index) {
                        if (parentMenu.childList) {
                            return (
                                parentMenu.childList.map(function (childMenu) {
                                    {
                                        return <Route key={childMenu["ID"]} path={`${childMenu["MENUURL"]}`} component={ renderDetail(childMenu["COMPONENT"])}/>
                                    }
                                })
                            )
                        }
                    })
                }
            </div>
        )
    }
}

export default route;
