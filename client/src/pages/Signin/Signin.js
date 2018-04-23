import React, { Component } from 'react';
import axios from "axios";
import './Signin.css';
import Chat from '../../components/Chat/Chat';
// import API from '../../utils/API';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isAuthenticated: props.false
        };    
      }
    
      handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

    
      handleSubmit = (event) => {
          event.preventDefault();

          axios({
              url: "/api/user/signin",
              method: "POST",
              data: this.state
          })
          .then((response) => {              
              this.setState({
                    username: this.state.username,
                    password: this.state.password, 
                    isAuthenticated: true                  
                });         
              console.log("Response: ", response.data); 
                           
          })
          .catch((err) => {
              this.setState({ isAuthenticated: false });
              console.log("Error: ", err);
            //   sessionStorage.setItem("isAuthenticated", false); // logged in
          });
        
      };

      submitMessage = (username) => this.setState({ username });
      //declared from chat component to get username from here and set state username in chat component

     
         
    render() {
        console.log(this.state)
        const { isAuthenticated } = this.state;

            if (isAuthenticated) {
                // <ChildComponent {...this.props, update: this.update} />
                return <Chat username={this.state.username} />;
                }               
                 
        return (
            <div className="text-center">
              <h1 className="h3 mb-3 font-weight-normal">Login</h1>

                  <form className="form-signin" 
                        onSubmit={this.handleSubmit}>

                    <label htmlFor="username" className="sr-only">username:</label>
                        <input 
                            type="text" 
                            placeholder="username"  
                            className="form-control" 
                            name="username"
                            value={this.state.value} 
                            onChange={this.handleChange} />

                    <label htmlFor="password" className="sr-only"> Password:</label>
                        <input 
                            type="password" 
                            placeholder="Password"  
                            className="form-control" 
                            name="password"
                            value={this.state.value} 
                            onChange={this.handleChange} />               

                  <input className="btn btn-lg btn-primary btn-block" type="submit" value="Login Now" />
            </form>
        </div>
        );
    }
}


export default Signin;