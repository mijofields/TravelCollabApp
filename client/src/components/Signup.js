import React, { Component } from 'react';
import axios from "axios"; // HTTP Library
import siteLogo from '../images/logo.png';
import {Button} from './Button';
import Itinerary from './Itinerary';
import '../css/Signup.css';

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

    // componentDidMount = () => {
    //     sessionStorage.setItem("isAuthenticated", false);
    // };

    handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

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
                // sessionStorage.setItem("isAuthenticated", true); // logged in
                // window.location.href = "/about" // force reload so localStorage can be updated
                console.log("Response: ", response.data);
            })
            .catch((err) => {
                this.setState({ isAuthenticated: false });
                console.log("Error: ", err);
                // sessionStorage.setItem("isAuthenticated", false); // logged in
            });
    };

    render() {

        console.log("Sign Up State: ", this.state); 
        if (this.state.isAuthenticated === true){
            return <Itinerary />
        }       

        return (
            <div className="mdl-grid login-card">
                <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
                    <div className="mdl-card__media login-card-img">
                        <img src={siteLogo} alt="site-logo" border="0" />
                    </div>
                        <div className="mdl-card__supporting-text">
                            <form>
                            <div className="mdl-textfield mdl-js-textfield">
                                <input className="mdl-textfield__input"
                                    type="text"
                                        required
                                        placeholder="Name"
                                        name="name"
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                />
                                    <label className="mdl-textfield__label" htmlFor="name">Name</label>
                            </div>
                            <div className="mdl-textfield mdl-js-textfield">
                                <input className="mdl-textfield__input"
                                    type="text"
                                        required
                                        placeholder="Username"
                                        name="username"
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                />
                                    <label className="mdl-textfield__label" htmlFor="name">Username</label>
                            </div>
                            <div className="mdl-textfield mdl-js-textfield">
                                <input className="mdl-textfield__input"
                                    type="text"
                                    required
                                    placeholder="Email"
                                    name="email"
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                />
                                    <label className="mdl-textfield__label" htmlFor="name">Email</label>
                            </div>
                            
                            <div className="mdl-textfield mdl-js-textfield">
                                <input className="mdl-textfield__input"
                                    type="text"
                                    required
                                    placeholder="Password"
                                    name="password"
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                />
                                    <label className="mdl-textfield__label" htmlFor="name">Password</label>
                            </div>
                                <div className="mdl-card__actions">
                                <Button                 
                                    onClick={this.handleSubmit}>
                                    Submit </Button>                                
                                </div>
                                            
                        </form>
                    </div>
                </div>
            </div>


        );
    }
}

export default Signup;