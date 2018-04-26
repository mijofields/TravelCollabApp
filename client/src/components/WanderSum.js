import React,{ Component } from 'react';
import axios from 'axios';
import WanderSearch from './wanderSearch';
import WanderList from './wanderList';
import '../css/wanderSum.css'


export default class WanderSum extends Component {
  constructor(props) {
    super(props)

    this.state = {
      city: "",
      cities: []
    }
    this.searchCities = this.searchCities.bind(this)
  }

  searchCities(city) {
    axios({
      method: 'get',
      url: `https://api.sandbox.amadeus.com/v1.2/points-of-interest/yapq-search-text?city_name=${city}&apikey=xI3r2LnNsrk6M4Ou1L7H6hNRLfxNnYVK`
    }).then((response) => {
      console.log(response.data.points_of_interest)
      this.setState({cities: response.data.points_of_interest})
    }).catch((err) => {
      console.log(err)
    })

  }

  render() {
    return (
      <div className="mdl-grid mdl-card mdl-shadow--4dp wander-container">
        <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp card">
          <WanderSearch search={this.searchCities}/>
        </div>
        <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp card">
          <WanderList cities={this.state.cities} />
        </div>
      </div>
    )
  }
}