import React from 'react';
import '../css/splitExp.css';




export default class SpiltExp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="mdl-grid mdl-card expense-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <h2>This will be the split expenses component</h2>
        </div>
      </div>
    )
  }
}
