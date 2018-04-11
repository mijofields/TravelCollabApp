import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


class Navbar extends Component {

    // this.props.signOut
    render() {
        let isAuthenticated = sessionStorage.getItem("isAuthenticated"); // get value of user state
        console.log("isAuthenticated", typeof isAuthenticated);
        

        return (
            <nav className="navbar navbar-expand-md">
                <div className="container" id="topNav">
                    <Link className="navbar-brand" to="/">Name of Website/Logo</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>

                            <li className="nav-item">
                                { isAuthenticated === "true" 
                                    ? <Link className="nav-link" to="/" onClick = {this.props.signOut}>Sign out</Link> 
                                    : 
                                    <Link className="nav-link" to="/signin">Login</Link>
                                }

                            </li>

                        </ul>
                    </div>
                </div>
            </nav>


        );
    }
}

export default Navbar;