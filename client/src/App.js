import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './login';
import Register from './register';
import NavLogo from './images/navlogo.png'
import './App.css';


export default class App extends React.Component {
  render() {
    return (
    <Router>
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header className="mdl-layout__header">
              <div className="mdl-layout__header-row">
                {/* Title */}
                <img className="navlogo" src={NavLogo}/>
                {/* Add spacer, to align navigation to the right */}
                <div className="mdl-layout-spacer"></div>
                {/* Navigation. We hide it in small screens */}
                <nav className="mdl-navigation mdl-layout--large-screen-only">
                </nav>
              </div>
            </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Tools</span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="">Itinerary</a>
            <a className="mdl-navigation__link" href="">Split Expenses</a>
            <a className="mdl-navigation__link" href="">Currency Converter</a>
            <a className="mdl-navigation__link" href="">Bucket List</a>
          </nav>
        </div>
        <main className="mdl-layout__content main-layout">
          <div className="page-content">
          {/* Your content goes here */}
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
          </div>
        </main>
	  </div>
  </Router>
    )
  }
}
