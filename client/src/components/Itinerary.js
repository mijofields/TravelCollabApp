import React from 'react';
import ItineraryItem from './ItineraryItem';
import '../css/Itinerary.css';
import Auth from '../authService';

export default class ItineraryList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      trips: [
        {
          flight: "Dallas to Maui",
          total: '$2500',
          flightNumber: 3340,
          airline: "American Airlies",
          hotel: "Sufer's Cove Hotel"
        },
        {
          flight: "Houston to Brazil",
          total: '$1500',
          flightNumber: 3564,
          airline: "American Airlies",
          hotel: "DoubleTree"
        },
        {
          flight: "New Orleans to Morroco",
          total: '$2500',
          flightNumber: 32340,
          airline: "Sun Fligh International",
          hotel: "MoonSun Hotel"
        },
        {
          flight: "Shreveport to Winnipeg",
          total: '$2500',
          flightNumber: 67340,
          airline: "American Airlies",
          hotel: "Marriot"
        }
      ],
      user: this.props.user
  }

  this.auth = new Auth();
}

componentWillMount() {
  console.log("Component is mounting")
}

  render() {
    console.log(this.state)
    const letsGo = this.state.trips.map((trip, i) =>
      <ItineraryItem key={i}
                     destination={trip.flight}
                     total={trip.total}
                     flightNumber={trip.flightNumber}
                     airline={trip.airline}
                     hotel={trip.hotel}/>
    )
    return (
      <div className="mdl-grid itinerary-list">
        {letsGo}
      </div>
    )
  }

}
