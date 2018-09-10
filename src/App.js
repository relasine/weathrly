import React, { Component } from 'react';
import './App.css';
import Current from './current/Current';
import SevenHour from './SevenHour/SevenHour';
// import { data } from './api';
import TenDay from './TenDay/TenDay';
import Toggle from './Toggle/Toggle';
import Welcome from './Welcome/Welcome';
import SearchBar from './SearchBar/SearchBar'
import apikey from './apikey'

class App extends Component {
  constructor(){
    super();

    this.state = {
      data: undefined,
      location: undefined,
      sevenHourSelected: true,
      tenDaySelected: false
    }

    this.toggleSevenHour = this.toggleSevenHour.bind(this);
    this.toggleTenDay = this.toggleTenDay.bind(this);
    this.cleanLocation = this.cleanLocation.bind(this);
    this.setLocation = this.setLocation.bind(this);

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

  setLocation(selectedLocation){

    this.setState({
      location: selectedLocation
    })

  }

  componentDidMount() {
    if (this.state.location) {
    fetch(`http://api.wunderground.com/api/${apikey}/conditions/hourly/forecast10day/q/${this.state.location.stateLocation}/${this.state.location.cityLocation}.json`) 
      .then(response => response.json())
      .then(info => {
        this.setState({
          data: info
        });
      })
    }
  }

  cleanLocation(string) {
    const csArray = string.split(' ');

    let locationObject = {cityLocation: csArray[0].substr(0, csArray[0].length -1), stateLocation: csArray[1]};

    this.setLocation(locationObject);
  }


  render() {

    if(this.state.location){
      return (
        <div className="App">
          <section className="search-section">
            <SearchBar cleanLocation={this.cleanLocation} inputClass="main-input" magnifierDivClass="main-magnifier-div" magnifierClass="main-magnifier"/>
          </section>
          <Current  day={ this.state.data.forecast.txt_forecast.forecastday[0].title}
                    data={ this.state.data.current_observation }
                    forecastTemp = { this.state.data.forecast.simpleforecast.forecastday[0]} />
          <section className='bottom-section'>
            <Toggle toggleSevenHour={ this.toggleSevenHour }
                    toggleTenDay={ this.toggleTenDay }
                    toggleStateSevenHour={ this.state.sevenHourSelected }
                    toggleStateTenDay={ this.state.tenDaySelected }
            />
            <SevenHour  data={ this.state.data.hourly_forecast }
                        toggleState={ this.state.sevenHourSelected } />
            <TenDay data={this.state.data.forecast.simpleforecast.forecastday}
                    toggleState={ this.state.tenDaySelected }/>
          </section>
        </div>
      );

    }else{
      return(
        <div className="App">
        <Welcome cleanLocation={ this.cleanLocation }/>
        </div>
      )
    }
  }
}

export default App;
