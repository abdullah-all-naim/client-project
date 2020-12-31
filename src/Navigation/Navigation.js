import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import logo from '../logo1.png'
import caption from '../caption.png'
const Navigation = () => {
    const history = useHistory()

    return (
        <div className="" id='header'>
            <Navbar expand="lg" className='fixed-top shadow' style={{ backgroundColor: 'white', }}>
                <NavLink to="/" className="m-auto">
                    <div>
                        <img style={{ width: '50px', height: '50px' }} src={caption} alt="" />
                        <img style={{ height: '50px' }} src={logo} alt="" />
                    </div>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" id='nav-bar' />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto mb-3">
                        <NavLink className="text-decoration-none font-weight-bold text-dark mx-4 mt-3 text-center" to="/">HOME</NavLink>
                        <a className="text-decoration-none font-weight-bold text-dark mx-4 mt-3 text-center" href="#features">FITUR</a>
                        <a className="text-decoration-none font-weight-bold text-dark mx-4 mt-3 text-center" href='#review'>REVIEW</a>
                        <a className="text-decoration-none font-weight-bold text-dark mx-4 mt-3 text-center" href="#faq">FAQ</a>
                        <a className="text-decoration-none font-weight-bold text-dark mx-4 mt-3 text-center" href="#blog">BLOG</a>
                    </Nav>
                    <div className="text-center mx-3 my-2">
                        <button className='btn text-white px-5' onClick={() => history.push('/login')} style={{ borderRadius: '20px', fontWeight: 'bold', fontSize: '17px', backgroundColor: 'rgba(230, 0, 35, 1)' }} >Login</button>
                    </div>
                    <div className="text-center mx-3 my-2">
                        <button className='btn text-white  px-5' onClick={() => history.push('/signup')} style={{ borderRadius: '20px', fontWeight: 'bold', fontSize: '17px', backgroundColor: 'rgba(230, 0, 35, 1)' }} >Signup</button>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;