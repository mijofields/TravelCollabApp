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
  <section className="mdl-layout__tab-panel is-active" id="fixed-tab-3">
      <div className="page-content">
        <main className="demo-main mdl-layout__content centercontent">
          <div className="demo-container mdl-grid">
            <div className="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
            <div className="demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
              {/* <!--title--> */}
              <h1 className="center"><i className="large material-icons">Group Chat</i></h1>
          {/* <!-- comments--> */}
              {messages}
          {/* <!-- Floating Multiline Textfield --> */}
            <form>
              <div className="mdl-textfield mdl-js-textfield chattype">
                <textarea className="mdl-textfield__input" 
                    rows= "3" 
                    id="sample5" 
                    type="text"
                    placeholder="Enter a message"
                    name="message"
                    value={this.state.message}
                    onChange={this.handleChange}
                >
                <br />
                </textarea>
                  <label className="mdl-textfield__label" for="sample5">Text lines...</label>
                    <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" 
                      onClick={this.submitMessage}
                    >
                    <i className="material-icons">send</i>
                    </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
    </section>
    
    );
  }
};
