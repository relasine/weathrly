import React, { Component } from 'react';
import './App.css';
import Current from './current/Current';
import SevenHour from './SevenHour/SevenHour';
import { data } from './api';
import TenDay from './TenDay/TenDay'
import Toggle from './Toggle/Toggle'

class App extends Component {
  constructor(){
    super();

    this.state = {
      data: data,
      sevenHourSelected: true,
      tenDaySelected: false
    }

    this.toggleSevenHour = this.toggleSevenHour.bind(this);
    this.toggleTenDay = this.toggleTenDay.bind(this);
  }

  toggleSevenHour() {
    console.log("seven hour")
    this.setState({
      sevenHourSelected: true,
      tenDaySelected: false
    });
    //Display flex on SevenHour, display none on tenday
    //seven-hour-toggle - colorwhite, font-weight 800
    //ten-day-toggle - color grey, font-weight 300
  }

  toggleTenDay() {
    console.log('ten day')
    this.setState({
      sevenHourSelected: false,
      tenDaySelected: true
    });
    //Display flex on tenDay, display none on sevenHour
    //ten-day-toggle - colorwhite, font-weight 800
    //seven-hour-toggle - color grey, font-weight 300
  }


  render() {

    return (
      <div className="App">
        <Current data={ this.state.data.current_observation } />
        <section className='bottom-section'>
          <Toggle toggleSevenHour={ this.toggleSevenHour }
                  toggleTenDay={ this.toggleTenDay }
                  toggleStateSevenHour={ this.state.sevenHourSelected }
                  toggleStateTenDay={ this.state.tenDaySelected }
          />
          <SevenHour  data={ this.state.data.hourly_forecast }
                      toggleState={ this.state.sevenHourSelected } />
          <TenDay data={this.state.data.forecast.txt_forecast.forecastday}
                  toggleState={ this.state.tenDaySelected }/>
        </section>
      </div>
    );
  }
}

export default App;
