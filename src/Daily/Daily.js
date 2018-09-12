import React from 'react'

import ForecastImage from '../ForecastImage/ForecastImage'
import './daily.css';

function Daily(props) {


  return (
    <section className="daily-weather">
      <h3>{props.weekday}</h3>
      <ForecastImage icon={props.icon} classLabel="forecast-img" />
      <h3 className="daily-temps">{props.highTemp}° / {props.lowTemp}°</h3>
    </section>
  )

}

export default Daily;
