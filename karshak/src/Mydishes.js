import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

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
            recepe: [],
            show: false,
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
            title: this.state.title,
            index: this.state.indexNum,
        }
        console.log('my dish data ', mydishData);
        let foodURL = 'http://localhost:8000/';
        let URL = `${foodURL}food/updateFoodDishes`
        axios.put(URL, mydishData)
            .then(result => {
                this.setState({
                    myDishes: result.data.food
                })
            })
            .catch(err => {
                console.log("Bad req")
            })
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


    openModel = async (idnum) => {
        const id = idnum;
        console.log(id);
        let foodURL = 'http://localhost:8000/';
        let URL = `${foodURL}food/getFoodInfo?id=${id}`;
        const ingr = await axios.get(URL);
        console.log(ingr.data.ingredients);
        this.setState({
            recepe: ingr.data.ingredients,
            show:true,
        })
        console.log('my recepe',this.state.recepe)
    }

  

    handleClose = () => {
        this.setState({
            show: false,
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

                            <Card key={index}>
                                <Card.Body style={{ width: '25rem' }}   >
                                    <Card.Title>  <p>{item.title}</p></Card.Title>
                                    <Card.Img variant="top" src={item.image} onClick={() => this.openModel(item.id)} />

                                    <Form onSubmit={(event) => { this.updateMydishes(event) }}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="text" placeholder={`notes : ${this.state.myDishes[index].feedback}`} name='feedBack' onChange={(e) => this.changeFeedback(e)} value={this.state.myDishes[index].feedBack} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="checkbox" name='checkbox' onChange={(e) => this.changeCheckbox(e)} value={this.state.myDishes[index].tried} defaultChecked={this.state.myDishes[index].tried} />
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
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>ingrediants</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <ListGroup>

                            {this.state.recepe.map((item,idx)=>{
                                return(
                                    <div>
                                    <ListGroup.Item>{item.name}</ListGroup.Item>

                                    </div>
                                )

                            })}
                           
                        </ListGroup>



                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                      
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default withAuth0(Mydishes)
