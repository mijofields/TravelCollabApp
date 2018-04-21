import React, { Component } from "react";
// import { Nav, NavItem, Navbar } from "react-bootstrap";
import "./Navbar.css";

class NavbarComponent extends Component {
  // this.props.signOut
  render() {
    let isAuthenticated = sessionStorage.getItem("isAuthenticated"); // get value of user state
    // console.log("isAuthenticated", typeof isAuthenticated);

    return (
      
        <div className="mdl-layout__drawer">
                <span className="mdl-layout-title">Tools</span>
                <nav className="mdl-navigation">
                    <a className="mdl-navigation__link" href="">Itinerary</a>
                    <br/>
                    <a className="mdl-navigation__link" href="/friend">Find Friend</a>
                    <br />
                    <a className="mdl-navigation__link" href="">Split Expenses</a>
                    <br/>
                    <a className="mdl-navigation__link" href="/chat">Chat</a>
                        {isAuthenticated === "true" ? 
                            (
                                <a className="mdl-navigation__link" 
                                    href="/" 
                                    id="sign-out"
                                    onClick={this.props.signOut}>
                                    Sign Out</a>                                        
                            ) : (
                                <a className="mdl-navigation__link" 
                                    href="/signin">
                                    Signin</a>                   
                            )}  
                </nav>
                </div>
    );
  }
}

export default NavbarComponent;
