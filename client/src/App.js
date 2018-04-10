import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';
import Signup from './pages/Signup/Signup.js';
import Signin from './pages/Signin/Signin.js';
import Nav from './components/Nav/Navbar.js';
import Footer from './components/Footer/Footer.js';
import Jumbotron from './components/Jumbotron/Jumbotron.js';

// Redux (Complicated)
// Session Store / Local Storage
// props

// isAuthenticated = false / true

// Possible Cases
  // #1 Display signout button, only when user is logged in
  // #1 When user signin or signup, set isAuthenticated to true
  // #2 Set isAuthenticated to false on signout click
  // #4 isAuthenticated is equal to false on init / onload



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
          <Footer />
      </div>
 
        
    </Router>
    );
  }
}

export default App;
