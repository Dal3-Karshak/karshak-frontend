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
            tried: false,
            indexNum: 0,
            title: '',
            image: '',
            id: '',
        }
    }

    componentDidMount = async () => {
        if (this.props.auth0.isAuthenticated) {
            const { user } = this.props.auth0;

            const email = user.email;
            console.log(email);
            let foodURL = 'http://localhost:8000/';
            let data = await axios.get(`${foodURL}food/handleUsers?email=${email}`);
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
        // http://localhost:8000/food/deleteFoodDishes?email=saadoundhirat93@gmail.com&index=4
        let data = await axios.delete(`${foodURL}food/deleteFoodDishes?email=${email}&index=${idx}`);

        console.log("response", data.data)
        this.setState({
            myDishes: data.data.food,
        })
    }

    updateMydishes = async (event) => {
        event.preventDefault();
        const mydishData = {
            feedback: event.target.feedBack.value,
            tried: event.target.checkbox.checked,
            email: this.props.auth0.user.email,
            image: this.state.image,
            id: this.state.id,
            title:this.state.title,

        }
        console.log('my dish data ', mydishData);
        console.log('indexNumber : ', this.state.indexNum);
        // let foodURL = 'http://localhost:8000/';

        // const data= await axios.put(`${foodURL}food/updateMydishes?${this.state.indexNum}`,mydishData)
        // this.setState({
        //     myDishes: data.data,
        // })
    };

    showUpdateForm = (idx) => {

        this.setState({
            // show:true,
            indexNum: idx,
            title: this.state.myDishes[idx].title,
            image: this.state.myDishes[idx].image,
            id: this.state.myDishes[idx].id,




        })
    }




    changeFeedback = (e) => {
        this.setState({
            feedBack: e.target.value

        })
    }
    changeCheckbox = (e) => {
        this.setState({
            tried: e.target.value

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

                                    <Form onSubmit={(event) => { this.updateMydishes(event) }}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="text" placeholder="enter feedback" name='feedBack' onChange={(e) => this.changeFeedback(e)} value={this.state.feedBack} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="checkbox" placeholder="enter feedback" name='checkbox' onChange={(e) => this.changeCheckbox(e)} value={this.state.tried} />
                                        </Form.Group>
                                        <Button variant="primary" type="submit" onClick={() => this.showUpdateForm(index)}>
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
