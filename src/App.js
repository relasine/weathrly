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
import cities from './cities';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: undefined,
      location: undefined,
      cityLocation: undefined,
      stateLocation: undefined,
      zipLocation: undefined,
      sevenHourSelected: true,
      tenDaySelected: false,
      current: true,
      trie: new Trie()
    };

    this.toggleSevenHour = this.toggleSevenHour.bind(this);
    this.toggleTenDay = this.toggleTenDay.bind(this);
    this.cleanLocation = this.cleanLocation.bind(this);
    this.fetchCall = this.fetchCall.bind(this);
    this.checkZip = this.checkZip.bind(this);

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
    if (this.state.cityLocation) { 
      fetch(`http://api.wunderground.com/api/${apikey}/conditions/hourly/forecast10day/q/${this.state.stateLocation}/${this.state.cityLocation}.json`)
        .then(response => response.json())
        .then(data => {
          this.setState({
            current: true,
            data: data
          });
        })
        .catch(error => {
          this.setState({
            data: undefined
          });

          localStorage.clear();
          alert('This is not a valid city/state')
        });
    } else if (this.state.zipLocation) {
      fetch(`http://api.wunderground.com/api/${apikey}/conditions/hourly/forecast10day/q/${this.state.zipLocation}.json`)
        .then(response => response.json())
        .then(data => {
          this.setState({
            current: true,
            data: data
          });
        })
        .catch(error => {
          this.setState({
            data: undefined
          });

          localStorage.clear();
          alert('This is not a valid zip code')
        });
    }

  }

  componentDidMount() {
    let currentLocation = (localStorage.getItem('storedLocation')) || undefined;
    let currentZip = (localStorage.getItem('storedZip')) || undefined;

    let parsedLocation;
    let parsedZip;

    if (currentLocation) {
      parsedLocation = JSON.parse(currentLocation);
    }

    if (currentZip) {
      parsedZip = JSON.parse(currentZip);
    }


    if (parsedLocation) {
      this.setState({
        cityLocation: parsedLocation.city,
        stateLocation: parsedLocation.state,
        trie: new Trie()
      });
    } else if (currentZip) {
      this.setState({
        zipLocation: parsedZip
      });
    }

    this.state.trie.populate(cities.data);
  }

  componentDidUpdate() {
    if (!this.state.data || !this.state.current) {
      this.fetchCall();
    }
  }

  cleanLocation(string) {
    let csArray = string.split(' ');

    let stateLocation = csArray.pop();

    this.setState({
      cityLocation: csArray.join('_'),
      stateLocation: stateLocation,
      current: false
    });
  }

  checkZip(zip) {
    if (zip) {
      this.setState({
        zipLocation: zip,
        current: false
      })
    }
  }

  setStorage(city, state) {
    let locationObj = {city: city, state: state};
    localStorage.setItem('storedLocation', JSON.stringify(locationObj));
  }

  setStorageZip(zip) {
    localStorage.setItem('storedZip', JSON.stringify(zip));
  }

  render() {

    if (this.state.cityLocation) {
          localStorage.clear()

      this.setStorage(this.state.cityLocation, this.state.stateLocation);
    }

    if (this.state.zipLocation) {
          localStorage.clear()

      this.setStorageZip(this.state.zipLocation);
    }

    if (this.state.data) {
      return (
        <div className="App">
          <section className="search-section">
            <SearchBar trie={this.state.trie} checkZip={this.checkZip} cleanLocation={this.cleanLocation} inputClass="main-input" magnifierDivClass="main-magnifier-div" magnifierClass="main-magnifier"/>
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

    } else {
      return (
        <div className="App">
          <section className='logo-section'>
            <h1 className="logo-label">WThRly</h1><img className='logo-img' src="./windy.svg" alt='logo' />
          </section>
          <Welcome cleanLocation={ this.cleanLocation } checkZip={this.checkZip} trie={this.state.trie}/>
        </div>
      );
    }
  }
}

export default App;
