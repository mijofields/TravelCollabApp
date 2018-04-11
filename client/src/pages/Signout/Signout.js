import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";
// import Signin from '../../pages/Signin/Signin.js';

class Signout extends Component {
    constructor(props){
        super(props);
        this.state = { isSignIn: true };
    }

    handleSignOut = (event) => {
        event.preventDefault(); // stop browser from refreshing

        console.log("Handle Submit: ", this.state);        

        axios({
            url: "/signout",
            method: "GET",
            data: this.state
        })
        .then((response) => {            
            console.log("Response: ", response.data); 
            this.setState({ isSignedIn: false })
            return <Redirect to = "/"/>;           
        })
        .catch((err) => {           
            console.log("Signout Error: ", err.response.data);            
        });
    };  
   
    render() {
      
       
        return (
            <li className="nav-item">
            <Link className="nav-link" 
            to="/signout"
            onClick={this.handleSignout}  
            >
            Log Out</Link>                                    
        </li> 

        );
    }
}

export default Signout;