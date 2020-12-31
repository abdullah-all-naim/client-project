import React from 'react';
import { useState } from 'react';

const Violation = () => {
    const [isOpen, setIsOpen] = useState('none')
    const handleClick = (e) => {
        const getId = e.currentTarget.id
        if (getId === 'violation1') {
            document.getElementById('vio1').style.display = 'block';
            document.getElementById('vio2').style.display = 'none';
            document.getElementById('vio3').style.display = 'none';
        }
        if (getId === 'violation2') {
            document.getElementById('vio2').style.display = 'block';
            document.getElementById('vio1').style.display = 'none';
            document.getElementById('vio3').style.display = 'none';
        }
        if (getId === 'violation3') {
            document.getElementById('vio3').style.display = 'block';
            document.getElementById('vio2').style.display = 'none';
            document.getElementById('vio1').style.display = 'none';
        }
    }

    return (
        <div className="container">
            <ul style={{ listStyle: 'none', fontFamily: 'PT Sans, sans-serif', padding: '0' }}>
                <div style={{ borderBottom: '3px solid gray', cursor: 'pointer' }} className="d-flex justify-content-between align-items-center py-2" onClick={handleClick} id='violation1'>
                    <li > <h3 className='mb-0' style={{ fontSize: '20px' }} >Kenapa akses login saya dicabut?</h3> </li>
                    <p className='mb-0' style={{ fontSize: '25px', fontWeight: '900' }}>></p>
                </div>
                <p id='vio1' style={{ display: 'none' }}>Hmm... Setiap terjadi pelanggaran ketentuan yang telah dijelaskan dalam perjanjian komunitas ini hingga 3x. Maka hak akses kamu bakal mimin suspend sob. Bandel sih...
                </p>
                <div style={{ borderBottom: '3px solid gray', cursor: 'pointer' }} className="d-flex justify-content-between align-items-center py-2" onClick={handleClick} id='violation2'>
                    <li> <h3 className='mb-0' style={{ fontSize: '20px' }} >Apakah saya bisa mendaftar lagi setelah akses login saya dicabut?
                    </h3> </li>
                    <p className='mb-0' style={{ fontSize: '25px', fontWeight: '900' }}>></p>
                </div>
                <p id='vio2' style={{ display: 'none' }}>Kemungkinan bisa, namun setelah melewati masa pertobatan 1 tahun </p>
                <div style={{ borderBottom: '3px solid gray', cursor: 'pointer' }} className="d-flex justify-content-between align-items-center py-2" onClick={handleClick} id='violation3'>
                    <li> <h3 className='mb-0' style={{ fontSize: '20px' }} >Di suspend 1 tahun itu lama lho min? kejam banget…</h3> </li>
                    <p className='mb-0' style={{ fontSize: '25px', fontWeight: '900' }}>></p>
                </div>
                <p id='vio3' style={{ display: 'none' }}>Youtube itu ibarat arena balap liar, begitu kamu coba lawan arah di sirkuit. Kalau gak kena hantam sama pembalap lain dari belakang, ya kamu bakal dilempar sandal sama penonton karena merusak pemandangan. Jadi kami ingin melatih mental kamu agar terbiasa dengan semua peraturan disana. Sehingga saat kamu lulus dari sini, kamu sudah siap tanding di arena balap yang sesungguhnya. Itulah alasan nya kenapa kami juga menerapkan banyak aturan . Percayalah itu karena kami peduli padamu. Toh itu untuk kebaikan kamu juga. kalau disini aja kamu udah berani melanggar, ya apalagi disana nanti. Bakal makin ambyar. he </p>
            </ul>
        </div>
    );
};

export default Violation;
