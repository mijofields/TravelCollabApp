import React, { Component } from 'react';
import axios from 'axios';
import Signin from '../../pages/Signin/Signin';
// import Signup from '../../pages/Signup/Signup';
import './Navbar.css';

function LoginBtn(props) {
    return (
        <li className="nav-item">
            <a className="nav-link" type="btn btn-default" onClick={props.onClick}>Login </a>
        </li>
    );
  };
  
  function LogoutBtn(props) {
    return (
        <li className="nav-item">
            <a className="nav-link" type="btn btn-default" onClick={props.onClick}> Logout </a>
        </li>
    );
  };

class Navbar extends Component {  
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

        const isLoggedIn = this.state.isLoggedIn;
    
        const button = isLoggedIn ? (
          <LogoutBtn onClick={this.handleLogoutClick} />
        ) : (
          <LoginBtn onClick={this.handleLoginClick} />
        );
       
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
                                    
                                    {this.state.showSigninForm ? <Signin isLoggedIn={isLoggedIn} /> : null } 
                                    {button}

                                </ul>                
                            </div>
                    </div>
                </nav>
           

        );
    }
}

export default Navbar;