import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from './assest/images/Logo.png';
import LogoutButton from './LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';

import './Header.css'
export class Header extends Component {
    render() {
        return (
            <div>
                <img className='logo' src={Logo}  alt='logo'/>
                <Navbar className='navbar' bg="light" variant="light">
                    
                        {/* <Navbar.Brand href="#home">Dalea' Karshak</Navbar.Brand> */}
                        <Nav className="me-auto">
                            <Nav.Link className='navbutton' href="./">Home</Nav.Link>
                            <Nav.Link className='navbutton' href="./search">Search</Nav.Link>
                            <Nav.Link className='navbutton' href="./mydishes">My dishes</Nav.Link>
                            <Nav.Link className='navbutton' href="./logout">Logout</Nav.Link>
                            <Nav.Link className='navbutton' href="./mydishes">About Us</Nav.Link>
                            {this.props.auth0.isAuthenticated ? <LogoutButton />  : 'nothing' }
                        </Nav>
                  
                </Navbar>
            </div>
        )
    }
}

export default withAuth0(Header);
