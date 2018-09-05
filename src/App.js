import React, { Component } from 'react';
import './App.css';
import Current from './current/Current'
import { data } from './api.js'

class App extends Component {
  constructor(){
    super();

    this.state = {
      data: data
    }
  }


  render() {

    console.log({data});
    return (
      <div className="App">
        <Current data={ this.state.data }/>
      </div>
    );
  }
}

export default App;
