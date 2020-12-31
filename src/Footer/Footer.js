import React from 'react';

const Footer = () => {
    return (
        <div className='text-center py-5'>
            <div className='py-2' style={{ backgroundColor:'rgba(230, 0, 35, 1)', color: 'white' }}>
                Copyright &copy;Youtube.id 2021 <br/> All rights reserved
            </div>
            <p className='mt-3 text-center my-4' style={{cursor: 'pointer'}} ><a href='#header'>Back to top</a></p>
        </div>
    );
};

export default Footer;