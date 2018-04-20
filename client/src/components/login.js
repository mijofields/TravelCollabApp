 import React,{ Component } from 'react';
 import axios from 'axios';
 import siteLogo from '../images/logo.png';
 import auth from '../authService';
 import '../css/login.css'


class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.auth = new auth();
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }

  handleSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    this.auth.login(username, password)
      .then((res) => {
        console.log("You are logged in!",res)
        this.props.history.replace('/itinerary')
      })

  }

  // axiosRequest() {
  //   axios.post('/signin', {username, password})
  //     .then((res) => {
  //       console.log(res)
  //     }).catch((err) => {
  //       console.log(err)
  //     })
  // }


  render() {
    return (
      <div className="mdl-grid login-card">
        <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
          <div className="mdl-card__media login-card-img">
            <img src={siteLogo} alt="site-logo" border="0" />
          </div>
          <div className="mdl-card__supporting-text">
            <form onSubmit={this.handleSubmit}>
              <div className="mdl-textfield mdl-js-textfield">
                <input className="mdl-textfield__input"
                       type="text"
                       name="username"
                       onChange={this.handleChange}/>
                     <label className="mdl-textfield__label" htmlfor="username">Username</label>
             </div>
             <div className="mdl-textfield mdl-js-textfield">
               <input className="mdl-textfield__input"
                      type="text"
                      name="password"
                      type="password"
                      onChange={this.handleChange}/>
                    <label className="mdl-textfield__label" htmlfor="password">Password</label>
            </div>
            <div className="mdl-card__actions">
              <button className="mdl-button mdl-js-button mdl-button--raised"
                      type="submit">
                Submit
              </button>
            </div>
            <div className="mdl-card__actions">
              <a href="#">SignUp</a>
            </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
