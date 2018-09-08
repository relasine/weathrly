import React, { Component } from 'react';

import './welcome.css'

export default class Welcome extends Component{
  constructor(){
    super();

    this.state = {
      location: undefined
    }
  }

  render(){

    return(
      <form className="location-container">
      <input onChange={(event)=>{
        this.setState({
          location: event.target.value
        })
      }} className="location-input" value={this.state.location} type='text' name="location-input" placeholder='City/Zip'></input>
      <div onClick={this.props.setLocation(this.state.location)} className="magnifier-div"><img className="magnifier" src="./magnifier.svg"/></div>
      </form>

    )
  }
}
