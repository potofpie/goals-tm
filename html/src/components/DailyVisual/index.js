import React from 'react';
import TickerVisual from '../TickerVisual';
import './index.css';

function DailyVisual(props) {
  return (
      <div className='DailyVisual-container'>
        <TickerVisual goal={props.goal}/>
      </div>   
  );
}

export default DailyVisual;
