import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';
import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';
import Signup from './pages/Signup/Signup.js';
import Signin from './pages/Signin/Signin.js';
import Signout from './pages/Signout/Signout.js';
import Nav from './components/Nav/Navbar.js';
import Footer from './components/Footer/Footer.js';
import Jumbotron from './components/Jumbotron/Jumbotron.js';

class App extends Component {

  // constructor() {
  //   super();

  //   this.state = {
  //     isAuthenticated: false // on init / onload
  //   };

  // };

  // componentDidMount 

  signOut = () => {
    sessionStorage.setItem("isAuthenticated", false);
    window.location.href = "/"; // on signout, send to home page
  };

  render() {
    return (
    <Router>
 
      <div>
      <Nav signOut = {this.signOut}/> 
        <Jumbotron />
        {/* <Signup /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signout" component={Signout} />
          <Footer />
      </div>
 
        
    </Router>
    );
  }
}

export default App;
