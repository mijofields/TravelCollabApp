import React, { Component } from 'react';
import Signup from '../Signup/Signup.js';
import './Home.css';

class Home extends Component {
    render (){
        return (          
             <div className="home">
             <h1>This is The Home Page</h1>
             <Signup />
                
             </div>           
        );
    }
}

export default Home;
