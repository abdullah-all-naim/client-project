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
        <div className='py-5' style={{ backgroundColor: 'white' }}>
            <h2 className='text-center my-5' style={{ fontFamily: "Comic Neue, cursive" }}>Cerita Mereka</h2>
            <div className='' style={{ fontFamily: "Comic Neue, cursive" }}>
                <div className="styling-example mt-5" >
                    <Carousel breakPoints={breakPoints} style={{ marginTop: '120px'}} >
                        <div className=' text-center m-4' style={{ border: '1px solid black', borderRadius: '15px', boxShadow: '5px 5px' }}>
                            <AccountCircleIcon style={{ fontSize: '80px', transform: 'translateY(-30px)' }} />
                            <div>
                                <h4>SELENA GOES</h4>
                                <div className='mb-3' >
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                </div>
                                <div style={{ borderBottom: '2px solid gray' }}></div>
                                <p className='mt-3'>"Sangat Recomendet vidionoya bagus-bagus"</p>
                            </div>
                        </div>
                        <div className=' text-center m-4' style={{ border: '1px solid black', borderRadius: '15px', boxShadow: '5px 5px' }}>
                            <AccountCircleIcon style={{ fontSize: '80px', transform: 'translateY(-30px)' }} />
                            <div>
                                <h4>SELENA GOES</h4>
                                <div className='mb-3' >
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                </div>
                                <div style={{ borderBottom: '2px solid gray' }}></div>
                                <p className='mt-3'>"Sangat Recomendet vidionoya bagus-bagus"</p>
                            </div>
                        </div>
                        <div className=' text-center m-4' style={{ border: '1px solid black', borderRadius: '15px', boxShadow: '5px 5px' }}>
                            <AccountCircleIcon style={{ fontSize: '80px', transform: 'translateY(-30px)' }} />
                            <div>
                                <h4>SELENA GOES</h4>
                                <div className='mb-3' >
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                </div>
                                <div style={{ borderBottom: '2px solid gray' }}></div>
                                <p className='mt-3'>"Sangat Recomendet vidionoya bagus-bagus"</p>
                            </div>
                        </div>
                        <div className=' text-center m-4' style={{ border: '1px solid black', borderRadius: '15px', boxShadow: '5px 5px' }}>
                            <AccountCircleIcon style={{ fontSize: '80px', transform: 'translateY(-30px)' }} />
                            <div>
                                <h4>SELENA GOES</h4>
                                <div className='mb-3' >
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                </div>
                                <div style={{ borderBottom: '2px solid gray' }}></div>
                                <p className='mt-3'>"Sangat Recomendet vidionoya bagus-bagus"</p>
                            </div>
                        </div>
                        <div className=' text-center m-4' style={{ border: '1px solid black', borderRadius: '15px', boxShadow: '5px 5px' }}>
                            <AccountCircleIcon style={{ fontSize: '80px', transform: 'translateY(-30px)' }} />
                            <div>
                                <h4>SELENA GOES</h4>
                                <div className='mb-3' >
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                </div>
                                <div style={{ borderBottom: '2px solid gray' }}></div>
                                <p className='mt-3'>"Sangat Recomendet vidionoya bagus-bagus"</p>
                            </div>
                        </div>
                        <div className=' text-center m-4' style={{ border: '1px solid black', borderRadius: '15px', boxShadow: '5px 5px' }}>
                            <AccountCircleIcon style={{ fontSize: '80px', transform: 'translateY(-30px)' }} />
                            <div>
                                <h4>SELENA GOES</h4>
                                <div className='mb-3' >
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                    <StarIcon style={{ color: 'gold' }} />
                                </div>
                                <div style={{ borderBottom: '2px solid gray' }}></div>
                                <p className='mt-3'>"Sangat Recomendet vidionoya bagus-bagus"</p>
                            </div>
                        </div>
                    </Carousel>
                </div>
                {/* <div className='col-md-4 col-lg-2 col-12 text-center m-4' style={{ border: '1px solid black', borderRadius: '15px', boxShadow: '5px 5px' }}>
                    <AccountCircleIcon style={{ fontSize: '80px', transform: 'translateY(-30px)' }} />
                    <div>
                        <h4>SELENA GOES</h4>
                        <div className='mb-3' >
                            <StarIcon style={{ color: 'gold' }} />
                            <StarIcon style={{ color: 'gold' }} />
                            <StarIcon style={{ color: 'gold' }} />
                            <StarIcon style={{ color: 'gold' }} />
                            <StarIcon style={{ color: 'gold' }} />
                        </div>
                        <div style={{ borderBottom: '2px solid gray' }}></div>
                        <p className='mt-3'>"Sangat Recomendet vidionoya bagus-bagus"</p>
                    </div>
                </div>
                <div className='col-md-4 col-lg-2 col-12 text-center m-4' style={{ border: '1px solid black', borderRadius: '15px', fontFamily: "Comic Neue, cursive", boxShadow: '5px 5px' }}>
                    <AccountCircleIcon style={{ fontSize: '80px', transform: 'translateY(-30px)' }} />
                    <div>
                        <h4>SELENA GOES</h4>
                        <div className='mb-3'>
                            <StarIcon style={{ color: 'gold' }} />
                            <StarIcon style={{ color: 'gold' }} />
                            <StarIcon style={{ color: 'gold' }} />
                            <StarIcon style={{ color: 'gold' }} />
                            <StarIcon style={{ color: 'gold' }} />
                        </div>
                        <div style={{ borderBottom: '2px solid gray' }}></div>
                        <p className='mt-3'>"Sangat Recomendet vidionoya bagus-bagus"</p>
                    </div>
                </div>
                <div className='col-md-4 col-lg-2 col-12 text-center m-4' style={{ border: '1px solid black', borderRadius: '15px', fontFamily: "Comic Neue, cursive", boxShadow: '5px 5px' }}>
                    <AccountCircleIcon style={{ fontSize: '80px', transform: 'translateY(-30px)' }} />
                    <div>
                        <h4>SELENA GOES</h4>
                        <div className='mb-3' >
                            <StarIcon style={{ color: 'gold' }} />
                            <StarIcon style={{ color: 'gold' }} />
                            <StarIcon style={{ color: 'gold' }} />
                            <StarIcon style={{ color: 'gold' }} />
                            <StarIcon style={{ color: 'gold' }} />
                        </div>
                        <div style={{ borderBottom: '2px solid gray' }}></div>
                        <p className='mt-3'>"Sangat Recomendet vidionoya bagus-bagus"</p>
                    </div>
                </div>
                <div className='col-md-4 col-lg-2 col-12 text-center m-4' style={{ border: '1px solid black', borderRadius: '15px', fontFamily: "Comic Neue, cursive", boxShadow: '5px 5px' }}>
                    <AccountCircleIcon style={{ fontSize: '80px', transform: 'translateY(-30px)' }} />
                    <div>
                        <h4>SELENA GOES</h4>
                        <div className='mb-3' >
                            <StarIcon style={{ color: 'gold' }} />
                            <StarIcon style={{ color: 'gold' }} />
                            <StarIcon style={{ color: 'gold' }} />
                            <StarIcon style={{ color: 'gold' }} />
                            <StarIcon style={{ color: 'gold' }} />
                        </div>
                        <div style={{ borderBottom: '2px solid gray' }}></div>
                        <p className='mt-3'>"Sangat Recomendet vidionoya bagus-bagus"</p>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Testimonial;