import React, { Component } from 'react';

export default class Welcome extends Component{
  constructor(){
    super();

    this.state = {

    }
  }

  render(){

    return(
      <form>
      <input type='text' name="location-input" placeholder='City/Zip'></input>
      <img src="./magnifier.svg"/>
      </form>

    )
  }
}
