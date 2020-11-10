import React from 'react';
import ProgressBarVisual from '../ProgressBarVisual';
import './index.css';

function MonthlyVisual(props) {
  return (
      <div className='MonthlyVisual-container'>
        <ProgressBarVisual goal={props.goal}/>
      </div>   
  );
}

export default MonthlyVisual;
