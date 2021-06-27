import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';


export class SearchCards extends Component {

    addToMyDishes = async (index) => {
        const { user, isAuthenticated } = this.props.auth0;
        const email = user.email
        // const email = this.props.auth0.user.email;

        const title = this.props.searchCards[index].title;
        const image = this.props.searchCards[index].image;
        const idNum = this.props.searchCards[index].id;
        console.log(title, image, idNum, email);
        const dishData = {
            title:title,
            image:image,
            id:idNum,
            feedback:"",
            tried:false,
        }
        console.log(dishData);
        let foodURL = 'http://localhost:8000/';
        let url = `${foodURL}food/addFoodDishes?email=${email}`;
        const addDish = await axios.post(url , dishData);
        console.log(addDish.data)

    }
    render() {

        return (
            <div>
                <CardGroup>

                    {this.props.searchCards.map((item, index) => {

                        return (<div>

                            <Card >

                                <Card.Body style={{ width: '25rem' }}   >
                                    <Card.Title>  <p>{item.title}</p></Card.Title>
                                    <Card.Img variant="top" src={item.image} />
                                    <Button variant="primary" onClick={() => this.addToMyDishes(index)}  >
                                        add to my dishes
                                    </Button>


                                </Card.Body>

                            </Card>


                        </div>)

                    })}



                </CardGroup>
            </div>
        )
    }
}

export default withAuth0(SearchCards);
