import React, { Component } from "react";
import "./Navbar.css";

class NavbarComponent extends Component {
      
  render() {
    let isAuthenticated = sessionStorage.getItem("isAuthenticated"); // get value of user state
    // console.log("isAuthenticated", typeof isAuthenticated);    

    return (
        <div className="mdl-layout__drawer">
                <span className="mdl-layout-title">Tools</span>
                <nav className="mdl-navigation">
                    <a className="mdl-navigation__link" href="">Itinerary</a>
                    <a className="mdl-navigation__link" href="">Split Expenses</a>
                    <a className="mdl-navigation__link" href="/currency-converter">Currency Converter</a>
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
