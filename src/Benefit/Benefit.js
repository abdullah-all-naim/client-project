import React from 'react';
import circle from '../images/bergana.png'
import community from '../images/community.png'
import human from '../images/human.png'
import indonesia from '../images/indonesia.png'
import privacy from '../images/privacy.png'
import simple from '../images/simple.png'
import support from '../images/support.png'
import video from '../images/video.png'

const benefit = [
    {
        id: 1,
        image: circle,
        text: 'Aman'
    },
    {
        id: 2,
        image: video,
        text: 'Materi Optimasi Channel'
    },
    {
        id: 3,
        image: support,
        text: 'Support System'
    },
    {
        id: 4,
        image: simple,
        text: 'Mudah & Simple'
    },
    {
        id: 5,
        image: community,
        text: 'Komunitas Youtuber paling solid'
    },
    {
        id: 6,
        image: human,
        text: 'Real Human'
    },
    {
        id: 7,
        image: privacy,
        text: 'Opsi Privasi'
    },
    {
        id: 8,
        image: indonesia,
        text: 'Asli Penonton Indonesia'
    },
]

const Benefit = () => {
    return (
        <div style={{ fontFamily: "Comic Neue, cursive", fontWeight: '800', paddingTop:'02px' }} id='features'>
            <h4 className='text-center' style={{ margin: '100px 0', fontFamily:'Inter, sans-serif', fontSize:'26px' }}>Apa sih yang kami tawarkan?</h4>
            <div className='d-flex flex-wrap'>
                {
                    benefit.map(x =>
                        <div className='d-flex col-md-3 col-6 justify-content-center'>
                            <div className='text-center mb-5' data-aos="flip-left">
                                <div style={{ }}>

                                <img src={x.image} style={{ width: '80px', borderRadius: '50%'}} className="img-fluid" alt="" />
                                </div>
                                <h4 className='mt-2 font-weight-bold' style={{fontFamily:'Merriweather, serif', fontSize:'16px'}}>{x.text}</h4>
                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Benefit;