import React from 'react';

import ForecastImage from '../ForecastImage/ForecastImage';
import './current.css';


function Current(props) {
	return (
		<div className="current">
				<h3 className='current-location'>{props.data.display_location.full} - <span className='day-label'>{props.day}</span> </h3>
			<section className='current-weather-data'>
				<aside className="weather-img-aside">
					<ForecastImage icon={props.data.icon}
												 classLabel="weather-img"/>
					<h2 className="weather-description">{props.data.weather}</h2>
				</aside>
				<article className="current-weather-right-container">

					<h1 className="temperature">{Math.floor(props.data.temp_f)}°</h1>
					<h2 className="wind"><span className="weather-label wind-data">Wind - </span>{props.data.wind_dir} {props.data.wind_mph} mph</h2>
					<h2 className="humidity"><span className="weather-label humidity-data">Humidity - </span> {props.data.relative_humidity}</h2>
					<h2 className="highlow"><span className="weather-label high-low">High/Low - </span> {props.forecastTemp.high.fahrenheit}°/{props.forecastTemp.low.fahrenheit}°</h2>
				</article>
			</section>
		</div>
	)
}

export default Current;
