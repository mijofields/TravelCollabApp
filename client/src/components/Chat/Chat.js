import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import axios from "axios";
import io from "socket.io-client";
const socket = io.connect("http://localhost:8080");
// import axios from 'axios';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      message: "",
      messages: [],
      lockedUsername: false
    };
  }

  // client
  // .on()
  // .emit()
  // server
  // .on()
  // .emit()

  componentDidMount = () => {
    axios({
      url: "/user",
      method: "GET"
    })
      .then(response => this.setState({ username: response.data.username }))
      .catch(err => console.log("Ooops, there is an error"));

    socket.on("chat message", data => {
      this.setState({ messages: [data, ...this.state.messages] });
    }); // Receiving, NO Sending
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

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const message = this.state.message;
    socket.emit("chat message", { username, message }); // sending the messages

    this.setState({ message: "" });
  };

  render() {
    console.log(this.state);
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
                  onClick={this.handleSubmit}
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
