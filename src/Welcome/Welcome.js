import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar'
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
      <SearchBar cleanLocation={this.props.cleanLocation}  checkZip={this.props.checkZip} trie={this.props.trie} inputClass="welcome-input" magnifierDivClass="welcome-magnifier-div" magnifierClass="welcome-magnifier"/>
    )
  }
}
