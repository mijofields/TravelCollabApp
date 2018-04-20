import React,{ Component } from 'react';



export default class ItineraryItem extends React.Component {
  render() {
    return (
      <div className="mdl-cell mdl-cell--4-col mdl-card">
        <div className="mdl-card__title">
            {this.props.destination}
        </div>
      </div>
    )
  }
}
