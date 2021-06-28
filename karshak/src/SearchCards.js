import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Modal from 'react-bootstrap/Modal';
import tic from './assest/images/tic.png';

export class SearchCards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showmodal: false,
        }
    }

    addToMyDishes = async (index) => {
        const { user } = this.props.auth0;
        const email = user.email
        // const email = this.props.auth0.user.email;

        const title = this.props.searchCards[index].title;
        const image = this.props.searchCards[index].image;
        const idNum = this.props.searchCards[index].id;
        console.log(title, image, idNum, email);
        const dishData = {
            title: title,
            image: image,
            id: idNum,
            feedback: "",
            tried: false,

        }
        console.log(dishData);
        let foodURL = 'http://localhost:8000/';
        let url = `${foodURL}food/addFoodDishes?email=${email}`;
        const addDish = await axios.post(url, dishData);

        this.setState({
            showmodal: true,
        })
    }



    handleClose = () => {
        this.setState({
            showmodal: false,
        })
    }
    render() {

        return (
            <div>
                <CardGroup>

                    {this.props.searchCards.map((item, index) => {

                        return (
                        <div>
                            <Card >
                                <Card.Body style={{ width: '25rem' }}   >
                                    <Card.Title>  <p>{item.title}</p></Card.Title>
                                    <Card.Img variant="top" src={item.image} />
                                    {item.show && <Button>delete</Button>}
                                    <Button variant="primary" onClick={() => this.addToMyDishes(index)} >
                                        add to my dishes
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>)
                    })}



                </CardGroup>
                <Modal show={this.state.showmodal} onHide={this.handleClose}>
                    <Modal.Body>
                        {/* <Modal.Img src={tic} alt='okay' /> */}
                        <img src={tic} alt='okay' />
                        <p>dish added to your favorites dishes !!!</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            OK
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default withAuth0(SearchCards);
