import React from 'react';

import Current from './current/Current.js';

const weatherImages = [
  {image: './sun.svg', property: 'clear'},
  {image: './moon-phase-outline.svg', property: 'nt_clear'},
  {image: './t-storm.svg'},
  {image: './rainy.svg', property: 'rain'},
  {image: './rainy-cloud-at-night.svg', property: 'nt_rain'},
  {image: './rainy.svg', property: 'chancerain'},
  {image: './rainy-cloud-at-night.svg', property: 'nt_chancerain'},
  {image: './cloud.svg', property: 'cloudy'},
  {image: './cloud.svg', property: 'nt_cloudy'},
  {image: './partly-cloudy.svg', property: 'partlycloudy'},
  {image: './dark-night.svg', property: 'nt_partlycloudy'},
  {image: './snowy.svg', property: 'snow'},
  {image: './snowy.svg', property: 'nt_snow'},
  {image: './snowy.svg', property: 'chancesnow'},
  {image: './snowy.svg', property: 'nt_chancesnow'},
  {image: './windy.svg'}
]

function WeatherImage(props){

  changeImage(){

  }

  return(
    <img src={this.changeImage} alt="partlycloudy" className="weather-img"/>
  )
}
