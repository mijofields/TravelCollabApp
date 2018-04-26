import React from 'react';
import ItineraryItem from './ItineraryItem';
import '../css/Itinerary.css';
import Auth from '../authService';

export default class ItineraryList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: this.props.user,
      trips: [
        {
          flight: "Dallas to Maui"
        },
        {
          flight: "Houston to Brazil"
        },
        {
          flight: "New Orleans to Morroco"
        },
        {
          flight: "Shreveport to Winnipeg"
        }
      ]
  }

  this.auth = new Auth();
}

componentWillMount() {
};



  render() {
    console.log("Itinerary State: ", this.state.user);
    const letsGo = this.state.trips.map((trip, i) =>
      <ItineraryItem key={i}
                     destination={trip.flight}/>
    )
    return (
      <div className="mdl-grid itinerary-list">
        {letsGo}
      </div>
    )
  }

}