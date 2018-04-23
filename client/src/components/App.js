import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../components/Home';
import Register from '../components/register';
import ItineraryList from '../components/Itinerary';
import SplitExp from '../components/splitExp';
import CurrConverter from '../components/currConverter';
import ChatComp from '../components/chat';
import NavLogo from '../images/navlogo.png';
import Auth from '../authService';
import '../css/App.css';
import AddEvent from '../components/AddEvent';
import Cal from '../components/Calendar';


export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isAuthenticated: false
    }


    this.auth = new Auth();
  }


  render() {
    const isAuth = !this.state.isAuthenticated ?
    <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          {/* Title */}
          <img className="navlogo" src={NavLogo}/>
          {/* Add spacer, to align navigation to the right */}
          <div className="mdl-layout-spacer"></div>
          {/* Navigation. We hide it in small screens */}
          <nav className="mdl-navigation mdl-layout--large-screen-only">
            <Link to="/"><a class="mdl-navigation__link" href="">Login</a></Link>
          </nav>
        </div>
      </header> : <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            {/* Title */}
            <img className="navlogo" src={NavLogo}/>
            {/* Add spacer, to align navigation to the right */}
            <div className="mdl-layout-spacer"></div>
            {/* Navigation. We hide it in small screens */}
            <nav className="mdl-navigation mdl-layout--large-screen-only">
              <Link to="/login"><a class="mdl-navigation__link" href="">Logout</a></Link>
            </nav>
          </div>
        </header>

    return (
    <Router>
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        {isAuth}

        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Tools</span>
          <nav className="mdl-navigation">
            <Link to="/itinerary"><a className="mdl-navigation__link" href="">Itinerary</a></Link>
            <Link to="/splitExp"><a className="mdl-navigation__link" href="">Split Expenses</a></Link>
            <Link to="/currConverter"><a className="mdl-navigation__link" href="">Currency Converter</a></Link>
            <Link to="/chat"><a className="mdl-navigation__link" href="">Chat</a></Link>
          </nav>
        </div>
        <main className="mdl-layout__content main-layout">
          <div className="page-content">
          {/* Your content goes here */}
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/itinerary" component={ItineraryList} />
<<<<<<< HEAD
            <Route exact path="/splitExp" component={SplitExp} />
            <Route exact path="/currConverter" component={CurrConverter} />
            <Route exact path="/chat" component={ChatComp} />
=======
            <Route exact path="/event" component={AddEvent} />
            <Route exact path="/calendar" component={Cal} />
>>>>>>> 808a3fae6ffc57c719366095da60ecf8e207ee97
          </div>
        </main>
	  </div>
  </Router>
    )
  }
}
