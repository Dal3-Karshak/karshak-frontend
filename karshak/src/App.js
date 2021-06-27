import React, { Component } from 'react'
import Home from './Home';
import Landing from './Landing';
import Search from './Search'
import Mydishes from './Mydishes';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';





export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myDishes: [],
      email:''
    }
  }

  reciveData = (arr)=>{
    this.setState({
      myDishes:arr,
    })
    console.log('function is working')
    console.log('myData',this.state.myDishes)

  }

 


  render() {
    
    return (
      <div>
        <Router>

          <Switch>
            <Route exact path="/">
              {this.props.auth0.isAuthenticated ? <Home reciveData={this.reciveData} /> : <Landing />}
            </Route>
            <Route  path="/search">
              <Search myDishes={this.state.myDishes} />
            </Route>
            <Route path="/mydishes">
               {this.props.auth0.isAuthenticated &&<Mydishes />} 
            </Route>
            <Route  path="/logout">
            </Route>

          </Switch>


        </Router>


      </div>
    )
  }
}


export default withAuth0(App);

