import React, { Component } from 'react';
import axios from "axios";
import './Signin.css';
import siteLogo from '../../images/navlogo.png';
//  const {google} = require('googleapis');

//  const OAuth2Client = google.auth.OAuth2;
//  const client = new OAuth2Client("73207592746-ca4ofr6v2ch7i9duka50i062pqseq1qb.apps.googleusercontent.com");


class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isAuthenticated: false,
            googleSignin: false
        };    
      }

      componentDidMount = () => {
          sessionStorage.setItem("isAuthenticated", false);
      };
    
      handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

    
      handleSubmit = (event) => {
          event.preventDefault();

          axios({
              url: "/signin",
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

        //    onSignIn = (googleUser) => {
        //         var profile = googleUser.getBasicProfile();
        //         this.setState({ googleSignin: true })
        //         console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        //         console.log('Name: ' + profile.getName());
        //         console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
        //     }
        
      };
    
    render() {
        console.log("State: ", this.state);        

        // if(this.state.isAuthenticated){
        //     return <Redirect to = "/about"/>;
        // } else{ 
        //     // (<Redirect to = "/"/>)
        //     console.log(" Not yet authenticated");
            
        // }
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
                           name="username"
                           required
                           value={this.state.value}
                           onChange={this.handleChange}/>
                         <label className="mdl-textfield__label" htmlFor="username">Username</label>
                 </div>
                 <div className="mdl-textfield mdl-js-textfield">
                   <input className="mdl-textfield__input"
                          type="password"
                          name="password"
                          required
                          value={this.state.value} 
                          onChange={this.handleChange}/>
                        <label className="mdl-textfield__label" htmlFor="password">Password</label>
                </div>
                            
               <div>
               {/* <div className="g-signin2 align-self-center" data-onsuccess="onSignIn"
                  onClick={this.onSignIn}>            
               </div> */}
               <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
                 </div>
               
                 
                </form>
              </div>
            </div>
          </div>
        );
    }
}


export default Signin;