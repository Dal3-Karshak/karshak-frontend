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
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/style/Mydishes.css';

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
            let foodURL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8000/';
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
        let foodURL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8000/';
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
        let foodURL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8000/';
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
        let foodURL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8000/';
        let URL = `${foodURL}food/getFoodInfo?id=${id}`;
        const ingr = await axios.get(URL);
        console.log(ingr.data.ingredients);
        this.setState({
            recepe: ingr.data.ingredients,
            show: true,
        })
        console.log('my recepe', this.state.recepe)
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
            <div className='maindiv'>
                <Header />
                {/* <Button on onClick={this.componentDidMount}>SHOW MY CARDS</Button> */}
                <h1 className='welcome-mydish'>Welcome {this.props.auth0.user.name}</h1>
                {/* <p className='qoute'>" I'm not hungry. but I'm bored. therefore, I shall EAT "</p> */}
                {this.state.myDishes.length ? (<CardGroup className='cardGroup'>
                    {this.state.myDishes.map((item, index) => {
                        return (<div >
                            <Card key={index} className='card'>
                                <Card.Body style={{ width: '25rem' }}   >
                                    <Card.Title className='cardName'>  {item.title}</Card.Title>
                                    <Card.Img className='cardimg' variant="top" src={item.image} onClick={() => this.openModel(item.id)} />
                                    <Form onSubmit={(event) => { this.updateMydishes(event) }}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control className='notes' type="text" placeholder={`notes : ${this.state.myDishes[index].feedback}`} name='feedBack' onChange={(e) => this.changeFeedback(e)} value={this.state.myDishes[index].feedBack} />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail" className='formGroup-checkbox'>
                                            <label className='checkbox-label'>tried it before </label>
                                            <Form.Check className='formcheck'  type="checkbox" name='checkbox' onChange={(e) => this.changeCheckbox(e)} value={this.state.myDishes[index].tried} defaultChecked={this.state.myDishes[index].tried} />
                                        </Form.Group>
                                        <div className='buttonsmydishes'>
                                            <Button className='submit' variant="primary" type="submit" onClick={() => this.showUpdateForm(index)}>
                                                Submit
                                            </Button>
                                            <Button className='delete' variant="primary" onClick={() => this.deleteFood(index)}>
                                                delete
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </div>)
                    })}
                </CardGroup>) : <p className='warning'>Please add some dishes first !!!<br></br>
                    go to <a href="./search">Search</a> </p>}
                <Footer />
                <Modal show={this.state.show} onHide={this.handleClose} >
                    <Modal.Header closeButton className='ingredents' style={{border:'none'}}>
                        <Modal.Title>Ingrediants:</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='ingredents'style={{border:'none'}}>
                        <ListGroup className='ingredents'>
                            {this.state.recepe.map((item, idx) => {
                                return (
                                    <div>
                                        <ListGroup.Item className='ingredents'>{item.name}</ListGroup.Item>
                                    </div>
                                )
                            })}
                        </ListGroup>
                    </Modal.Body>
                    <Modal.Footer className='ingredents'style={{border:'150px ' }}>
                        <Button className='closebutton-ingModal' variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
export default withAuth0(Mydishes)