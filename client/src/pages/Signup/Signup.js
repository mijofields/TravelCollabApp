import React, { Component } from 'react';
import axios from "axios"; // HTTP Library
// import { Redirect } from 'react-router-dom';
import './Signup.css';
import siteLogo from '../../images/navlogo.png';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            username: "",
            email: "",
            password: "",
            isAuthenticated: false
        };
    }

    componentDidMount = () => {
        sessionStorage.setItem("isAuthenticated", false);
    };

    handleChange = ({ target: { id, value } }) => this.setState({ [id]: value });

    handleSubmit = (event) => {
        event.preventDefault(); // stop browser from refreshing

        // send the entire over our Server

        console.log("Handle Submit: ", this.state);

        axios({
            url: "/signup",
            method: "POST",
            data: this.state
        })
            .then((response) => {
                this.setState({ isAuthenticated: true });
                sessionStorage.setItem("isAuthenticated", true); // logged in
                window.location.href = "/" // force reload so localStorage can be updated
                console.log("Response: ", response.data);
            })
            .catch((err) => {
                this.setState({ isAuthenticated: false });
                console.log("Error: ", err.response.data);
                sessionStorage.setItem("isAuthenticated", false); // logged in
            });            
        };

        goToSignin = (e) => {
            e.preventDefault();
            window.location.href='/signin'
        };

    render() {
        

        console.log("State: ", this.state);

        return (
           
            <div className="mdl-grid login-card">
            <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
              <div className="mdl-card__media login-card-img">
                <img src={siteLogo} alt="site-logo" border="0" />
              </div>      
              
               <div className="mdl-card__supporting-text">
                <form className="form-signin"
                    onSubmit={this.handleSubmit}>
                 
                <div className="mdl-textfield mdl-js-textfield">
                        <input className="mdl-textfield__input"
                            type="text"
                            required
                            placeholder="Name"
                            id="name"
                            value={this.state.value}
                            onChange={this.handleChange} />
                            <label className="mdl-textfield__label" htmlFor="name">Your name</label>
                    </div>
                    <div className="mdl-textfield mdl-js-textfield">
                        <input className="mdl-textfield__input"
                            type="text"
                            required
                            placeholder="User Name"
                            id="username"
                            value={this.state.value}
                            onChange={this.handleChange} />

                            <label className="mdl-textfield__label" htmlFor="username">Pick a username</label>
                    </div>
                    <div className="mdl-textfield mdl-js-textfield">
                        <input className="mdl-textfield__input"
                            type="email"
                            required
                            placeholder="email@email.com"
                            id="email"
                            value={this.state.value}
                            onChange={this.handleChange} />
                            <label className="mdl-textfield__label" htmlFor="email">Email</label>
                    </div>
                    <div className="mdl-textfield mdl-js-textfield">
                    <input className="mdl-textfield__input"
                           type="password"
                            required
                            placeholder="Password"
                            id="password"
                            value={this.state.value}
                            onChange={this.handleChange} />
                            <label className="mdl-textfield__label" htmlFor="password">Password</label>
                    </div>
                            
               <div>
               {/* <div className="g-signin2 align-self-center" data-onsuccess="onSignIn"
                  onClick={this.onSignIn}>            
               </div> */}
               <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" type="submit"
                    value="Register Now"
                    onClick={this.handleSubmit}> 
                    Register </button>
              
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
                    onClick={this.goToSignin}> 
                    Signin           
                </button>

               
               </div>
                 
                </form>
              </div>
            </div>
          </div>
        );
    }
}

export default Signup;