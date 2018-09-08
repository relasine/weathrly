import React from 'react'

import ForecastImage from '../ForecastImage/ForecastImage'
import './hourly.css';

function Hourly(props) {


  return (
    <section className="hourly-weather">
      <h3>{props.data.FCTTIME.civil}</h3>
      <ForecastImage  icon={props.data.icon}
                      classLabel="forecast-img" />
      <h3>{props.data.temp.english}°</h3>
    </section>
  )

}

export default Hourly;
