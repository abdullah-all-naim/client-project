import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import './Faq.css'

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
        <h1 style={{ backgroundColor: 'black', width: '200px', color: 'white', padding: '10px 40px', borderRadius: '10px', margin: '100px auto', textAlign: 'center', fontSize:'30px' }} id='faq'>FAQ</h1>
        <h1 className='container' style={{fontSize: '30px'}}>Yang sering ditanyakan...</h1>
            <div className="container d-flex" >

                <Tabs className='d-flex justify-content-between' defaultActiveKey="1" onChange={callback} >
                    <TabPane className='' id='tab' tab="cera kerja" key="1">
                        <ul style={{ listStyle: 'none', fontFamily: 'PT Sans, sans-serif', padding:'0' }}>
                            <div style={{ borderBottom: '3px solid gray', cursor: 'pointer' }} className="d-flex justify-content-between align-items-center py-2" onClick={handleClick} id='list1'>
                                <li > <h3 className='mb-0' style={{fontSize: '20px'}} >Bagaimana alur kerja web ini?</h3> </li>
                                <p className='mb-0' style={{ fontSize: '25px', fontWeight: '900' }}>></p>
                            </div>
                            <p id='item1' style={{ display: 'none' }}>Setelah pendaftaranmu kami setujui, kamu bisa mulai menonton video yang kami sediakan. Setiap video yang berhasil kamu tonton akan terakumulasi ke dalam poin. Poin tersebut dapat kamu gunakan untuk mempromosikan videomu ke daftar tonton member lain </p>
                            <div style={{ borderBottom: '3px solid gray', cursor: 'pointer' }} className="d-flex justify-content-between align-items-center py-2" onClick={handleClick} id='list2'>
                                <li> <h3 className='mb-0' style={{fontSize: '20px'}} >Apakah disini menjual subscriber</h3> </li>
                                <p className='mb-0' style={{ fontSize: '25px', fontWeight: '900' }}>></p>
                            </div>
                            <p id='item2' style={{ display: 'none' }}>Tidak. Membeli subscriber itu melanggar kebijakan Youtube bos. Sekalipun channel bakal kelihatan "berkembang" tapi itu palsu. Bahkan pengajuan monetisasimu bakal ditolak youtube. Alhasil sia sia juga dong </p>
                            <div style={{ borderBottom: '3px solid gray', cursor: 'pointer' }} className="d-flex justify-content-between align-items-center py-2" onClick={handleClick} id='list3'>
                                <li> <h3 className='mb-0' style={{fontSize: '20px'}} >Apakah web ini menggunakan robot atau software sejenisnya untuk menonton video?</h3> </li>
                                <p className='mb-0' style={{ fontSize: '25px', fontWeight: '900' }}>></p>
                            </div>
                            <p id='item3' style={{ display: 'none' }}>Tidak. Tujuan web ini adalah untuk Meningkatkan "engagement" channel mu. Jadi semua interaksi wajib dilakukan oleh manusia. Sistem kami akan mendeteksi otomatis dan memblokir views tidak wajar / palsu / mencurigakan. </p>
                            <div style={{ borderBottom: '3px solid gray', cursor: 'pointer' }} className="d-flex justify-content-between align-items-center py-2" onClick={handleClick} id='list4'>
                                <li> <h3 className='mb-0' style={{fontSize: '20px'}} >Apakah disini menjual Viewers?</h3> </li>
                                <p className='mb-0' style={{ fontSize: '25px', fontWeight: '900' }}>></p>
                            </div>
                            <p id='item4' style={{ display: 'none' }}>Kami ini setia mengikuti semboyan penduduk +62 yang paling sadeees “kalau bisa gratis, kenapa harus bayar? Haha. Konsep web ini adalah agar para youtuber pemula (belum dimonetisasi) bisa saling support dan memberikan masukan positif satu sama lain. Jika kamu tidak menonton video temanmu, videomu juga tidak akan ada penonton. Sesimple itu Mbak Bro </p>
                            <div style={{ borderBottom: '3px solid gray', cursor: 'pointer' }} className="d-flex justify-content-between align-items-center py-2" onClick={handleClick} id='list5'>
                                <li> <h3 className='mb-0' style={{fontSize: '20px'}} >Disini kok ketat banget, udah kayak youtube beneran aja lu min</h3> </li>
                                <p className='mb-0' style={{ fontSize: '25px', fontWeight: '900' }}>></p>
                            </div>
                            <p id='item5' style={{ display: 'none' }}>Uhuk. Kami ini sangat amat serius banget agar sistem yang kami rancang selama 9 purnama ini, berjalan se-sempurna gombalanmu dan tidak melanggar kebijakan atau bertentangan sama ketua gank kami Bang youtube. Selain itu, demi menjaga agar komunitas ini tetap produktif, selalu sehat dan riang gembira, kami akan memberlakukan peraturan dan kebijakan yang wajib ditaati semua kisanak di padepokan ini. detailnya klik disini </p>
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
