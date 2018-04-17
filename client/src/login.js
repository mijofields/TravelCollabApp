 import React,{ Component } from 'react';
 import siteLogo from './images/logo.png';
 import './login.css'


class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }


  render() {
    return (
      <div className="mdl-grid login-card">
        <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
          <div className="mdl-card__media login-card-img">
            <img src={siteLogo} alt="site-logo" border="0" />
          </div>
          <div className="mdl-card__supporting-text">
            <form action="#">
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
                      onChange={this.handleChange}/>
                    <label className="mdl-textfield__label" htmlfor="password">Password</label>
            </div>
            <div className="mdl-card__actions">
              <a href="#">Login</a>
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
