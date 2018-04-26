import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../components/Home';
import Register from '../components/register';
import ItineraryList from '../components/Itinerary';
import SplitExp from '../components/splitExp';
import CurrConverter from '../components/currConverter';
import Chat from '../components/chat';
import Signin from '../components/login';
import Friends from '../components/Friends/Friends';
import NavLogo from '../images/long.png';
import Auth from '../authService';
import '../css/App.css';
import AddEvent from '../components/AddEvent';
import Cal from '../components/Calendar';
import WanderSum from '../components/wanderSum';



export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isAuthenticated: false,
      user: this.props.user
    }

    this.auth = new Auth();
  }

  signinClick = () => {
    this.setState({ click: true })
    return <ItineraryList />
  }

  signOut = () => {
    sessionStorage.setItem("isAuthenticated", false);
    window.location.href = "/"; // on signout, send to home page
  }

  iteneraryClick = () => this.setState({ click: true });
  splitExpenseClick = () => this.setState({ click: true });
  calendarClick = () => this.setState({ click: true });
  chatClick = () => this.setState({ click: true });
  tripClick = () => this.setState({ click: true });

  findFriendClick = (event) => {
    event.preventDefault();
    this.setState({ friendsClick: true
    });
  }




  render() {
    console.log('CLICK FRIEND COMPONENT: ', this.state.friendsClick)

     const isAuth = !this.state.isAuthenticated ?
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            {/* Title */}
            <img className="center" src={NavLogo} alt="logo"/>
            {/* Add spacer, to align navigation to the right */}
            {/* <div className="mdl-layout-spacer"></div> */}
            {/* Navigation. We hide it in small screens */}
            <nav className="mdl-navigation mdl-layout--large-screen-only">
             <a className="mdl-layout__tab"
                onClick={this.signinClick} >
                Login</a>
            </nav>
          </div>
      </header> : <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            {/* Title */}
            <img className="navlogo" src={NavLogo} alt="logo"/>
            {/* Add spacer, to align navigation to the right */}
            {/* <div className="mdl-layout-spacer"></div> */}
            {/* Navigation. We hide it in small screens */}
            <nav className="mdl-navigation mdl-layout--large-screen-only">
             <a className="mdl-layout__tab" href="/signout">Logout</a>
            </nav>
          </div>
        </header>

    return (

    <Router>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs">
        {isAuth}

          <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
              <div class="mdl-layout__tab-bar mdl-js-ripple-effect">
                <a href="/itinerary" class="mdl-layout__tab is-active" onClick={this.iteneraryClick}>Itinerary</a>
                <a href="/splitExp" class="mdl-layout__tab" onClick={this.splitExpenseClick}>Expenses</a>
                <a href="/chat" class="mdl-layout__tab" onClick={this.chatClick}>Chat</a>
                <a href="/event" class="mdl-layout__tab" onClick={this.tripClick}>New Trip</a>
                <a href='/wanderSum' class="mdl-layout__tab">WanderSum</a>
              </div>
          </div>
        </header>
        <main className="mdl-layout__content main-layout">
          <div className="page-content">
          {/* Your content goes here */}
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/itinerary" component={ItineraryList} />
            <Route exact path="/splitExp" component={SplitExp} />
            <Route exact path="/currConverter" component={CurrConverter} />
            <Route exact path="/chat" component={Chat} />
            <Route exact path="/event" component={AddEvent} />
            <Route exact path="/wanderSum" component={WanderSum} />
            {/* render={() => {
								  <AddEvent {...props} user={this.state.user}/>
								  }} /> */}
            {/* <Route exact path="/event" component={AddEvent} /> */}
            <Route exact path="/calendar" component={Cal} />
            <Route exact path="/friends" component={Friends} />


          </div>
        </main>
	  </div>
  </Router>
    )
  }
}
