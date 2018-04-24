import React, { Component } from 'react';

import axios from 'axios';

import DatePicker from 'react-date-picker';
// import bodyParser from 'body-parser';


class AddEvent extends Component {
  state = {
    startdate: new Date(),
    enddate: new Date(),
    where: ""
  }

  onChangeStart = startdate => this.setState({ startdate })
  onChangeEnd = enddate => this.setState({ enddate })
  handleWhereChange = event => {
    
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.where === "" ) {
      alert(`Please enter the destination of your upcoming trip`)
      return
    };
    alert(`Start Date: ${this.state.startdate}\nEnd Date: ${this.state.enddate}\nDestination: ${this.state.where}`);
    
    axios.post('/newevent', {
        destination: this.state.where,
        start: this.state.startdate,
        end: this.state.enddate    
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    this.setState({ startdate: new Date(), enddate: new Date(), where: ""  });
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
       <label>Where: </label>
        <input
          type="text"
          placeholder="Where are you going?"
          name="where"
          value={this.state.where}
          onChange={this.handleWhereChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>
     
      </div>
    );
  }
}



export default AddEvent