import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SearchCards from './SearchCards';
import Header from './Header';
import './Search.css';

import axios from 'axios';

export class Search extends Component {


    constructor(props){
        super(props);
        this.state={
        searchCards:[],
        showCards:false
        }
            
    }



    getFood= async(e)=>{ 
        e.preventDefault();
        const query=e.target.query.value;
        const cuisine=e.target.cusion.value;
        console.log(cuisine);
        let foodURL='http://localhost:8000/';
        let url =`${foodURL}food/getfood?foodName=${query}&cuisine=${cuisine}`
        let newData=await axios.get(url);
        this.setState({
            searchCards:newData.data.results,
            showCards:true,
        })
        console.log(this.state.searchCards);
    }



    render() {
        return (
            <div>
                <Header/>
                <p>search page</p>
                <div className='forms'>
                    <Form className='searchForm' onSubmit={(e)=>this.getFood(e)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Search by Name</Form.Label>
                            <Form.Control type="text" placeholder="enter plate name" name='query' />

                        </Form.Group>
                        <Form.Group controlId="formBasicSelect">
                            <Form.Label>search by cusion</Form.Label>
                            <Form.Control as="select" name='cusion' >
                            <option value="">choose a cuisine </option>
                                <option value="African">African </option>
                                <option value="American">American</option>
                                <option value="British">British</option>
                                <option value="Cajun">Cajun</option>
                                <option value="Caribbean">Caribbean</option>
                                <option value="Chinese">Chinese</option>
                                <option value="Eastern European">Eastern European</option>
                                <option value="European">European</option>
                                <option value="French">French</option>
                                <option value="German">German</option>
                                <option value="Greek">Greek</option>
                                <option value="Indian">Indian</option>
                                <option value="Italian">Italian</option>
                                <option value="Japanese">Japanese</option>
                                <option value="Korean">Korean</option>
                                <option value="Latin American">Latin American</option>
                                <option value="Mediterranean">Mediterranean</option>
                                <option value="Mexican">Mexican</option>
                                <option value="Middle Eastern">Middle Eastern</option>
                                <option value="Nordic">Nordic</option>
                                <option value="Southern">Southern</option>
                                <option value="Spanish">Spanish</option>
                                <option value="Thai">Thai</option>
                                <option value="Vietnamese">Vietnamese</option>

                            </Form.Control>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
               
                </div>
                {this.state.showCards&& <SearchCards searchCards={this.state.searchCards}/> }
                {/* <SearchCards searchCards={this.state.searchCards}  /> */}

            </div>
        )
    }
}

export default Search
