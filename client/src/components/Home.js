import React,{ Component } from 'react';
import Auth from '../authService';
import Login from './login';



export default class Home extends React.Component {
  constructor(props) {
    super(props)

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.auth = new Auth();
  }
  componentWillMount() {
    if(this.auth.loggedIn()) {
      this.props.history.replace('/itinerary');
    }
  }

  handleLoginSubmit(username, password) {
      this.auth.login(username, password)
        .then((res) => {
          console.log(res)
          this.props.history.replace('/itinerary');
        })
  }

  render() {
    return (
      <div>
        <Login login={this.handleLoginSubmit}/>
      </div>
    )
  }
}
