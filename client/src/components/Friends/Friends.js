import React, {Component} from 'react';
import axios from 'axios';
import AddFriend from './AddFriend.js';
import { CardForm, InputField } from '../Forms';
import { Button } from '../Button/Button';

class Friend extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            name: '',
            email: '',
            results: false,
            friends: false
        }
    }

    handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

    handleSubmit = (event) => {
        event.preventDefault();
        const username = this.state.username;
        axios({
            url: "/user/" + username,
            method: "POST",
            data: this.state            
        })
        .then((response) => {
            this.setState({ 
                email: response.data.email,
                name: response.data.name,
                returnUsername: response.data.username,
                results: true
            })         
            console.log("Response: ", response.data); 
            // document.getElementById('foo').reset();            
        })
        .catch((err) => {            
            console.log("Error Find Friend: ", err);            
        });      
    };

    isFriend = () => { 
        this.setState({ friends: true }) 
        console.log("IS FRIEND")
    };
        

    render(){
        const { name, username, email, results } = this.state;
        // let friendsResults = this.state.results;
        
    
        return (         
        <div className="center">  
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
                    <CardForm title="Is This Your Friend?">
                     <InputField 
                    type="text" 
                    placeholder="username"  
                    className="form-control" 
                    name="username"
                    value={this.state.value} 
                    onChange={this.handleChange} 
                />
                <Button
                    onClick={this.handleSubmit} 
                    type="submit" 
                    value="Find Friend"
                />
                </CardForm>

                )}
        </div>

        );
    }
}

export default Friend;








  



