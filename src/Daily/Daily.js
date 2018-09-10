import React from 'react'

import ForecastImage from '../ForecastImage/ForecastImage'
import './daily.css';

function Daily(props) {


  return (
    <section className="hourly-weather">
      <h3>{props.data.date.weekday}</h3>
      <ForecastImage icon={props.data.icon} classLabel="forecast-img" />
      <h3 className="daily-temps">{props.data.high.fahrenheit}° / {props.data.low.fahrenheit}°</h3>
    </section>
  )

}

export default Daily;
