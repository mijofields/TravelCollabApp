import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';
import Register from './pages/Register/Register.js';
import Login from './pages/Login/Login.js';
import Nav from './components/Nav/Navbar.js';
import Footer from './components/Footer/Footer.js';
import Jumbotron from './components/Jumbotron/Jumbotron.js';

class App extends Component {
  render() {
    return (
    <Router>
      <div>       
        <Nav />
        <Jumbotron />
        <Register />
        <Login />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        <Footer />
      </div>      
    </Router>
    );
  }
}

export default App;
