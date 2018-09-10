import React from 'react';

import Daily from '../Daily/Daily'
import './tenday.css';

function TenDay(props) {

  if(props.toggleState) {
    return (
      <article className='ten-day'>
        {props.data.map((day) => {
          return <Daily  data={day}
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
