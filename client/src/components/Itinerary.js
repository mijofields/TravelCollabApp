import React, { Component } from 'react';
import ItineraryItem from './ItineraryItem';



export default class ItineraryList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
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
}

  render() {
    const letsGo = this.state.trips.map((trip, i) =>
      <ItineraryItem key={i}
                     destination={trip.flight}/>
    )
    return (
      <div className="mdl-grid">
        {letsGo}
      </div>
    )
  }


}
