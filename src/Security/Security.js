import React from 'react';
import { useState } from 'react';

const Security = () => {
    const [isOpen, setIsOpen] = useState('none')
    const handleClick = (e) => {
        console.log(e.currentTarget.id)
        const getId = e.currentTarget.id
        if (getId === 'security1') {
            document.getElementById('element1').style.display = 'block';
            document.getElementById('element2').style.display = 'none';
        }
        if (getId === 'security2') {
            document.getElementById('element2').style.display = 'block';
            document.getElementById('element1').style.display = 'none';
        }

    }
    return (
        <div className="container">
            <ul style={{ listStyle: 'none', fontFamily: 'PT Sans, sans-serif', padding: '0' }}>
                <div style={{ borderBottom: '3px solid gray', cursor: 'pointer' }} className="d-flex justify-content-between align-items-center py-2" onClick={handleClick} id='security1'>
                    <li > <h3 className='mb-0' style={{ fontSize: '20px' }} >Apakah channel ku dijamin aman?</h3> </li>
                    <p className='mb-0' style={{ fontSize: '25px', fontWeight: '900' }}>></p>
                </div>
                <p id='element1' style={{ display: 'none' }}>IYA! Kami tidak meminta password channelmu, tidak juga dapat mengakses informasi sensitif dalam channelmu. Semua kendali kamu yang pegang seutuhnya. </p>
                <div style={{ borderBottom: '3px solid gray', cursor: 'pointer' }} className="d-flex justify-content-between align-items-center py-2" onClick={handleClick} id='security2'>
                    <li> <h3 className='mb-0' style={{ fontSize: '20px' }} >Apakah channel ku dijamin akan bisa dimonetisasi?</h3> </li>
                    <p className='mb-0' style={{ fontSize: '25px', fontWeight: '900' }}>></p>
                </div>
                <p id='element2' style={{ display: 'none' }}>Selama kamu tidak membuat konten yang melanggar kebijakan youtube, kami pastikan channel kamu akan dapat dimonetisasi. System kami bukan sub4sub, tidak menggunakan BOT dan kecurangan sejenis. Komitmen kami untuk selalu mengawasi dan memastikan bahwa semua interaksi yang terlibat dalam web ini adalah manusia / REAL HUMAN, bahkan kami membuatnya lebih spesifik lagi “aseli orang Indonesia”. Kurang apa lagi coba? </p>
            </ul>
        </div>
    );
};

export default Security;
