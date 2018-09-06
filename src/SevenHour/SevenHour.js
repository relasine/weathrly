import React from 'react';

import Hourly from '../Hourly/Hourly'
import './sevenhour.css';

function SevenHour(props) {

  const sevenHourProps = props.data.splice(0, 7);

  return (
    <article className='seven-hour'>
      {sevenHourProps.map((time) => {
        return <Hourly  data={time}
                        key={time.FCTTIME.hour} />
      })}
    </article>
  )
}

export default SevenHour