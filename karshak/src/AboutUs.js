import React, { Component } from 'react'
import './style/AboutUs.css'
import Header from './Header';
import Footer from './Footer';
import awon from './assest/profile/awonprofilepic.jpg'
import firas from './assest/profile/firasspic.jpg'
import ali from './assest/profile/alipic.jpg'
import saadoun from './assest/profile/saddoun pic.png'
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa";
import Jumbotron from 'react-bootstrap/Jumbotron'

export class AboutUs extends Component {
    render() {
        return (
            <div className='aboutUs-page'>

                <div className='aboutUs-image'>
                    <Header />

                    <div className='aboutUs-overlay'>


                        <h1 style={{ fontSize: "4.0rem", color: '#e67e22', marginLeft: 500, marginTop: -1 }}>Dalaa<span style={{ color: "white" }}>Karshak-Team</span> </h1>


                    </div>
                </div>




                <section className="team-member " id="team">
                    <article>
                        <img src={awon} alt="awon" />
                        <h3>Awon Khrais</h3>
                        <p>Full-Stack developer</p>
                        <section>
                            <a target="_blank" href="https://github.com/Awonkhrais"><i className="githup"> <GoMarkGithub /> </i></a>
                            <a target="_blank" href="https://www.linkedin.com/in/awonkhrais/"><i className="linkedIn"><FaLinkedinIn /></i></a>
                        </section>

                    </article>
                    <article>
                        <img src={firas} alt="firas" />
                        <h3>Firas Ezz-Aldeen</h3>
                        <p>Full-Stack developer</p>
                        <section>
                            <a target="_blank" href=" https://github.com/ferasezzaldeen"> <i className="githup"> <GoMarkGithub /> </i></a>
                            <a target="_blank" href=" https://www.linkedin.com/in/feras-ezz-aldeen/"><i className="linkedIn"><FaLinkedinIn /></i></a>
                        </section>

                    </article>
                    <article>
                        <img src={ali} alt="awon" />
                        <h3>Ali-Alsheyab</h3>
                        <p>Full-Stack developer</p>
                        <section>
                            <a target="_blank" href="https://github.com/AliShiyyab"><i className="githup"> <GoMarkGithub /> </i></a>
                            <a target="_blank" href="https://www.linkedin.com/in/ali-sh-0a415a20b/"><i className="linkedIn"><FaLinkedinIn /></i></a>
                        </section>

                    </article>
                    <article>
                        <img src={saadoun} alt="awon" />
                        <h3>Saadoun-Aldhirat</h3>
                        <p>Full-Stack developer</p>
                        <section>
                            <a target="_blank" href="https://github.com/saadoundhirat"><i className="githup"> <GoMarkGithub /> </i></a>
                            <a target="_blank" href="https://www.linkedin.com/in/saadoundhirat/"><i className="linkedIn"><FaLinkedinIn /></i></a>
                        </section>

                    </article>

                </section>

                <section className='aboutUs-paragraph '>
                <Jumbotron className='aboutUsPara'>
                    <h1 style={{color:'#e67e22'}}>About US</h1>
                    <p>DalaaKarshak is website for people who are in enthusiast with food.</p>
                    <p>In this website you can search between millions of dishes worldwide.</p>
                    <p>you can search by dishs's name,also you can search by cuisine type. </p>
                    
                </Jumbotron>
           
                </section>

                <Footer/>

               


            </div>
        )
    }
}

export default AboutUs
