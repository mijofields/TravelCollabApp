import React, { Component } from 'react';
import Signup from '../Signup/Signup.js';
import Chat from '../../components/Chat/Chat.js';
import NavLogo from '../../images/navlogo.png';
import SideNav from '../../components/Nav/Navbar.js'
// import Footer from '../../components/Footer/Footer'
import './Layout.css';


class Layout extends Component {

    

    render (){
        let isAuthenticated = sessionStorage.getItem("isAuthenticated"); // get value of user state

        return (  
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <header className="mdl-layout__header">
                    <div className="mdl-layout__header-row">
                        {/* Title */}
                        <img className="navlogo" src={NavLogo} alt="logo"/>
                        {/* Add spacer, to align navigation to the right */}
                        <div className="mdl-layout-spacer"></div>
                        {/* Navigation. We hide it in small screens */}
                        <nav className="mdl-navigation mdl-layout--large-screen-only">
                        </nav>
                    </div>
                    </header>           

                    <SideNav />
                
                <main className="mdl-layout__content main-layout">
                    <div className="page-content">
                        {/* Your content goes here */}
                        { isAuthenticated === "true" 
                                    ? <Chat /> 
                                    : 
                                    <Signup />
                                }

                </div>
                </main>
                {/* <Footer /> */}
            </div>         
        );
    }
}

export default Layout;