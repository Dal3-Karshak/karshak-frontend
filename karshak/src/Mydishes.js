import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';


export class Mydishes extends Component {


    constructor(props) {
        super(props)
        this.state = {
            myDishes: [],
            stop: true,
            feedBack: '',
            indexNum: 0,
        }
    }

    componentDidMount = async () => {
        if (this.props.auth0.isAuthenticated) {
            const { user } = this.props.auth0;

            const email = user.email;
            console.log(email);
            let foodURL = 'http://localhost:8000/';
            let data = await axios.get(`${foodURL}food/handleUsers?email=saadoundhirat93@gmail.com`);
            console.log(data.data.food);
            this.setState({
                myDishes: data.data.food,
                stop: false,
            })
        }
    }



    deleteFood = async (index) => {
        const { user } = this.props.auth0;
        const email = user.email;
        const idx = index;
        let foodURL = 'http://localhost:8000/';
        let data = await axios.get(`${foodURL}food/handleUsers?email=saadoundhirat93@gmail.com&index=${idx}`);
        this.setState({
            myDishes: data.data.food,
            stop: false,
        })
    }

    addFeedback = async (index) => {
        const { user } = this.props.auth0;
        const email = user.email;
        const idx = index;

    }

    changeFeedback = (e) => {
        e.preventDefault();
        this.setState({
            feedBack: e.target.value
        })
    }


    render() {
        console.log('im in my dishes');
        console.log(this.state.myDishes);
        return (
            <div>

                <Header />
                {/* <Button on onClick={this.componentDidMount}>SHOW MY CARDS</Button> */}
                <CardGroup>

                    {this.state.myDishes.map((item, index) => {

                        return (<div>

                            <Card >

                                <Card.Body style={{ width: '25rem' }}   >
                                    <Card.Title>  <p>{item.title}</p></Card.Title>
                                    <Card.Img variant="top" src={item.image} />

                                    <Form onSubmit={(event) => { this.addFeedback(event) }}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="text" placeholder="enter feedback" onChange={() => this.addFeedback(index)} />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                    <Button variant="primary" onClick={() => this.deleteFood(index)}>
                                        delete
                                    </Button>

                                </Card.Body>

                            </Card>


                        </div>)

                    })}



                </CardGroup>
                <Footer />
            </div>
        )
    }
}

export default withAuth0(Mydishes)
