import React from 'react';

import Daily from '../Daily/Daily'
import './tenday.css';

function TenDay(props) {

  const tenDayArray = props.data.filter(period=>{
    return !period.title.includes('Night');
  })

  if(props.toggleState) {
    return (
      <article className='ten-day'>
        {tenDayArray.map((day) => {
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
