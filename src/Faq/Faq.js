import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import './Faq.css'
import Security from '../Security/Security';
import Registration from '../Registration/Registration';
import Violation from '../Violation/Violation';
import Advertisement from '../Advertisement/Advertisement';
import SystemWeb from '../SystemWeb/SystemWeb';

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}


const Faq = () => {
    return (
        <>
            <h1 style={{ backgroundColor: 'black', width: '200px', color: 'white', padding: '10px 40px', borderRadius: '10px', margin: '100px auto', textAlign: 'center', fontSize: '30px' }} id='faq'>FAQ</h1>
            <h1 className='container' style={{ fontSize: '30px' }}>Yang sering ditanyakan...</h1>
            <div className="d-flex justify-content-center" >

                <Tabs className=' d-flex justify-content-between' defaultActiveKey="1" onChange={callback} >
                    <TabPane id='tab' tab="SISTEM WEB" key="1">
                        <SystemWeb />
                    </TabPane>
                    <TabPane tab="PENDAFTARAN" key="2">
                        <Registration />
                    </TabPane>
                    <TabPane tab="KEAMANAN" key="3">
                        <Security></Security>
                    </TabPane>
                    <TabPane tab="PELANGGARAN" key="4">
                        <Violation />
                    </TabPane>
                    <TabPane tab="ADVERSTIMENT " key="5">
                        <Advertisement />
                    </TabPane>
                </Tabs>
            </div>
        </>
    )
};
export default Faq
