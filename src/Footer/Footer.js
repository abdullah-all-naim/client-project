import React from 'react';

const Footer = () => {
    return (
        <div className='text-center py-5'>
            <div className='py-5' style={{ backgroundColor: 'black', color: '' }}>
                <h3 className="col- my-4 text-white">NAVIGASI</h3>
                <h3 className="col- text-white">perkenalan</h3>
                <h3 className="col- text-white">fitur kami</h3>
                <h3 className="col- text-white">testimoni</h3>
                <h3 className="col- text-white">FAG</h3>
                <h3 className="col- text-white">daftar</h3>
                <h3 className="col- text-white">blog</h3>
            </div>
            <p className='mt-3' style={{cursor: 'pointer'}} ><a href='#header'>Back to top</a></p>
        </div>
    );
};

export default Footer;