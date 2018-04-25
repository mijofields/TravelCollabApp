import React from 'react';
import siteLogo from '../images/logo.png';
import Auth from '../authService';
import {Button} from './Button';
import '../css/login.css'


class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      isAuthenticated: false
    }
    this.auth = new Auth();
  } 

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
      const { username, password } = this.state;
      this.props.login(username, password);
      this.setState({ 
        isAuthenticated: true,
        username
      })
  }

  handleLoginSubmit = (username, isAuthenticated) => this.setState({ username, isAuthenticated });

  render() {

    console.log("LOGIN STATE:  ", this.state);
     
    return (
      <div className="mdl-grid login-card">
        <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
          <div className="mdl-card__media login-card-img">
            <img src={siteLogo} alt="site-logo" border="0" />
          </div>
          <div className="mdl-card__supporting-text">
            <form>
              <div className="mdl-textfield mdl-js-textfield">
                <input className="mdl-textfield__input"
                       type="text"
                       name="username"
                       onChange={this.handleChange}/>
                     <label className="mdl-textfield__label" htmlFor="username">Username</label>
             </div>
             <div className="mdl-textfield mdl-js-textfield">
               <input className="mdl-textfield__input"
                      name="password"
                      type="password"
                      onChange={this.handleChange}/>
                    <label className="mdl-textfield__label" htmlFor="password">Password</label>
            </div>
            <div className="mdl-card__actions">
              <Button                 
                onClick={this.handleSubmit}>
                Login </Button>
              <Button type="submit"> Register </Button>
            </div>
            
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;