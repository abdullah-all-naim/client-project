import React from 'react';
import { Tabs } from 'antd';
import './LoginForm.css'
const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

const LoginForm = () => {
    return (
        <Tabs className='d-flex justify-content-center' defaultActiveKey="1" onChange={callback} >
            <TabPane className='' id='tab1' tab="1" key="1">
hi
            </TabPane>
            <TabPane tab="2" id='tab2' key="2">
                Content of Tab Pane 2
            </TabPane>
        </Tabs>
    );
};

export default LoginForm;