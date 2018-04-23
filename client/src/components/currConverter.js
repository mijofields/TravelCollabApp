import React,{ Component } from 'react';
import '../css/currConverter.css';


export default class CurrConverter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="mdl-grid mdl-card curr-converter">
        <div className="mdl-cell mdl-cell--12-col">
          <h2>This will be the currency converter component</h2>
        </div>
      </div>
    )
  }
}
