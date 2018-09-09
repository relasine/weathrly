import React, { Component } from 'react';

export default class SearchBar extends Component{
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
      }} className={this.props.inputClass} value={this.state.location} type='text' name="location-input" placeholder='City/Zip'></input>
      <div onClick={(event)=>{
        event.preventDefault();
        if (this.state.location) {
          this.props.setLocation(this.state.location);
        }
      }} className={this.props.magnifierDivClass}><img className={this.props.magnifierClass} src="./magnifier.svg" alt="search-button"/></div>
      </form>
    )
  }
}
