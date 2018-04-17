import React, { Component } from 'react';
import Signup from '../Signup/Signup.js';
import Chat from '../../components/Chat/Chat'
import './Home.css';

const home = {
    width: "100%",
    height: "100%",
    margin: "auto",
    alignSelf: "center"    
};

class Home extends Component {
    render (){
        let isAuthenticated = sessionStorage.getItem("isAuthenticated"); // get value of user state

        return (          
             <div className="home" style={home} >
             <h1>This is The Home Page</h1>
                { isAuthenticated === "true" 
                    ? <Chat /> 
                    : 
                    <Signup />
                }
                
             </div>           
        );
    }
}

export default Home;