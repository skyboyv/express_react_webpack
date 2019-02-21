import React, {Component} from 'react';
import {Layout, Menu, Icon, Breadcrumb} from 'antd';

const {SubMenu} = Menu;
const {Sider, Content} = Layout;
import axios from 'axios';

import {Link, Route} from 'react-router-dom';
import MenuRoute from './route'

class menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeKey: '1',
            defaultOpenKey: '',
            menuList: []
        };
        this.onChangeState = this.onChangeState.bind(this);
    };

    onChangeState(e) {
        this.setState({
            activeKey: e.key
        })
    }

    componentWillMount() {
        let self = this;
        axios.post('/menu/findMenuList').then(function (result) {
            self.setState({
                menuList: result.data.data
            })
        });

    }

    render() {
        return (
            <Content >
                <Layout>
                    <Sider width={200} style={{background: '#fff'}}>
                        <Menu
                            mode="inline"
                            theme="dark"
                            defaultSelectedKeys={[this.state.activeKey]}
                            defaultOpenKeys={[this.state.defaultOpenKey]}
                            style={{height: '100%', minHeight: '430px',}}
                            onClick={this.onChangeState}
                        >
                            <Menu.Item key="1">
                                <Link to={"/index"}><Icon type="pie-chart"/><span>首页</span></Link>
                            </Menu.Item>
                            {this.state.menuList.map((parentMenu, parent_menu_index) => {
                                return (
                                    parentMenu.childList ?
                                        <SubMenu key={parentMenu['ID']}
                                                 title={<span><Icon type="user"/>{parentMenu['MENUNAME']}</span>}>
                                            {
                                                parentMenu.childList.map((childMenu, child_menu_index) => {
                                                    return <Menu.Item key={childMenu['ID']}>
                                                        <Link to={childMenu["MENUURL"]}>
                                                            <span className="nav-text">{childMenu['MENUNAME']}</span>
                                                        </Link>
                                                    </Menu.Item>
                                                })
                                            }
                                        </SubMenu>
                                        : <Menu.Item key={parentMenu['ID']}>
                                            <Link to={childMenu["MENUURL"]}>
                                                <span className="nav-text">{parentMenu.MENUNAME}</span>
                                            </Link>
                                        </Menu.Item>
                                )
                            })}
                        </Menu>
                    </Sider>
                    <Layout>
                        <Breadcrumb style={{padding: '24px'}}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280,}}>
                            <MenuRoute  menuList={this.state.menuList}/>
                        </Content>
                    </Layout>
                </Layout>
            </Content>
        )
    }
}

export default menu;
