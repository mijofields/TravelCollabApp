import React from 'react';
import Auth from '../authService';


export default class Home extends React.Component {
  constructor(props) {
    super(props)


    this.auth = new Auth();
  }




  render() {
    return (
      <div>
        <h2>Welcome to WanderSum</h2>
      </div>
    )
  }
}