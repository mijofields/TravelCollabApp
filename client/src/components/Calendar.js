import React, { Component } from 'react';
import { render } from 'react-dom';
import Calendar from 'react-calendar-pane';
import moment from 'moment';
// import 'moment/locale/nb';
 
class Cal extends Component {
  state = {
    date: moment()
  }
 
  render() {
    return (
        <div>
        <Calendar date={this.state.date} />
        </div>
    );
  }
}
 
export default Cal