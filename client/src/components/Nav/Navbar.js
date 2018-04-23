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
      
        <div className="mdl-layout__drawer">
                <span className="mdl-layout-title">Tools</span>
                <nav className="mdl-navigation">
                    <a className="mdl-navigation__link" href="">Itinerary</a>
                    <br/>
                    <a className="mdl-navigation__link" onClick={this.appendFriend} >Find Friend</a>
                    <br />
                    <a className="mdl-navigation__link" href="">All Friends</a>
                    <br/>
                    <a className="mdl-navigation__link" onClick={this.appendChat} > Chat</a>
                    <br/>
                        {isAuthenticated ? 
                            (
                                <a className="mdl-navigation__link" 
                                    href="/" 
                                    id="sign-out"
                                    onClick={this.props.signOut}>
                                    Sign Out</a>                                        
                            ) : (
                                <a className="mdl-navigation__link" 
                                    onClick={this.appendSignin}>
                                    Signin</a>                   
                            )}  
                </nav>
                </div>
    );
  }
}

export default NavbarComponent;
