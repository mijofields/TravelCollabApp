import React from 'react';
import Auth from '../authService';
import Login from './login';
import Itinerary from './Itinerary';



export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.username,
      isAuthenticated: props.false
    }

    // this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.auth = new Auth();
  }
  componentWillMount() {
    if(this.auth.loggedIn()) {
      this.props.history.replace('/itinerary');
    }
  }

  handleLoginSubmit = (username, password) => {
      this.auth.login(username, password)
        .then((res) => {
          console.log(res);
          this.setState({ username, isAuthenticated: true })
          // this.props.history.replace('/itinerary');
        })
  }

  render() {
    console.log("HOME STATE: ", this.state);
    const { isAuthenticated } = this.state;

      if (isAuthenticated) {
          return <Itinerary username={this.state.username} />;
          }  

    return (

      <div>
        <Login login={this.handleLoginSubmit}/>
      </div>
    )
  }
}
