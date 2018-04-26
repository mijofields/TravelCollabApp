import React from 'react';
import siteLogo from '../images/logo.png';
import axios from 'axios';

export default class Register extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      username: '',
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, username , email, password } = this.state;
    const payload = {
      name: name,
      username: username,
      email: email,
      password: password
    }
    axios.post('/signup', payload)
      .then((response) => {
        console.log(response)
      }).catch((err) => {
        console.log(err)
      })
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
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
                       name="name"
                       onChange={this.handleChange}
                />
                     <label className="mdl-textfield__label" htmlfor="name">Name</label>
             </div>
             <div className="mdl-textfield mdl-js-textfield">
               <input className="mdl-textfield__input"
                      type="text"
                      name="username"
                      onChange={this.handleChange}
                />
                    <label className="mdl-textfield__label" htmlfor="username">Username</label>
            </div>
            <div className="mdl-textfield mdl-js-textfield">
              <input className="mdl-textfield__input"
                     type="email"
                     name="email"
                     onChange={this.handleChange}
              />
                   <label className="mdl-textfield__label" htmlfor="email">Email</label>
           </div>
             <div className="mdl-textfield mdl-js-textfield">
               <input className="mdl-textfield__input"
                      name="password"
                      type="password"
                      onChange={this.handleChange}
                />
                    <label className="mdl-textfield__label" htmlfor="password">Password</label>
            </div>
            <div className="mdl-card__actions">
              <button className="mdl-button mdl-js-button mdl-button--raised"
                      type="submit">
                Register
              </button>
            </div>
            <div className="mdl-card__actions">
              <a href="/signin">Login</a>
            </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
