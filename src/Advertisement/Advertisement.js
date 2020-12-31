import React from 'react';
import { useState } from 'react';

const Advertisement = () => {
    const [isOpen, setIsOpen] = useState('none')
    const handleClick = (e) => {
            document.getElementById('ad1').style.display = 'block';
    }
    return (
        <div className="container">
            <ul style={{ listStyle: 'none', fontFamily: 'PT Sans, sans-serif', padding: '0' }}>
                <div style={{ borderBottom: '3px solid gray', cursor: 'pointer' }} className="d-flex justify-content-between align-items-center py-2" onClick={handleClick} >
                    <li > <h3 className='mb-0' style={{ fontSize: '20px' }} >Min, saya bisa promosikan produk saya disini? Saya jualan kamera murah berkualitas</h3> </li>
                    <p className='mb-0' style={{ fontSize: '25px', fontWeight: '900' }}>></p>
                </div>
                <p id='ad1' style={{ display: 'none' }}>Bisa banget Sob, namun karena tidak semua bentuk iklan dapat kami setujui. Silahkan kontak admin terlebih dulu disini atau via livechat untuk memastikan. Produk dan jasamu akan kami tampilkan dalam 2 pilihan format ; banner atau video. </p>
            </ul>
        </div>
    );
};

export default Advertisement;
