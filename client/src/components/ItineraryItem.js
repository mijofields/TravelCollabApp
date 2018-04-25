import React from 'react';
import '../css/ItineraryItem.css';
import { Button } from './Button';
import '../css/ItineraryItem.css';

export default class ItineraryItem extends React.Component {
  constructor (props){
    super(props)
      this.state = {
        username: props.username,
        title: '',
        location: '',
        friends: ''
      }
  }

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  handleSubmit = (e) => {
    e.preventDefault();


  }


  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Where Will You Wander Next?</h5>
            <form>

              <div className="form-group">
                <label htmlFor="exampleInputTripName" className="bmd-label-floating">Give Your Trip a Rad Name!</label>
                  <input type="tripName" 
                      className="form-control" 
                      id="exampleInputTripName"
                      name="textarea" 
                      value={this.state.title}
                      onChange={this.handleChange}
                  />
              </div>

                <div className="form-group">
                  <label htmlFor="exampleInputLocation" className="bmd-label-floating">What's the Name of the Awesome Place You're Going?</label>
                    <input type="location" 
                      className="form-control" 
                      id="exampleInputLocation"
                      value={this.state.location}
                      onChange={this.handleChange}
                      />
                </div>

                  <div className="form-group">
                    <label htmlFor="exampleSelect1" className="bmd-label-floating">When are you going?</label>
                      <select className="form-control" id="exampleSelect1" >
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
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
                        >
                        Text Area
                        </textarea>
                    </div>
        
                      <Button 
                        type="submit" 
                        className="center btn btn-primary btn-raised"
                        onClick={this.handleSubmit} >
                        Create Trip
                      </Button>
              </form>
            </div>
          </div>


        // {this.props.destination}
           
    )
  }
}
