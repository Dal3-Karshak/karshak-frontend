import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Modal from 'react-bootstrap/Modal';
import tic from './assest/images/tic.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/SearchCards.css'
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
        let foodURL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8000/';
        let url = `${foodURL}food/addFoodDishes?email=${email}`;
        const addDish = await axios.post(url, dishData);
        this.setState({
            showmodal: true,
        });
        this.props.changeshow(index)
    }
    handleClose = () => {
        this.setState({
            showmodal: false,
        })
    }
    render() {
        return (
            <div>
                <CardGroup className='searchcardgroup'>
                    {this.props.searchCards.map((item, index) => {
                        return (
                        <div>
                            <Card className='searchcard' >
                                <Card.Body  >
                                    <Card.Title className='searchcardtitle'>  {item.title}</Card.Title>
                                    <Card.Img variant="top" src={item.image} />
                                    <Button variant="primary" onClick={() => this.addToMyDishes(index)} className='searchCardsButton' disabled={item.show}  >
                                        add to my dishes
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>)
                    })}
                </CardGroup>
                <Modal show={this.state.showmodal} onHide={this.handleClose} >
                    <Modal.Body className='searchModal'>
                        {/* <Modal.Img src={tic} alt='okay' /> */}
                        <img className='cardsearchtic' src={tic} alt='okay' />
                        <p className='cardmodaltext' >Dish added to your favorites dishes !</p>
                    </Modal.Body>
                    <Modal.Footer className='modalsearchbutton'>
                        <Button className='modalsearchbutton' variant="secondary" onClick={this.handleClose}>
                            OK
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
export default withAuth0(SearchCards);