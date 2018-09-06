import React from 'react';

import WeatherImage from '../WeatherImage/WeatherImage';
import './current.css';

function Current(props) {

	return (
		<div className="current">
			<aside className="weather-img-aside">
				<WeatherImage icon={props.data.icon}/>
				<h2 className="weather-description">{props.data.weather}</h2>
			</aside>
			<article>

				<h1 className="temperature">{props.data.temp_f}°</h1>
				<h2 className="wind"><span className="weather-label wind-data">Wind - </span>{props.data.wind_dir} {props.data.wind_mph} mph</h2>
				<h2 className="humidity"><span className="weather-label humidity-data">Humidity - </span> {props.data.relative_humidity}</h2>
				<h2 className="visibility"><span className="weather-label visibility-data">Visibility - </span> {props.data.visibility_mi} mi</h2>
			</article>
		</div>
	)
}

export default Current;
