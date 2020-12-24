import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
// import logo from '../../../logos/logo.png'
const Navigation = () => {
    const history = useHistory()
    return (
        <div className="px-5 bg-danger" id='header'>
            <Navbar expand="lg">
                <NavLink to="/">
                    <h3 className='text-dark'>Logo</h3>
                    {/* <img style={{ width: '120px', heigth: '56px' }} src={logo} alt="" /> */}
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto mb-3">
                        <NavLink className="text-decoration-none font-weight-bold text-white mx-4 mt-3 text-center" to="/">HOME</NavLink>
                        <a className="text-decoration-none font-weight-bold text-white mx-4 mt-3 text-center" href="#portfolio">FIUR</a>
                        <a className="text-decoration-none font-weight-bold text-white mx-4 mt-3 text-center" href='#review'>REVIEW</a>
                        <a className="text-decoration-none font-weight-bold text-white mx-4 mt-3 text-center" href="#faq">FAQ</a>
                        <a className="text-decoration-none font-weight-bold text-white mx-4 mt-3 text-center" href="#blog">BLOG</a>
                    </Nav>
                    <div className="text-center">
                        <button className='btn bg-white text-dark px-5 mx-md-5  my-2' style={{ borderRadius: '20px', fontWeight: 'bold', fontSize: '17px' }} onClick={() => history.push('/login')}>Login</button>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;