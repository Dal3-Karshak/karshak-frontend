import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
export class SearchCards extends Component {
    render() {
        return (
            <div>
                <CardGroup>

                    {this.props.SearchCards.map((item, idx) => {

                        return (<div>

                            <Card >

                                <Card.Body style={{ width: '25rem' }}   >
                                    <Card.Title>  <p>{item.title}</p></Card.Title>
                                    <Card.Img variant="top" src={item.image} />
                                
                                    <Button  variant="primary"  >
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
