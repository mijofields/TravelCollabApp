import React from 'react';
import '../css/ItineraryItem.css';



export default class ItineraryItem extends React.Component {
  constructor (props){
    super(props)
      this.state = {
        username: props.username
      }
  }
  render() {
    return (
      <div className="itinerary-item mdl-cell mdl-cell--4-col mdl-card mdl-shadow--4dp">
        <div className="mdl-card__title">
          <h5>{this.props.destination}</h5>
        </div>
        <div class="mdl-card__supporting-text">
          <ul class="demo-list-icon mdl-list">
            <li class="mdl-list__item">
              <span class="mdl-list__item-primary-content">
              <i class="material-icons">attach_money</i>
               {this.props.total}
          </span>
            </li>
            <li class="mdl-list__item">
              <span class="mdl-list__item-primary-content">
              <i class="material-icons">flight</i>
               {this.props.flightNumber}
            </span>
            </li>
            <li class="mdl-list__item">
              <span class="mdl-list__item-primary-content">
              <i class="material-icons">flight_takeoff</i>
               {this.props.airline}
            </span>
            </li>
            <li class="mdl-list__item">
              <span class="mdl-list__item-primary-content">
              <i class="material-icons">hotel</i>
               {this.props.hotel}
            </span>
            </li>
          </ul>

        </div>
      </div>
    )
  }
}
