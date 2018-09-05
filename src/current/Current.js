import React from 'react';
import './current.css';
// import weatherPic from './'

function Current(props) {

console.log(props.data.current_observation);

	return (
		<div className="current">
			<aside className="weather-img-aside">
				<img src="/partly-cloudy.svg" alt="partlycloudy" className="weather-img"/>
				<h2 className="weather-description">{props.data.current_observation.weather}</h2>
			</aside>
			<article>

				<h1 className="temperature">{props.data.current_observation.temp_f}°</h1>
				<h2 className="wind"><span className="weather-label wind-data">Wind - </span>{props.data.current_observation.wind_dir} {props.data.current_observation.wind_mph} mph</h2>
				<h2 className="humidity"><span className="weather-label humidity-data">Humidity - </span> {props.data.current_observation.relative_humidity}</h2>
				<h2 className="visibility"><span className="weather-label visibility-data">Visibility - </span> {props.data.current_observation.visibility_mi} mi</h2>
			</article>
		</div>
	)
}

export default Current;
