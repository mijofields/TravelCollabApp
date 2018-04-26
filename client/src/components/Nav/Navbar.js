import React, { Component } from "react";
// import { Nav, NavItem, Navbar } from "react-bootstrap";
import Chat from '../Chat/Chat';
import Signin from '../../pages/Signin/Signin';
import "./Navbar.css";

class NavbarComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            chatComponent: false,
            signinComponent: false,
            friendComponent: false,
            isAuthenticated: false
        }
    }

    appendChat = (event) => {
        event.preventDefault();
        this.setState({ chatComponent: true })
    };

    appendSignin = (event) => {
        event.preventDefault();
        this.setState({ signinComponent: true })
    };

    appendFriend = (event) => {
        event.preventDefault();
        this.setState({ friendComponent: true })
    };
    
  // this.props.signOut



  render() {
    // let isAuthenticated = sessionStorage.getItem("isAuthenticated"); // get value of user state
    // console.log("isAuthenticated", typeof isAuthenticated);
    const { signinComponent, chatComponent, friendComponent, isAuthenticated} = this.state;

    if (signinComponent){ // if signinComponent is set to true append Signin Component
        return <Signin isAuthenticated={this.state.isAuthenticated} />;
            //TO DO GET STATE FROM SIGNIN PASS TO NAVBAR ISAUTHENTICATED
    }

    console.log("Nav State Authenticated? : ", this.state.isAuthenticated)

    return (

       
            <header class="mdl-layout__header">
                <div class="mdl-layout__header-row">
                    
                    <img class="center" src="images/long.png" />
        </div>
                    
    <div class="mdl-layout__tab-bar mdl-js-ripple-effect">
                        <a href="#fixed-tab-1" class="mdl-layout__tab is-active">Itinerary</a>
                        <a href="#fixed-tab-2" class="mdl-layout__tab">Expenses</a>
                        <a href="#fixed-tab-3" class="mdl-layout__tab">Chat</a>
                    </div>
  </header>
        
      

      
        
    );
  }
}

export default NavbarComponent;
