import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import './Navbar.css';


class Navbar extends Component {

    // this.props.signOut
    render() {
        let isAuthenticated = sessionStorage.getItem("isAuthenticated"); // get value of user state
        // console.log("isAuthenticated", typeof isAuthenticated);        

        return (

            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="/">Wonder Sum</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>                    
                    <Nav pullRight>
                        <NavItem eventKey={1} href="/"> Home </NavItem>             
                        <NavItem eventKey={2} href="/about"> About </NavItem>                  
                        
                        { isAuthenticated === "true" 
                            ?  <NavItem eventKey={4} href="/signout" onClick = {this.props.signOut} > Logout </NavItem>                                    
                            : 
                            <NavItem eventKey={5} href="/Signin"> Login </NavItem>
                        }
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        );
    }
}

export default Navbar;