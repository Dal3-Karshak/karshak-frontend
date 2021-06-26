import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export class SearchCards extends Component {

    addToMyDishes = async(item) =>{
    const title= item.title;
    const image= item.image;
    const idNum=item.id;
    let foodURL='http://localhost:8000/';
    let url =`${foodURL}food/addinfo/?title=${title}&image=${image}&idNum=${idNum}`
    const addDish=await axios.post(url);
    this.props.myDishes=addDish;
        
    }
    render() {
        return (
            <div>
                <CardGroup>

                    {this.props.searchCards.map((item, idx) => {

                        return (<div>

                            <Card >

                                <Card.Body style={{ width: '25rem' }}   >
                                    <Card.Title>  <p>{item.title}</p></Card.Title>
                                    <Card.Img variant="top" src={item.image} />
                                
                                    <Button  variant="primary" onClick ={this.addToMyDishes(item)}  >
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

export default SearchCards
