import React from 'react';
import Login from './login';
import NavLogo from './images/navlogo.png'
import './layout.css';
// import signOut from './logout';


class Layout extends React.Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-tabs">
          <header className="mdl-layout__header">
              <div className="mdl-layout__header">
                {/* Title */}
                <img className="navlogo" src={long} alt="logo"/>
              </div>
            {/* Tabs */}
              <div class="mdl-layout__tab-bar mdl-js-ripple-effect">
                <a href="#fixed-tab-1" class="mdl-layout__tab is-active">Itinerary</a>
                  <a href="#fixed-tab-2" class="mdl-layout__tab">Expenses</a>
                    <a href="#fixed-tab-3" class="mdl-layout__tab">Chat</a>
              </div>
            </header>
          </nav>
        </div>
        

        <main className="mdl-layout__content main-layout">
          <div className="page-content">
          {/* Your content goes here */}
            <Login />

          </div>
        </main>
	  </div>
    )
  }
}

export default Layout;
