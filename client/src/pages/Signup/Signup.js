import React, { Component } from 'react';
import axios from "axios"; // HTTP Library
import './Signup.css';

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
                window.location.href = "/about" // force reload so localStorage can be updated
                console.log("Response: ", response.data);
            })
            .catch((err) => {
                this.setState({ isAuthenticated: false });
                console.log("Error: ", err.response.data);
                sessionStorage.setItem("isAuthenticated", false); // logged in
            });
    };

    render() {

        console.log("State: ", this.state);

        return (
            <div className="register">
                <div className="text-center">
                    <h1 className="h3 mb-3 font-weight-normal">Register</h1>

                    <form className="form-signin" onSubmit={this.handleSubmit}>

                        <label htmlFor="inputName" className="sr-only">Name:</label>
                        <input
                            type="text"
                            required
                            placeholder="Name"
                            className="form-control"
                            id="name"
                            value={this.state.value}
                            onChange={this.handleChange} />

                        <label htmlFor="inputUserName" className="sr-only"> User Name:</label>
                        <input
                            type="text"
                            required
                            placeholder="User Name"
                            className="form-control"
                            id="username"
                            value={this.state.value}
                            onChange={this.handleChange} />

                        <label htmlFor="inputEmail" className="sr-only">Email:</label>
                        <input
                            type="email"
                            required
                            placeholder="johndoe@email.com"
                            className="form-control"
                            id="email"
                            value={this.state.value}
                            onChange={this.handleChange} />

                        <label htmlFor="inputPassword" className="sr-only"> Password:</label>
                        <input
                            type="password"
                            required
                            placeholder="Password"
                            className="form-control"
                            id="password"
                            value={this.state.value}
                            onChange={this.handleChange} />

                        <input className="btn btn-lg btn-primary btn-block" type="submit"
                            value="Register Now"
                            onClick={this.handleSubmit}
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;