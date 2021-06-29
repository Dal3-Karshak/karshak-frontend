import React, { Component } from 'react'
import Logo from './assest/images/finalLogo.png';
import LogoutButton from './LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';
import './style/Header.css'




export class Header extends Component {
    render() {
        return (
            <div>
                
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

                            </ul>
                        </div>
                    </nav>

                </header>




            </div>
        )
    }
}

export default withAuth0(Header);
