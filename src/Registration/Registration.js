import React from 'react';
import { useState } from 'react';

const Registration = () => {
    const [isOpen, setIsOpen] = useState('none')
    const handleClick = (e) => {
        const getId = e.currentTarget.id
        if (getId === 'registration1') {
            document.getElementById('elements1').style.display = 'block';
            document.getElementById('elements2').style.display = 'none';
            document.getElementById('elements3').style.display = 'none';
        }
        if (getId === 'registration2') {
            document.getElementById('elements2').style.display = 'block';
            document.getElementById('elements1').style.display = 'none';
            document.getElementById('elements3').style.display = 'none';
        }
        if (getId === 'registration3') {
            document.getElementById('elements3').style.display = 'block';
            document.getElementById('elements2').style.display = 'none';
            document.getElementById('elements1').style.display = 'none';
        }
    }

    return (
        <div>
            <ul style={{ listStyle: 'none', fontFamily: 'PT Sans, sans-serif', padding: '0' }}>
                <div style={{ borderBottom: '3px solid gray', cursor: 'pointer' }} className="d-flex justify-content-between align-items-center py-2" onClick={handleClick} id='registration1'>
                    <li > <h3 className='mb-0' style={{ fontSize: '20px' }} >Channel yang seperti apa yang akan diterima disini?</h3> </li>
                    <p className='mb-0' style={{ fontSize: '25px', fontWeight: '900' }}>></p>
                </div>
                <p id='elements1' style={{ display: 'none' }}>1. Sudah memiliki minimal 2 video original dengan durasi paling sedikit 5 menit di tiap video <br />
                2. channel belum dimonetisasi <br />
                3. Semua konten video harus mematuhi pedoman youtube
                </p>
                <div style={{ borderBottom: '3px solid gray', cursor: 'pointer' }} className="d-flex justify-content-between align-items-center py-2" onClick={handleClick} id='registration2'>
                    <li> <h3 className='mb-0' style={{ fontSize: '20px' }} >Kenapa pendaftaran ku tidak disetujui?</h3> </li>
                    <p className='mb-0' style={{ fontSize: '25px', fontWeight: '900' }}>></p>
                </div>
                <p id='elements2' style={{ display: 'none' }}>Hai maafkan kami sob. Jika kami terpaksa menolak pendaftaran mu, artinya kamu belum memenuhi kriteria untuk dapat bergabung disini. </p>
                <div style={{ borderBottom: '3px solid gray', cursor: 'pointer' }} className="d-flex justify-content-between align-items-center py-2" onClick={handleClick} id='registration3'>
                    <li> <h3 className='mb-0' style={{ fontSize: '20px' }} >Setelah pendaftaran, berapa lama proses approval nya?</h3> </li>
                    <p className='mb-0' style={{ fontSize: '25px', fontWeight: '900' }}>></p>
                </div>
                <p id='elements3' style={{ display: 'none' }}>Jika pas tidak ada antrian panjang, atau gak pas mimin lagi ishoma makan seblak. 1 jam juga udah beres kok sob  </p>
            </ul>
        </div>
    );
};

export default Registration;
