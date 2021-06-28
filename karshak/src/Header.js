import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Logo from './assest/images/finalLogo.png';
import LogoutButton from './LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';
import './style/Header.css'




export class Header extends Component {
    render() {
        return (
            <div>
                {/* <img className='logo' src={Logo}  alt='logo'/>
                <Navbar className='navbar' bg="light" variant="light">
                    
                        <Navbar.Brand href="#home">Dalea' Karshak</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link className='navbutton' href="./">Home</Nav.Link>
                            <Nav.Link className='navbutton' href="./search">Search</Nav.Link>
                            <Nav.Link className='navbutton' href="./mydishes">My dishes</Nav.Link>
                            <Nav.Link className='navbutton' href="./logout">Logout</Nav.Link>
                            <Nav.Link className='navbutton' href="./aboutus">About Us</Nav.Link>
                            {this.props.auth0.isAuthenticated ? <LogoutButton />  : 'nothing' }
                        </Nav>
                  
                </Navbar> */}

                {/* <Navbar className='navBar' bg="light" variant="light">
                    <Container className='headerContainer '> 
                        <img src={Logo} alt='logo'/>
                        <Nav className="me-auto">
                            <Nav.Link className='navbutton' href="./">Home</Nav.Link>
                            <Nav.Link className='navbutton' href="./search">Search</Nav.Link>
                            <Nav.Link className='navbutton' href="./mydiches">My dishes</Nav.Link>
                            <Nav.Link className='navbutton' href="./mydiches">About Us</Nav.Link>
                            <Nav.Link className=' logOut' href="./logi">Logout</Nav.Link>
                           
                        </Nav>
                    </Container>
                </Navbar> */}

                <header>
                    <nav>
                        <div className="headerContainer">
                            <img src={Logo} alt="" class="logo" />
                            <ul className="main-nav">
                                <li> <a className='navbutton' href="./home">Home</a> </li>
                                <li> <a className='navbutton' href="./search">Search</a> </li>
                                <li> <a className='navbutton' href="./mydishes">My dishes</a> </li>
                                <li> <a className='navbutton' href="./aboutus">About Us</a> </li>
                                <li> {this.props.auth0.isAuthenticated ? <LogoutButton />  : '' } </li>
                                {/* {this.props.auth0.isAuthenticated ? <LogoutButton />  : 'nothing' } */}
                                {/* <li> {this.props.auth0.isAuthenticated ? <LogoutButton />  : 'nothing' } </li> */}


                            </ul>
                        </div>
                    </nav>

                </header>




            </div>
        )
    }
}

export default withAuth0(Header);
