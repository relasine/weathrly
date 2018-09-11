import React, { Component } from 'react';
import './App.css';
import Current from './current/Current';
import SevenHour from './SevenHour/SevenHour';
import TenDay from './TenDay/TenDay';
import Toggle from './Toggle/Toggle';
import Welcome from './Welcome/Welcome';
import SearchBar from './SearchBar/SearchBar';
import apikey from './apikey';
import Trie from '@relasine/auto-complete';
// const { Trie } = require('@relasine/auto-complete');

const trie = new Trie();
trie.insert('denver')
console.log(trie)

class App extends Component {
  constructor(){
    super();

    this.state = {
      data: undefined,
      location: undefined,
      cityLocation: undefined,
      stateLocation: undefined,
      sevenHourSelected: true,
      tenDaySelected: false,
      current: true
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

  fetchCall() {
    console.log('fetching')
    fetch(`http://api.wunderground.com/api/${apikey}/conditions/hourly/forecast10day/q/${this.state.stateLocation}/${this.state.cityLocation}.json`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          current: true,
          data: data
        })
      })
      .catch(error => {
      });

  }

  componentDidMount() {
    let currentLocation = JSON.parse(localStorage.getItem('storedLocation')) || undefined;
    if (currentLocation) {
      this.setState({
        cityLocation: currentLocation.city,
        stateLocation: currentLocation.state
      })
    }
  }

  componentDidUpdate() {
    if (!this.state.data || !this.state.current) {
      this.fetchCall();
    }
  }

  cleanLocation(string) {
    const csArray = string.split(' ');

    this.setState({
      cityLocation: csArray[0].substr(0, csArray[0].length -1),
      stateLocation: csArray[1],
      current: false
    });

  }

  setStorage(city, state) {
    let locationObj = {city: city, state: state}
    localStorage.setItem('storedLocation', JSON.stringify(locationObj))
  }

  render() {

    if(this.state.cityLocation) {
      this.setStorage(this.state.cityLocation, this.state.stateLocation)
    }


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
          <section className='logo-section'>
            <h1 className="logo-label">WThRly</h1><img className='logo-img' src="./windy.svg" alt='logo' />
          </section>
          <Welcome cleanLocation={ this.cleanLocation }/>
        </div>
      )
    }
  }
}

export default App;
