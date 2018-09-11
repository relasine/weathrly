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
      cityLocation: undefined,
      stateLocation: undefined,
      sevenHourSelected: true,
      tenDaySelected: false
    }

    this.toggleSevenHour = this.toggleSevenHour.bind(this);
    this.toggleTenDay = this.toggleTenDay.bind(this);
    this.cleanLocation = this.cleanLocation.bind(this);
    // this.setLocation = this.setLocation.bind(this);
    this.fetchCall = this.fetchCall.bind(this);

  }

  toggleSevenHour() {
    this.setState({
      sevenHourSelected: true,
      tenDaySelected: false
    });
  }

  toggleTenDay() {
    this.setState({
      sevenHourSelected: false,
      tenDaySelected: true
    });
  }

  // setLocation(city, state) {
  //   this.setState({
  //     cityLocation: city,
  //     stateLocation: state
  //   });

  //   this.fetchCall();
  // }

  fetchCall() {
          console.log('fetching...', this.state)

    fetch(`http://api.wunderground.com/api/${apikey}/conditions/hourly/forecast10day/q/${this.state.stateLocation}/${this.state.cityLocation}.json`) 
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data
        })
      })

  }

  componentDidMount() {
    console.log('componentDidMount')
    if (this.state.cityLocation) {
      // console.log('component did mount fetch')
      // this.fetchCall()
    }
  }

  componentDidUpdate() {
    if (!this.state.data) {
      this.fetchCall();
    }
  }

  cleanLocation(string) {
    const csArray = string.split(' ');

    let cityLocation = csArray[0].substr(0, csArray[0].length -1)
    let stateLocation = csArray[1];

    this.setState({
      cityLocation: csArray[0].substr(0, csArray[0].length -1), 
      stateLocation: csArray[1]
    });
    
  }


  render() {


    // console.log(this.state)


    if(this.state.data){
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
