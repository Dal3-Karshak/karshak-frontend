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
  render() {
    return (
      <div>
          {/* <Router>
       
            
              <Switch>
                <Route exact path="/">
                  {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
                  {/* {this.props.auth0.isAuthenticated ?  <Home/> : <Landing/>} */}
                {/* </Route>
                <Route exact path="/search">
                  {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
                  {/* <Footer/>
                </Route>
                <Route exact path="/mydishes">
                  {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
{/*                 
                </Route>
              
              </Switch>
           
        
        </Router> */} 


        < Search />
      </div>
    )
  }
}

export default withAuth0(App);

