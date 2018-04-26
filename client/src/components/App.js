import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Register from '../components/register';
import ItineraryList from '../components/Itinerary';
import WanderSum from './WanderSum';
import Home from '../components/Home';
import Login from '../components/login';
import SplitExp from '../components/splitExp';
import CurrConverter from '../components/currConverter';
import ChatComp from '../components/chat';
import NavLogo from '../images/navlogo.png';
import Auth from '../authService';
import '../css/App.css';


export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isAuthenticated: false,
      user: this.props.user
    }

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.auth = new Auth();
    this.logout = this.logout.bind(this);
  }

  handleLoginSubmit(username, password) {
      this.auth.login(username, password)
        .then((res) => {
          // console.log(res)
          console.log(this.props)
          this.setState({user: res.user.user.username, isAuthenticated: true})
          console.log(res.user.user.username)
          console.log(this.state)
        })
  }

  logout(e) {
    e.preventDefault();
    this.auth.logout();
    this.setState({isAuthenticated: false, user: ""})
  }


  render() {
    console.log("APP.JS: ", this.state);
    
    const isAuth = !this.state.isAuthenticated ?
    <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          {/* Title */}
          <img className="navlogo" src={NavLogo} alt="logo" />
          {/* Add spacer, to align navigation to the right */}
          <div className="mdl-layout-spacer"></div>
          {/* Navigation. We hide it in small screens */}
          <nav className="mdl-navigation mdl-layout--large-screen-only">
            <Link to="/login"><a class="mdl-navigation__link" href="">Login</a></Link>
          </nav>
        </div>
      </header> : <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            {/* Title */}
            <img className="navlogo" src={NavLogo} alt="logo" />
            {/* Add spacer, to align navigation to the right */}
            <div className="mdl-layout-spacer"></div>
            {/* Navigation. We hide it in small screens */}
            <nav className="mdl-navigation mdl-layout--large-screen-only">
              <a className="mdl-navigation__link" href="/signout" onClick={this.logout}>Logout</a>
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
                  <Link to="/wanderSum"><a className="mdl-navigation__link" href="">WanderSum</a></Link>
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
                  <Route path="/login" render={(props) => <Login {...props} login={this.handleLoginSubmit}/>} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/itinerary" render = {(props) => <ItineraryList {...props} user={this.state.user}/>} />
                  <Route exact path="/wanderSum" component={WanderSum} />
                  <Route exact path="/splitExp" component={SplitExp} />
                  <Route exact path="/currConverter" component={CurrConverter} />
                  <Route exact path="/chat" component={ChatComp} />
                </div>
              </main>
          </div>
        </Router>
      )
  }
}