import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import TopClient from './TopClient';
import Meals from './Meals';
import './style/Home.css'




export class Home extends Component {

    render() {
        return (
            <div>

            <div className='heroimage'>
                <Header /> 
            </div>


                <div className='hero-text-box'>
                    <h1> Hello food lovers<br></br> First, we eat. Then, we do everything else. </h1>
                    <a class="btn btn-full" href="">I’m Hungry</a>
                    <a class="btn home-btn-ghost" href="">My Dishes</a>
                </div>
                <TopClient />
                <Meals />
                <Footer/>

            </div>
        )
    }
}

export default withAuth0(Home);
