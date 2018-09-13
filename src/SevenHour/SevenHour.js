import React from 'react';

import Hourly from '../Hourly/Hourly'
import './sevenhour.css';

function SevenHour(props) {
  const sevenHourProps = props.data.slice(0, 7);

  if(props.toggleState) {
    return (
      <article className='seven-hour'>
        {sevenHourProps.map((time) => {
          return <Hourly  data={time}
                          key={time.FCTTIME.hour} />
        })}
      </article>
    );

  } else {
    return (
      <div></div>
    )
  }
}

export default SevenHour


