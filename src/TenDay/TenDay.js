import React from 'react';

import Daily from '../Daily/Daily'
import './tenday.css';

function TenDay(props) {

  if(props.toggleState) {
    return (
      <article className='ten-day'>
        {props.data.map((day) => {
          return <Daily   weekday={day.date.weekday}
                          data={day}
                          icon={day.icon}
                          highTemp={day.high.fahrenheit}
                          lowTemp={day.low.fahrenheit}
                          key={day.period} />
        })}
      </article>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default TenDay
