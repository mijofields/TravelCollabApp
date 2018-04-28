import React, { Component } from 'react';

class Greeting extends Component {
 
  render (){
    UserGreeting = (props) => {
      return <h1>Welcome back!</h1>;
    }
    GuestGreeting = (props) => {
      return <h1>Please sign in</h1>;
    }

    const isAuthenticated = props.isAuthenticated;
    if (isAuthenticated) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;

   
  }
}
    
export default Greeting;