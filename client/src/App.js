import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import io from "socket.io-client";
import Layout from "./pages/Layout/Layout.js";
import About from "./pages/About/About.js";
import Signup from "./pages/Signup/Signup.js";
import Signin from "./pages/Signin/Signin.js";
import Nav from "./components/Nav/Navbar.js";
// import Footer from "./components/Footer/Footer.js";
// import Jumbotron from "./components/Jumbotron/Jumbotron.js";
import Chat from "./components/Chat/Chat";
// import './App.css';

class App extends Component {

  signOut = () => {
    sessionStorage.setItem("isAuthenticated", false);
    window.location.href = "/signin"; // on signout, send to home page
  };
 
  render() {
    return (
      <Router>
        <div className="main-container">        
          <Nav signOut={this.signOut} />
            <Route exact path="/" component={Layout} />
            <Route exact path="/about" component={About} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/chat" component={Chat} />
            <Route exact path="/signin" component={Signin} />
          
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
