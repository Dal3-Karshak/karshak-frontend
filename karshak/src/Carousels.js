import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import heroImg1 from './assest/images/heroimghompage.jpg'
import heroImg2 from './assest/images/heroimghompage1.jpg'
import heroImg3 from './assest/images/heroimghompage2.jpg'
import './style/Carousels.css'


export class Carousels extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={heroImg1}
                            alt="First slide"
                            // width="1500"
                            height="600"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={heroImg2}
                            alt="Second slide"
                            // width="1500"
                            height="600"


                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={heroImg3}
                            alt="Third slide"
                            // width="1500"
                            height="600"


                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Carousels
