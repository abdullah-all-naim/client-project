import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}
const handleClick = (e) => {
    console.log(e.currentTarget.id)
    const getId = e.currentTarget.id
    if (getId === 'list1') {
        document.getElementById('item1').style.display = 'block';
        document.getElementById('item2').style.display = 'none';
        document.getElementById('item3').style.display = 'none';
        document.getElementById('item4').style.display = 'none';
        document.getElementById('item5').style.display = 'none';
    }
    if (getId === 'list2') {
        document.getElementById('item2').style.display = 'block';
        document.getElementById('item1').style.display = 'none';
        document.getElementById('item3').style.display = 'none';
        document.getElementById('item4').style.display = 'none';
        document.getElementById('item5').style.display = 'none';
    }
    if (getId === 'list3') {
        document.getElementById('item3').style.display = 'block';
        document.getElementById('item1').style.display = 'none';
        document.getElementById('item2').style.display = 'none';
        document.getElementById('item4').style.display = 'none';
        document.getElementById('item5').style.display = 'none';
    }
    if (getId === 'list4') {
        document.getElementById('item4').style.display = 'block';
        document.getElementById('item1').style.display = 'none';
        document.getElementById('item2').style.display = 'none';
        document.getElementById('item3').style.display = 'none';
        document.getElementById('item5').style.display = 'none';
    }
    if (getId === 'list5') {
        document.getElementById('item5').style.display = 'block';
        document.getElementById('item1').style.display = 'none';
        document.getElementById('item2').style.display = 'none';
        document.getElementById('item3').style.display = 'none';
        document.getElementById('item4').style.display = 'none';
    }

}

const Faq = () => {
    return (
        <>
        <h1 style={{ backgroundColor: 'black', width: '200px', color: 'white', padding: '10px 40px', borderRadius: '10px', margin: '100px auto', textAlign: 'center' }} id='faq'>FAQ</h1>
        <h1 className='container' style={{fontSize: '26px'}}>Yang sering ditanyakan...</h1>
            <div className="container d-flex" >

                <Tabs className='d-flex justify-content-between' defaultActiveKey="1" onChange={callback} >
                    <TabPane className='' id='tab' tab="cera kerja" key="1">
                        <ul style={{ listStyle: 'none', fontFamily: 'PT Sans, sans-serif', padding:'0' }}>
                            <div style={{ borderBottom: '3px solid gray', cursor: 'pointer' }} className="d-flex justify-content-between align-items-center py-2" onClick={handleClick} id='list1'>
                                <li > <h3 className='mb-0' style={{fontSize: '20px'}} >Bagaimana alur kerja web ini?</h3> </li>
                                <p className='mb-0' style={{ fontSize: '25px', fontWeight: '900' }}>></p>
                            </div>
                            <p id='item1' style={{ display: 'none' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deserunt dolorum eveniet eum earum vero consectetur. Quae harum unde cumque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, recusandae. </p>
                            <div style={{ borderBottom: '3px solid gray', cursor: 'pointer' }} className="d-flex justify-content-between align-items-center py-2" onClick={handleClick} id='list2'>
                                <li> <h3 className='mb-0' style={{fontSize: '20px'}} >Apakah disini menjual subscriber</h3> </li>
                                <p className='mb-0' style={{ fontSize: '25px', fontWeight: '900' }}>></p>
                            </div>
                            <p id='item2' style={{ display: 'none' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deserunt dolorum eveniet eum earum vero consectetur. Quae harum unde cumque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, recusandae. </p>
                            <div style={{ borderBottom: '3px solid gray', cursor: 'pointer' }} className="d-flex justify-content-between align-items-center py-2" onClick={handleClick} id='list3'>
                                <li> <h3 className='mb-0' style={{fontSize: '20px'}} >Apakah disini menjual watchtime</h3> </li>
                                <p className='mb-0' style={{ fontSize: '25px', fontWeight: '900' }}>></p>
                            </div>
                            <p id='item3' style={{ display: 'none' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deserunt dolorum eveniet eum earum vero consectetur. Quae harum unde cumque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, recusandae. </p>
                            <div style={{ borderBottom: '3px solid gray', cursor: 'pointer' }} className="d-flex justify-content-between align-items-center py-2" onClick={handleClick} id='list4'>
                                <li> <h3 className='mb-0' style={{fontSize: '20px'}} >Apakah ada mentor untuk konsultasi?</h3> </li>
                                <p className='mb-0' style={{ fontSize: '25px', fontWeight: '900' }}>></p>
                            </div>
                            <p id='item4' style={{ display: 'none' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deserunt dolorum eveniet eum earum vero consectetur. Quae harum unde cumque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, recusandae. </p>
                            <div style={{ borderBottom: '3px solid gray', cursor: 'pointer' }} className="d-flex justify-content-between align-items-center py-2" onClick={handleClick} id='list5'>
                                <li> <h3 className='mb-0' style={{fontSize: '20px'}} >Berapa lama sava bisa mendapatkan subscriber jika saya daftar sekarang?</h3> </li>
                                <p className='mb-0' style={{ fontSize: '25px', fontWeight: '900' }}>></p>
                            </div>
                            <p id='item5' style={{ display: 'none' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deserunt dolorum eveniet eum earum vero consectetur. Quae harum unde cumque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, recusandae. </p>
                        </ul>
                    </TabPane>
                    <TabPane tab="keamanan" key="2">
                        Content of Tab Pane 2
            </TabPane>
                    <TabPane tab="kriteria member" key="3">
                        Content of Tab Pane 3
            </TabPane>
                    <TabPane tab="upgrade PRO" key="4">
                        Content of Tab Pane 3
            </TabPane>
                </Tabs>
            </div>
        </>
    )
};
export default Faq
