import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from './assest/images/Logo.png';
import './Header.css'
export class Header extends Component {
    render() {
        return (
            <div>
                <img className='logo' src={Logo}  alt='logo'/>
                <Navbar className='navbar' bg="light" variant="light">
                    
                        {/* <Navbar.Brand href="#home">Dalea' Karshak</Navbar.Brand> */}
                        <Nav className="me-auto">
                            <Nav.Link className='navbutton' href="#home">Home</Nav.Link>
                            <Nav.Link className='navbutton' href="#features">Search</Nav.Link>
                            <Nav.Link className='navbutton' href="#pricing">My dishes</Nav.Link>
                            <Nav.Link className='navbutton' href="#pricing">Logout</Nav.Link>
                            <Nav.Link className='navbutton' href="#pricing">About Us</Nav.Link>
                        </Nav>
                  
                </Navbar>
            </div>
        )
    }
}

export default Header
