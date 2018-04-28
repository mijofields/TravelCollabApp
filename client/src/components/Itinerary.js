import React from 'react';
import axios from 'axios';
import { Button } from './Button';
import '../css/ItineraryItem.css';

export default class Itinerary extends React.Component {
  constructor (props){
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


componentWillMount() {

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

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Where Will You Wander Next?</h5>
            <form>

              <div className="form-group">
                <label htmlFor="exampleInputTripName" className="bmd-label-floating">Give Your Trip a Rad Name!</label>
                  <input 
                      type="text" 
                      id="exampleInputTripName"
                      name="title" 
                      value={this.state.title}
                      onChange={this.handleChange}
                  />
              </div>

                <div className="form-group">
                  <label htmlFor="exampleInputLocation" className="bmd-label-floating">What's the Name of the Awesome Place You're Going?</label>
                    <input 
                      type="text"
                      name="location"
                      value={this.state.location}
                      onChange={this.handleChange}
                      />
                </div>

                  <div className="form-group">
                    <label htmlFor="exampleSelect1" className="bmd-label-floating">When are you going?</label>
                      <select 
                          className="form-control" 
                          id="exampleSelect1"
                          value={this.state.month} 
                          onChange={this.handleChange}
                          >
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                      </select>
                  </div>
                    <div className="form-group">
                      <label htmlFor="exampleSelect2" className="bmd-label-floating">Select All Days You Will Be On The Trip</label>
                        <select multiple className="form-control" id="exampleSelect2">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                          <option>13</option>
                          <option>14</option>
                          <option>15</option>
                          <option>16</option>
                          <option>17</option>
                          <option>18</option>
                          <option>19</option>
                          <option>20</option>
                          <option>21</option>
                          <option>22</option>
                          <option>23</option>
                          <option>24</option>
                          <option>25</option>
                          <option>26</option>
                          <option>27</option>
                          <option>28</option>
                          <option>29</option>
                          <option>30</option>
                          <option>31</option>
                        </select>
                  </div>
                    <div className="form-group">
                      <label htmlFor="exampleTextarea" className="bmd-label-floating">Who's Coming On This Adventure?</label>
                        <textarea 
                            className="form-control" 
                            id="exampleTextarea" 
                            rows="3"
                            value={this.state.friends}
                            onChange={this.handleChange}
                          />
                        Text Area
                        
                    </div>
        
                      <Button 
                        type="submit" 
                        className="center btn btn-primary btn-raised"
                        onClick={this.handleSubmitItinerary} >
                        Create Trip
                      </Button>
              </form>
            </div>
          </div>


        // {this.props.destination}
           
    )
  }
}
