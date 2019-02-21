import React from 'react';
import {
    Form, Icon, Input, Button, Checkbox, Layout
} from 'antd';

const {Content} = Layout;
import './login.css'
import App from '../../App/App';
import {Redirect, Route, BrowserRouter as Router} from "react-router-dom";
import axios from 'axios';

class NormalLoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            isShow: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeNameOrPassWord = this.onChangeNameOrPassWord.bind(this);
    }

    onChangeNameOrPassWord = () => {
        this.setState({
            isShow: false
        })
    };
    handleSubmit = (e) => {
        let that = this;
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                axios.post('/login/loginIn', {param: values}).then(function (result) {
                    console.log(result['data']['status']);
                    if (result['data']['status'] === 1) {
                        sessionStorage.setItem('userName', values['userName']);
                        that.props.history.push('/index')
                    } else {
                        that.setState({
                            message: result['data']['message'],
                            isShow: true
                        })
                    }
                })
            }
        });
    }

    render() {
        const flag = sessionStorage.getItem('userName');
        // if (flag) {
        //     return (
        //         <Redirect to="/index"/>
        //     )
        // }
        const {getFieldDecorator} = this.props.form;
        return (

            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('userName', {
                        rules: [{required: true, message: '请输入用户名'}],
                    })(
                        <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                               placeholder="Username"/>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: '请输入密码'}],
                    })(
                        <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                               placeholder="Password"/>
                    )}
                </Form.Item>
                <Form.Item>
                    <span style={{display: this.state.isShow, color: 'red', fontSize: 14}}>{this.state.message}</span>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">忘记密码</a>


                </Form.Item>
                <Form.Item> <Button type="primary" htmlType="submit" className="login-form-button">
                    登 录
                </Button></Form.Item>
                <Form.Item>Or <a href="">register now!</a></Form.Item>
            </Form>


        );
    }
}

const WrappedNormalLoginForm = Form.create({name: 'normal_login'})(NormalLoginForm);

export default WrappedNormalLoginForm;
