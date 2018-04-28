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
        
        <ul className="demo-list-three mdl-list chatcontent">
              <li className="mdl-list__item mdl-list__item--three-line" key={index} >
                <span className="mdl-list__item-primary-content">
                  <i className="material-icons mdl-list__item-avatar">person</i>
                    <span>{message.username}</span>
                      <span className="mdl-list__item-text-body">
                        {message.message}
                      </span>
                    </span>
            </li>                   
          </ul>
      );
    });

    return (
      <div className="mdl-grid mdl-card chat-comp"
          style={{ height: 800, width: "90%" }}>
        <div className="mdl-cell mdl-cell--12-col chat-comp">
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

                
                  <label className="mdl-textfield__label" htmlFor="sample5">Text lines...</label>
                    <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" 
                      onClick={this.submitMessage}
                    >
                    <i className="material-icons">send</i>
                    </button>
              </div>
            
          </div>
        </div>
     
    </div>
    </div>
    </div>
  
    
    );
  }
};
