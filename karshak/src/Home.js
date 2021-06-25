import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';

export class Home extends Component {
    render() {
        const user=this.props.auth0
        return (
            <div>
                <Header/>
              <h2>welcome </h2>  
              <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Search for diches</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                      
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>My diches</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Card.Body>
                     
                    </Card>
             
                </CardGroup>
                <Footer/>
            </div>
        )
    }
}

export default Home
