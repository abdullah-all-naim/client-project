import React from 'react';
import articleimg from '../article-img.png'
const article = [
    {
        id: 1,
        image: articleimg,
        title: 'Strategi SEO YouTube yang Berhasil!',
        description: 'Popularitas konten video sedang meningkat. Sebuah laporan yang diterbitkan pada tahun 2018 oleh State of Inbound menemukan bahwa 45% tim.. '
    },
    {
        id: 2,
        image: articleimg,
        title: 'Strategi SEO YouTube yang Berhasil!',
        description: 'Popularitas konten video sedang meningkat. Sebuah laporan yang diterbitkan pada tahun 2018 oleh State of Inbound menemukan bahwa 45% tim.. '
    },
    {
        id: 3,
        image: articleimg,
        title: 'Strategi SEO YouTube yang Berhasil!',
        description: 'Popularitas konten video sedang meningkat. Sebuah laporan yang diterbitkan pada tahun 2018 oleh State of Inbound menemukan bahwa 45% tim.. '
    },
]

const Article = () => {
    return (
        <div className="bg-white" id='blog'>
            <h2 className='font-weight-bold text-center' style={{paddingTop:'100px'}}>Artikel terpopuler</h2>
            <div className='d-flex flex-wrap justify-content-center'>
                {
                    article.map(x =>
                        <div className='d-flex justify-content-center col-md-4 col-lg-3 m-5 py-4' style={{backgroundColor:'#E5E5E5'}}>
                            <div className='text-center bg-white py-4'>
                                <div>
                                    <img src={x.image} alt="" />
                                </div>
                                <div className='m-auto'>
                                    <h4 className='col-md-10 col-12 text-left py-4'>{x.title}</h4>
                                    <p className='col-md-10 col-12 text-left'>{x.description}</p>
                                </div>
                                <div>
                                    <h6 className='text-white my-5' style={{backgroundColor:'rgba(230, 0, 35, 1)'}} >READ MORE</h6>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <p className='mt-3 text-center my-4 py-5' style={{cursor: 'pointer'}} ><a href='#header'>Back to top</a></p>
        </div>
    );
};

export default Article;