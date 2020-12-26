import React from 'react';
import AOS from 'aos';

AOS.init({
    duration: 2000
});
const Header = () => {
    return (
        <div className='container' style={{ marginTop: '80px' }}>
            <div className='d-flex flex-wrap justify-content-center align-items-center'>
                <div className='col-md-6 my-3' data-aos='' >
                    <iframe style={{ width: '100%', height: '250px' }} src="https://www.youtube.com/embed/kFthJgdiHrw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='col-md-6 text-left my-3' >
                    <p className='pl-3' style={{ fontWeight: 'bold', fontFamily: "Comic Neue, cursive", fontSize: '18px', borderLeft: '4px solid rgba(243, 52, 89, 1)', borderRadius: '2px' }}>Sudah coba rutin upload video, share link ke segala penjuru, mendaki gunung, lewatin lembah tapi viewers dan subscribermu mogok segitu aja? <br /><br />
                    eiiits, jangan pesimis dulu bosque. Inilah saatnya PENDEKAR TURUN GUNUNG!<br /><br />
                    siapa tau, kamilah yang ditakdirkan jadi jawaban terakhir semua gundahmu <br /> #UhukLebaay <br/> <br/>
                    1000 subscriber & 4000 jam tayang bukan lagi kerikil tajam bagi newbie.</p>
                </div>
            </div>
        </div>
    );
};

export default Header;