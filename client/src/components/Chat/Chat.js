import React, { Component } from 'react'
// import ReactDOM from 'react-dom';
import io from "socket.io-client";
const socket = io.connect('http://localhost:8080');
// import axios from 'axios';

class Chat extends Component {
    constructor(props){
        super(props);
            this.state = {
                username: '',
                message: '',
                messages: []
            }
        }

    componentDidMount = () => {
        console.log("Hello World");

        socket.on("testing", (data) => {
            console.log("Data: ", data);
        });
    };
            
    // handleSubmit = event => {
    //     event.preventDefault();
    //     const body = event.target.value
    //     if (event.keyCode === 13 && body) {
    //         const message = {
    //             body,
    //             from: 'Me',
    //         }
    //         this.setState({ messages: [message, ...this.state.messages] })
    //         event.target.value = ''
    //     }
    // }                

    render(){
        const messages = this.state.messages.map((message, index) => {
            return <li key={index}> 
                    <b>{message.from}>:</b>{message.body}</li>
        })
    return (
        <div className="chat-container" style={{ height:800, width: "90%", backgroundColor: "yellow" }} >
            <div className="row">
                <div className="col-10">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">Group Chat</div>
                            <hr/>
                        {/* messages class to loop through all the messages which we will have and 
                        display author’s name and his message */}
                            <div className="messages">
                                {messages}
                            </div>
                        </div>
                        <div className="card-footer">
                                <input type="text" placeholder="Username"                                    
                                    name="username"
                                    className="form-control"/>
                                <br/>
                                <input type="text" placeholder="Enter a message" 
                                    name="message"
                                    onKeyUp={this.handleSubmit}
                                    className="form-control"/>
                                <br/>
                                
                                <button 
                                    onClick={this.handleSubmit} 
                                    className="btn btn-primary form-control">
                                Send
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
}

export default Chat;