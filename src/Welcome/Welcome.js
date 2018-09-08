import React, { Component } from 'react';

import './welcome.css'

export default class Welcome extends Component{
  constructor(){
    super();

    this.state = {

    }
  }

  render(){

    return(
      <form className="location-container">
      <input className="location-input" type='text' name="location-input" placeholder='City/Zip'></input>
      <div className="magnifier-div"><img className="magnifier" src="./magnifier.svg"/></div>
      </form>

    )
  }
}
