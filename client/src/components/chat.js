import React from 'react';
import io from "socket.io-client";
import '../css/chat.css';
const socket = io.connect("http://localhost:5000");

export default class ChatComp extends React.Component {
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

    const messages = this.state.messages.map((message, index) => {
      console.log("Message: ", message);

      return (
        <ul>
        <li key={index}>
          <b>{message.username}: </b>
          <p>{message.message}</p>
        </li>
        </ul>
      );
    });

    return (
      <div className="mdl-grid mdl-card chat-comp"
          style={{ height: 800, width: "90%" }}>
        <div className="mdl-cell mdl-cell--12-col">
          <h2>This will be the chat component</h2>
{/* ===========bootstrap stuff below... need to update ======== */}
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
  

{/* =================BOOTSTRAP STUFF ======= */}





        </div>
      </div>
    )
  }
}
