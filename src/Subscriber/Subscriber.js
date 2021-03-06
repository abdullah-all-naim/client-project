import React from 'react';

const Subscriber = () => {
    return (
        <div className='container mb-5' style={{ borderRadius: '20px', textAlign: 'center', padding: '15px 0px 10px', fontFamily: "Comic Neue, cursive", fontSize: '20px' }}>
            <h2 style={{ fontFamily: 'Calibri' }}>KITA BAGI TUGAS SOB</h2>
            <p style={{ fontFamily: 'Calibri', fontStyle: 'italic', fontWeight: '600' }}>"Tugasmu meningkatkan kualitas konten. Sisanya serahkan pada kami"</p>
            <div className='col-12 col-md-8 col-lg-5 m-auto' style={{ backgroundColor: 'rgba(230, 0, 35, 1)', borderTop: '1px solid white', borderBottom: '1px solid white', borderRadius: '10px', color: 'white', }}>
                <p className='col-12 mx-auto text-center mt-2 ' style={{ fontFamily: 'Calisto MT', fontSize: '22px' }}>Mulai Sekarang <p>Kita Se-SOHIB Seperjuangan!</p> </p>
            </div>
        </div>
    );
};

export default Subscriber;
