import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            username: "",
            email: "",
            password: ""
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({
            name: event.target.name,
            username: event.target.username,
            email: event.target.email,
            password: event.target.password
        });
      };
    
      handleSubmit(event) {
        this.setState({
            name: event.target.name,
            username: event.target.username,
            email: event.target.email,
            password: event.target.password
        });
      };
    
    render() {
        return (
            <div className="text-center">
              <h1 className="h3 mb-3 font-weight-normal">Login</h1>

                  <form class="form-signin" onSubmit={this.handleSubmit}>

                    <label for="inputEmail" className="sr-only">Email:</label>
                        <input type="email" placeholder="johndoe@email.com"  className="form-control" id="inputEmail"
                        value={this.state.value} 
                        onChange={this.handleChange} />

                    <label for="inputPassword" className="sr-only"> Password:</label>
                        <input type="password" placeholder="Password"  className="form-control" id="inputPassword"
                        value={this.state.value} 
                        onChange={this.handleChange} />               

                  <input class="btn btn-lg btn-primary btn-block" type="submit" value="Login Now" />
            </form>
        </div>
        );
    }
}


export default Login;