import React from 'react'

import ForecastImage from '../ForecastImage/ForecastImage'
import './daily.css';

function Daily(props) {

  const temp = parseInt(props.data.fcttext.match(/[0-9]+/)[0], 10);

  return (
    <section className="daily-weather">
      <h3>{props.data.title}</h3>
      <ForecastImage  icon={props.data.icon}
                      classLabel='forecast-img' />
      <h3>{temp}°</h3>
    </section>
  )

}

export default Daily;
