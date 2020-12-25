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
        <div className='pt-5' style={{ backgroundColor: 'white', marginBottom: '70px', paddingBottom: '80px' }}>
            <div className='d-flex flex-wrap justify-content-center container mb-5'>
                <div className='col-md-12 col-lg-6 col-12 text-center' data-aos='' style={{ color: 'white', fontFamily: "Comic Neue, cursive", backgroundColor: 'rgba(243, 52, 89, 1)', borderRadius: '60px' }}>
                    <p style={{ fontSize: '25px' }}>tunggu apalagi?</p>
                    <h5 style={{ fontSize: '30px', color: 'white' }}>DAFTAR SEKARANG JUGA!</h5>
                    <p style={{ fontSize: '25px' }}>mumpung masih ada promo</p>
                    <del><p style={{ fontSize: '25px' }}>IDR 100.000</p></del>
                    <del><p style={{ fontSize: '25px' }}>IDR 50.000</p></del>
                    <h1 style={{ fontSize: '60px', color: 'black' }}>IDR 0, -</h1>
                    <p style={{ fontSize: '25px' }}>GASS PWOLL !</p>
                </div>
                <div className="col-md-12 col-lg-6 col-12" data-aos=''>
                    {/* <img className="img-fluid" src={frame} alt="" /> */}
                    <Lottie
                        options={defaultOptions}

                    />
                </div>
            </div>
            <div className="col-md-4 col-lg-3 col-8 m-auto" style={{ backgroundColor: 'rgba(243, 52, 89, 1)', borderRadius: '30px', marginBottom: '', cursor: 'pointer' }}>
                <h3 style={{ fontFamily: "Coda Caption, sans-serif", color: 'white', fontSize: '50px', textAlign: 'center', padding: '10px 0', }}>Daftar</h3>
            </div>
        </div>
    );
};

export default SignUp;