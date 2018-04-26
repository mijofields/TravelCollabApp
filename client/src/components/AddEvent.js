import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-date-picker';
import bodyParser from 'body-parser';


class AddEvent extends Component {
  state = {
    startdate: new Date(),
    enddate: new Date(),
    destination: "",
    username: ""
  }

  onChangeStart = startdate => this.setState({ startdate })
  onChangeEnd = enddate => this.setState({ enddate })
  handleDestinationChange = event => {
    
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
    alert(`Start Date: ${this.state.startdate}\nEnd Date: ${this.state.enddate}\nDestination: ${this.state.destination}\n User: ${this.state.username}`);
    
    axios.post('/event', {
        destination: this.state.destination,
        start: this.state.startdate,
        end: this.state.enddate,
        user: this.state.user    
    })
    .then(function (response) {
      console.log(response);
      
    })
    .catch(function (error) {
      console.log(error);
    });
    this.setState({ startdate: new Date(), enddate: new Date(), desintation: ""  });
  };

  // componentWillMount(

  // setState()

  // )

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
          name="destination"
          value={this.state.destination}
          onChange={this.handleDestinationChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>
     
      </div>
    );
  }
}



export default AddEvent