import React, { Component } from "react";
// import axios from "axios";
import io from "socket.io-client";
// import API from '../../utils/API';
const socket = io.connect("http://localhost:8080");

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.username,
      message: "",
      messages: []
    };
  }

  componentDidMount = () => { 
    
        socket.on("chat message", data => {
        this.setState({ messages: [data, ...this.state.messages] });
      }); // Receiving, NO Sending  
  };
  

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });


  submitMessage = event => {
    event.preventDefault();
    const username = this.state.username;
    const message = this.state.message;
    socket.emit("chat message", { username, message }); // sending the messages

    this.setState({ message: "" });
  };

  render() {

    console.log(this.state);
        // const username = this.state.username;
        // const message = this.state.message;
       

    const messages = this.state.messages.map((message, index) => {
      console.log("Message: ", message);
      return (
        <li key={index}>
          <b>{message.username}: </b>
          <p>{message.message}</p>
        </li>
      );
    });

    return (
      <div
        className="chat-container"
        style={{ height: 800, width: "90%", backgroundColor: "yellow" }}
      >
        <div className="row">
          <div className="col-10">
            <div className="card">
              <div className="card-body">
                <div className="card-title">Group Chat</div>
                
                <hr />
                {/* messages class to loop through all the messages which we will have and 
                        display author’s name and his message */}
                <div className="messages">{messages}</div>
              </div>
              <div className="card-footer">
                <input
                  type="text"
                  placeholder="Enter a message"
                  name="message"
                  value={this.state.message}
                  className="form-control"
                  onChange={this.handleChange}
                />
                <br />

                <button
                  onClick={this.submitMessage}
                  className="btn btn-primary form-control"
                >
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
