import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../logo.png'
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import './LoginPage.css'
import LoginForm from '../LoginForm/LoginForm';
const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

const LoginPage = () => {
    const history = useHistory()
    return (
        <div style={{ backgroundColor: '', padding: '10px 0' }}>
            <div className='text-center mt-5'>
                <img className='img-fluid w-25' style={{ width: '' }} src={logo} />
            </div>
            <div className="container d-flex justify-content-center mt-5" >

                <Tabs className='d-flex justify-content-center' defaultActiveKey="1" onChange={callback} >
                    <TabPane className='' id='tab' tab="SignUp" key="1">
                        <LoginForm></LoginForm>
                    </TabPane>
                    <TabPane tab="Login" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
};

export default LoginPage;