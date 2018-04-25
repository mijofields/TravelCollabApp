import React,{ Component } from 'react';
import Auth from '../authService';
import Login from './login';



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
