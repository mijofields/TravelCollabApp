import React,{ Component } from 'react';
import '../css/chat.css';

export default class ChatComp extends React.Component {
  constructor(props) {
    super()

    this.state = {}
  }

  render() {
    return (
      <div className="mdl-grid mdl-card chat-comp">
        <div className="mdl-cell mdl-cell--12-col">
          <h2>This will be the chat component</h2>
        </div>
      </div>
    )
  }
}
