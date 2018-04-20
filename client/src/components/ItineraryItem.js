import React,{ Component } from 'react';
import '../css/ItineraryItem.css';



export default class ItineraryItem extends React.Component {
  render() {
    return (
      <div className="itinerary-item mdl-cell mdl-cell--4-col mdl-card mdl-shadow--4dp">
        <div className="mdl-card__title">
            {this.props.destination}
        </div>
      </div>
    )
  }
}
