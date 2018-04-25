import React, {Component} from 'react';
import axios from 'axios';
import AddFriend from './AddFriend';
import {Button}  from '../Button';
import siteLogo from '../../images/logo.png';


class Friends extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            name: '',
            email: '',
            results: false
        }
    }     

    handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

    handleSubmit = (event) => {
        event.preventDefault();

        axios({
            url: "/friends/:username",
            method: "POST",
            data: this.state            
        })
        .then((response) => {
            this.setState({ 
                email: response.data.email,
                name: response.data.name,
                username: response.data.username,
                results: true //Associates results to render the appropriate forms on browser
            })         
            console.log("STATE: ", this.state); 
            console.log('FRIENDS DATA:  ', response.data)          
        })
        .catch((err) => {            
            console.log("Error Find Friend: ", err);            
        });      
    };

    isFriend = () => { 
        axios({
            url: "/friends/" + this.state.username,
            method: "POST",
            data: this.state
        })
        .then((response) => {
            // this.state.friends.push(this.state.username);
            this.setState({ 
                results: true,
                username: this.state.username,
                name: this.state.name,
                email: this.state.email               
             });            
            
            console.log("ADD FRIEND STATE:", this.state)
            console.log("ADD FRIEND RESPONSE: ", response.data)
        })      
        .catch((err) => {
            console.log("ADD FRIEND ERROR: ", err)
        })
    };        

    render(){
        const { name, username, email, results } = this.state; 
        console.log("Friends Array: ", this.state.friends);  
        console.log("State:  ", this.state)     
    
        return (         
        <div>  
            {results ?          
                (<AddFriend>
                    <p className="card-text name-result">Name:{name}</p>
                        <p className="card-text username-result">Username:{username}</p>
                            <p className="card-text email-result">Email:{email}</p>
                                <button className="btn btn-primary" 
                                    onClick={this.isFriend} 
                                    >Add Friend
                                </button>
                                
                </AddFriend>
                ) : (
                    <div className="mdl-grid login-card">
                        <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
                        <div className="mdl-card__media login-card-img">
                            <img src={siteLogo} alt="site-logo" border="0" />
                        </div>
                        <div className="mdl-card__supporting-text">
                            <form>
                            <div className="mdl-textfield mdl-js-textfield">
                                <input className="mdl-textfield__input"
                                    type="text"
                                    name="username"
                                    onChange={this.handleChange}/>
                                    <label className="mdl-textfield__label" htmlFor="username">Username</label>
                            </div>
                            
                            <div className="mdl-card__actions">
                            <Button                 
                                onClick={this.handleSubmit}>
                                Find Friend 
                            </Button>
                            </div>
                            
                            </form>
                        </div>
                        </div>
                    </div>
                
                )}
                </div>




                                   

        );
    }
}

export default Friends;








  



