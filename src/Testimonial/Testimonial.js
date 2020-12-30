import React from 'react';
import Carousel from 'react-elastic-carousel';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StarIcon from '@material-ui/icons/Star';


const Testimonial = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 5 }
    ];
    return (
        <div className='py-5' id='review' style={{ backgroundColor: 'white' }}>
            <h2 className='text-center my-5' style={{ fontFamily: "Prata, serif" }}>Cerita Mereka</h2>
            <div className='' style={{ fontFamily: "Comic Neue, cursive" }}>
                <div className="styling-example mt-5" >
                    <Carousel breakPoints={breakPoints} style={{ marginTop: '120px'}} >
                        <div className=' text-center m-4' style={{ border: '1px solid black', borderRadius: '15px', boxShadow: '5px 5px' , height: '372px'}}>
                            <AccountCircleIcon style={{ fontSize: '80px', transform: 'translateY(-30px)' }} />
                            <div>
                                <h4>Nia-Probolinggo</h4>
                                <div className='mb-3' >
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                </div>
                                <div style={{ borderBottom: '2px solid gray' }}></div>
                                <p className='mt-3'style={{fontFamily: 'PT Sans, sans-serif', fontWeight:'600'}}>"Awal nyobain pas web versi beta. iseng2 doang, channel juga baru bikin. gila. ternyata nagih banget! sekarang jadi minat jadi youtuber juga. Wkwk"</p>
                            </div>
                        </div>
                        <div className=' text-center m-4' style={{ border: '1px solid black', borderRadius: '15px', boxShadow: '5px 5px' , height: '372px'}}>
                            <AccountCircleIcon style={{ fontSize: '80px', transform: 'translateY(-30px)' }} />
                            <div>
                                <h4>Wildan-Malang</h4>
                                <div className='mb-3' >
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                </div>
                                <div style={{ borderBottom: '2px solid gray' }}></div>
                                <p className='mt-3'style={{fontFamily: 'PT Sans, sans-serif', fontWeight:'600'}}>"Channelku udah bikin dari 2018 tapi masih sepi. Padahal subscriber lumayan banyak. Begitu semingguan ikut gabung kesini. Kurang dikit lagi udah bisa memenuhi pengajuan monet. Keren"</p>
                            </div>
                        </div>
                        <div className=' text-center m-4' style={{ border: '1px solid black', borderRadius: '15px', boxShadow: '5px 5px' , height: '372px'}}>
                            <AccountCircleIcon style={{ fontSize: '80px', transform: 'translateY(-30px)' }} />
                            <div>
                                <h4>Nizar Kediri</h4>
                                <div className='mb-3' >
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                </div>
                                <div style={{ borderBottom: '2px solid gray' }}></div>
                                <p className='mt-3'style={{fontFamily: 'PT Sans, sans-serif', fontWeight:'600'}}>"Di minta untuk kasih review setelah nyobain gabung 5 hari. Aseli bingung mau nulis apa. Nyesel aja sih. Kenapa web ini baru muncul sekarang. Ga dari dulu2. TOP lah buat TEAM nya"</p>
                            </div>
                        </div>
                        <div className=' text-center m-4' style={{ border: '1px solid black', borderRadius: '15px', boxShadow: '5px 5px' , height: '372px'}}>
                            <AccountCircleIcon style={{ fontSize: '80px', transform: 'translateY(-30px)' }} />
                            <div>
                                <h4>Aziz Bandung</h4>
                                <div className='mb-3' >
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                </div>
                                <div style={{ borderBottom: '2px solid gray' }}></div>
                                <p className='mt-3'style={{fontFamily: 'PT Sans, sans-serif', fontWeight:'600'}}>"Satu kata mewakili testimoniku “Kalian Luar Biasaaa…."</p>
                            </div>
                        </div>
                        <div className=' text-center m-4' style={{ border: '1px solid black', borderRadius: '15px', boxShadow: '5px 5px' , height: '372px'}}>
                            <AccountCircleIcon style={{ fontSize: '80px', transform: 'translateY(-30px)' }} />
                            <div>
                                <h4>Zuhairoh Surabaya</h4>
                                <div className='mb-3' >
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                </div>
                                <div style={{ borderBottom: '2px solid gray' }}></div>
                                <p className='mt-3'style={{fontFamily: 'PT Sans, sans-serif', fontWeight:'600'}}>"Kalau ada yang bilang “sub4sub itu langkah paling cepet untuk dimonet”. SALAH BESAR. Disini bisa lebih KILAT lagi, dan tanpa harus melanggar pedoman youtube. GENIUS!"</p>
                            </div>
                        </div>
                        <div className=' text-center m-4' style={{ border: '1px solid black', borderRadius: '15px', boxShadow: '5px 5px' , height: '372px'}}>
                            <AccountCircleIcon style={{ fontSize: '80px', transform: 'translateY(-30px)' }} />
                            <div>
                                <h4>Rosyid Jakarta</h4>
                                <div className='mb-3' >
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                </div>
                                <div style={{ borderBottom: '2px solid gray' }}></div>
                                <p className='mt-3'style={{fontFamily: 'PT Sans, sans-serif', fontWeight:'600'}}>"Baru gabung 2 hari, belum bisa kasih testimony banyak. Cuma salut sama team nya. Dengan web sekomplek ini berani kasih gratisan. Pasti anak sultan nih! haha"</p>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;