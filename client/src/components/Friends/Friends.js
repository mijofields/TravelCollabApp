import React, {Component} from 'react';
import axios from 'axios';
import API from "../../utils/API";
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
            friends: [],
            saveFriends: false
        }
    }     

    handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     const username = this.state.username;
    //     API.getUserByUsername(username)
    //     .then ((response) => {
    //         this.setState({
    //         username: response.data.username,
    //         name: response.data.name,
    //         email: response.data.email,
    //         results: true //Associates results to render the appropriate forms on browser
    //         })
    //         console.log("Response: ", response.data); 
    //     })
    //     .catch(err => console.log("GET FRIEND BY NAME ERROR: ", err))
    //   };
    

    findFriendClick = (event) => {
        event.preventDefault();
        const username = this.state.username;
        axios({
            url: "/api/friends/" + username,
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
            url: "/api/friends/createFriend",
            method: "POST",
            data: this.state
        })
        .then((response) => {
            this.state.friends.push(this.state.username);
            this.setState({ 
                saveFriends: true,
                username: this.state.username,
                name: this.state.name,
                email: this.state.email,
                friends: this.state.friends                
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
                    onClick={this.findFriendClick} 
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








  



