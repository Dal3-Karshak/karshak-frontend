import React, { Component } from 'react'
import Header from './Header';
import Home from './Home';
import Landing from './Landing';
import Footer from './Footer';
import Search from './Search'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';





export class App extends Component {
  constructor(props){
    super(props)
    this.state={
      myDishes:[],
    }
  }


  
  render() {
    return (
      <div>
        <Router>


          <Switch>
            <Route exact path="/">
              {this.props.auth0.isAuthenticated ? <Home /> : <Landing />}
            </Route>
            <Route exact path="/search">
              <Search myDishes={this.state.myDishes}/>
            </Route>
            <Route exact path="/mydishes">

            </Route>

          </Switch>


        </Router>


      </div>
    )
  }
}


export default withAuth0(App);

