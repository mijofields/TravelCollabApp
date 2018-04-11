import React, { Component } from 'react';
import axios from 'axios';
// import Signin from '../../pages/Signin/Signin';
// import Signup from '../../pages/Signup/Signup';
import './Navbar.css';


class Navbar extends Component {  
    // this.props.signOut
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false ,
            showSigninForm: false           
        }
    }
    handleLoginClick = (event) => {
        event.preventDefault();
        this.setState({
            showSigninForm: true
        });
      }
   
      handleLogoutClick = () => {
          axios({
              url: '/signout',
              method: 'GET',
              data: this.state
          })
          .then((res) => {
            this.setState({isLoggedIn: false});
          })
          .catch((err) => {
              console.log("handleLogoutClick Error: ", err)
          });       
      };

      handleSignin = (fields) => {

      }

    render() {
        console.log("Navbar State: ", this.state);

        let isAuthenticated = sessionStorage.getItem("isAuthenticated"); // get value of user state
               console.log("isAuthenticated", typeof isAuthenticated);
       
        return (           
                <nav className="navbar navbar-expand-md">
                 <div className="container" id="topNav">
                    <a className="navbar-brand"  href="/"> Wander Sum</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                   
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/about">About</a>
                                    </li>                                
                                    
                                    <li className="nav-item">
                                        
                                        
                                        { isAuthenticated === "true" 
                                            ? <a className="nav-link" href="/" onClick = {this.props.signOut}>Sign out</a> 
                                            : 
                                            <a className="nav-link" href="/signin">Login</a>
                                        }

                                    </li>

                                </ul>                
                            </div>
                    
                </div>
            </nav>


        );
    }
}

export default Navbar;