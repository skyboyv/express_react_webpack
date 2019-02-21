import React, {Component} from 'react';
import './App.css'
import Header from '../common/header/header'
import Footer from '../common/footer/footer'
import Content from '../common/menu/menu'
import {Breadcrumb, Layout} from 'antd';
import {BrowserRouter as Router, Redirect} from "react-router-dom";


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const flag = sessionStorage.getItem('userName');
        // if (flag === null) {
        //     return (
        //         <Redirect to="/index/login"/>
        //     )
        // }
        return (
            <Layout>
                <Header/>
                <Content/>
                <Footer/>
            </Layout>
        );
    }
}

export default App;
