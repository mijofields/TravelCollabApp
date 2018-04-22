import React, { Component } from 'react';
// import Calendar from 'react-calendar';
import axios from 'axios';
// import EventCalendar from 'react-event-calendar';
// import moment, { now } from 'moment';
// import events from './Calendar/events';
import DatePicker from 'react-date-picker';


class AddEvent extends Component {
  state = {
    startdate: new Date(),
    enddate: new Date(),
    what: ""
  }

  onChangeStart = startdate => this.setState({ startdate })
  onChangeEnd = enddate => this.setState({ enddate })
  handleWhatChange = event => {
    
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    alert(`Start Date: ${this.state.startdate}\nEnd Date: ${this.state.enddate}\nWhat: ${this.state.what}`);
    // axios.post('/user', {
    //   firstName: 'Fred',
    //   lastName: 'Flintstone'
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    this.setState({ startdate: new Date(), enddate: new Date(), what: ""  });
  };

  render() {
    return (
      <div className="datepick">
        <label>From Date:</label>
        <DatePicker
          onChange={this.onChangeStart}
          value={this.state.startdate}
        />
        <label>To Date:</label>
        <DatePicker
          onChange={this.onChangeEnd}
          value={this.state.enddate}
        />
       <label>What: </label>
        <input
          type="text"
          placeholder="What will you be doing?"
          name="what"
          value={this.state.what}
          onChange={this.handleWhatChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>
     
      </div>
    );
  }
}



export default AddEvent