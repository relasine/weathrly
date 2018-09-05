import React from 'react';
import './current.css';
// import weatherPic from './'

function Current() {

	return (
		<div className="current">
			<aside className="weather-img-aside"> 
				<img src="/partly-cloudy.svg" alt="partlycloudy" className="weather-img"/>
				<h2 className="weather-description">Partly cloudy</h2>
			</aside>
			<article>
				<h1 className="temperature">72°</h1>
				<h2 className="wind"><span className="weather-label">Wind - </span> NNE 5 mph</h2>
				<h2 className="humidity"><span className="weather-label">Humidity - </span> 24%</h2>
				<h2 className="visibility"><span className="weather-label">Visibility - </span> 10.0 mi</h2>
			</article>
		</div>
	)
}

export default Current;