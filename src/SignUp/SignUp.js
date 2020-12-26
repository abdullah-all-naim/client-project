import React from 'react';
import frame from '../frame.png'
import Lottie from 'react-lottie';
import lottifile from '../LottieFile/lottie file.json'

const SignUp = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: lottifile,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div className='my-5 py-5' style={{ backgroundColor: 'white', marginBottom: '', paddingBottom: '' }}>
            <div className='d-flex flex-wrap justify-content-center align-items-center mb-5'>
                <div className='col-md-8 col-lg-4 m-2 col-11 text-center' data-aos='' style={{ color: 'white', fontFamily: "Comic Neue, cursive", backgroundColor: 'rgba(243, 52, 89, 1)', borderRadius: '20px', lineHeight: '0px', height: '50%' }}>
                    <p className='mt-3' style={{ fontSize: '25px' }}>Tunggu apalagi?</p>
                    <h5 style={{ fontSize: '25px', color: 'white' }}>DAFTAR SEKARANG JUGA!</h5>
                    <p style={{ fontSize: '20px', lineHeight:'22px' }}>Mumpung masih ada promo</p>
                    <del><p style={{ fontSize: '25px' }}>IDR 100.000</p></del>
                    <del><p style={{ fontSize: '25px' }}>IDR 50.000</p></del>
                    <h1 style={{ fontSize: '35px', color: 'black', fontFamily: 'Calibri', fontWeight: 'bold' }}>IDR 0, -</h1>
                    <p style={{ fontSize: '25px' }}>GASS PWOLL !</p>
                </div>
                <div className="col-md-10 col-lg-7 w-100" data-aos=''>
                    <Lottie
                        options={defaultOptions}
                    />
                </div>
            </div>
            <div className="col-md-4 col-lg-3 col-10 m-auto" style={{ backgroundColor: 'rgba(243, 52, 89, 1)', borderRadius: '30px', marginBottom: '', cursor: 'pointer' }}>
                <h3 className='p-2' style={{ fontFamily: "Coda Caption, sans-serif", color: 'white', fontSize: '35px', textAlign: 'center', padding: '', }}>DAFTAR</h3>
            </div>
        </div>
    );
};

export default SignUp;