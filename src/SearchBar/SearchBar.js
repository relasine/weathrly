import React, { Component } from 'react';
import CityOption from '../CityOption/CityOption'

export default class SearchBar extends Component{
  constructor(){
    super();

    this.state = {
      location: undefined,
      cityArray: []
    }
  }


  render(){


    return(
      <div className="location-container">
      <input onChange={(event)=>{
        console.log(this.props.trie.suggest(event.target.value))
        this.setState({
          cityArray: this.props.trie.suggest(event.target.value)
        })
      }} className={this.props.inputClass} value={this.state.location} type='text' name="location-input" placeholder='City/Zip'></input>

      <select className='city-select'>

        {this.state.cityArray.length &&
          this.state.cityArray.map(city=>{
            return <CityOption city={city}/>

          })
        }

      </select>

      <div onClick={(event)=>{
        event.preventDefault();
        if (this.state.location) {
          this.props.cleanLocation(this.state.location);
        }
      }} className={this.props.magnifierDivClass}><img className={this.props.magnifierClass} src="./magnifier.svg" alt="search-button"/></div>
      </div>
    )
  }
}
