 import React,{ Component } from 'react';
 import siteLogo from './images/logo.png';
 import './login.css'


class Login extends React.Component {
  render() {
    return (
      <div className="mdl-grid login-card">
        <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
          <div className="mdl-card__media login-card-img">
            <img src={siteLogo} alt="site-logo" border="0" />
          </div>
          <div className="mdl-card__supporting-text">
            <form action="#">
              <div class="mdl-textfield mdl-js-textfield">
                <input class="mdl-textfield__input" type="text" name="name"/>
                <label class="mdl-textfield__label" for="name">Username</label>
             </div>
             <div class="mdl-textfield mdl-js-textfield">
               <input class="mdl-textfield__input" type="text" name="password"/>
               <label class="mdl-textfield__label" for="password">Password</label>
            </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
