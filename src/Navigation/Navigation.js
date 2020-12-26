import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
// import logo from '../../../logos/logo.png'
const Navigation = () => {
    const history = useHistory()

    return (
        <div className="px-5" id='header'>
            <Navbar expand="lg" className='fixed-top' style={{ backgroundColor: 'rgba(243, 52, 89, 1)' }}>
                <NavLink to="/">
                    <h3 className='text-dark'>Logo</h3>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" id='nav-bar' />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto mb-3">
                        <NavLink className="text-decoration-none font-weight-bold text-white mx-4 mt-3 text-center" to="/">HOME</NavLink>
                        <a className="text-decoration-none font-weight-bold text-white mx-4 mt-3 text-center" href="#features">FITUR</a>
                        <a className="text-decoration-none font-weight-bold text-white mx-4 mt-3 text-center" href='#review'>REVIEW</a>
                        <a className="text-decoration-none font-weight-bold text-white mx-4 mt-3 text-center" href="#faq">FAQ</a>
                        <a className="text-decoration-none font-weight-bold text-white mx-4 mt-3 text-center" href="#blog">BLOG</a>
                    </Nav>
                    <div className="text-center mx-3 my-2">
                        <button className='btn bg-white text-dark px-5' style={{ borderRadius: '20px', fontWeight: 'bold', fontSize: '17px' }} >Login</button>
                    </div>
                    <div className="text-center mx-3 my-2">
                        <button className='btn bg-white text-dark  px-5' style={{ borderRadius: '20px', fontWeight: 'bold', fontSize: '17px' }} >Signup</button>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;