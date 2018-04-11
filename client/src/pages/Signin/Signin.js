import React, { Component } from 'react';
import axios from "axios";
// import Signout from '../../pages/Signout/Signout.js';
// import UserGreeting from '../../components/Greetings/UserGreeting.js';
// import GuestGreeting from '../../components/Greetings/GuestGreeting.js';
// import Greeting from '../../components/Greeting';
import './Signin.css';
import { Redirect } from "react-router-dom";

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isLoggedIn: false
        };    
      }
    
      handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });
    
      handleSignin = (event) => {
          event.preventDefault();

          axios({
              url: "/signin",
              method: "POST",
              data: this.state
          })
          .then((response) => {              
              this.setState({ isLoggedIn: true });
              console.log("Response: ", response.data);
              
          })
          .catch((err) => {
              this.setState({ isLoggedIn: false });
              console.log("Error: ", err.response.data);              
          });
      };      
    
    render() {
        console.log("Sign In State: ", this.state);        

        if(this.state.isLoggedIn){
            return <Redirect to = "/about"/>;
        } else { 
            // (<Redirect to = "/signin"/>)
            console.log(" Not yet isLoggedIn");            
        }

        return (
            <div className="text-center">
              <h1 className="h3 mb-3 font-weight-normal">Login</h1>

                  <form className="form-signin" onSubmit={this.handleSignin}>

                    <label htmlFor="username" className="sr-only">username:</label>
                        <input 
                            type="text"
                            required
                            placeholder="username"  
                            className="form-control" 
                            name="username"
                            value={this.state.value} 
                            onChange={this.handleChange} />

                    <label htmlFor="password" className="sr-only"> Password:</label>
                        <input 
                            type="password"
                            required 
                            placeholder="Password"  
                            className="form-control" 
                            name="password"
                            value={this.state.value} 
                            onChange={this.handleChange}
                            />               

                    <input className="btn btn-lg btn-primary btn-block" type="submit" value="Login Now"/>
            </form>
        </div>
        );
    }
}


export default Signin;