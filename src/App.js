import React, { Component } from 'react';
import './App.css';
import Current from './current/Current';
import SevenHour from './SevenHour/SevenHour';
import { data } from './api';
import TenDay from './TenDay/TenDay'

class App extends Component {
  constructor(){
    super();

    this.state = {
      data: data
    }
  }


  render() {

    return (
      <div className="App">
        <Current data={ this.state.data.current_observation } />
        <SevenHour data={ this.state.data.hourly_forecast } />
        <TenDay data={this.state.data.forecast.txt_forecast.forecastday}/>
      </div>
    );
  }
}

export default App;
