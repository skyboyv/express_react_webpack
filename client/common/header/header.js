import React, {Component} from 'react';
import {Layout, Menu} from "antd";

const {Header} = Layout;
import './header.css';

class header extends Component {
    render() {
        return (
            <Header className="header">
                <div className="logo"/>
                <p>个人精彩展现</p>
            </Header>
        )
    }
}

export default header;
