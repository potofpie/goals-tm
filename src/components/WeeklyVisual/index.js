import React from 'react';
import BlockVisual from '../BlockVisual'
import './index.css';

function initMarkerArray(progress) {
  // console.log()
  let array = []
  for(var i = 1; i < 5; i++){
    // console.log(progress)
    // console.log(i <= progress)
    array.push([i <= progress, i]); 
  }
  // console.log(array);
  return array
}

function WeeklyVisual(props) {
  return (
    
      <div className='WeeklyVisual-container'>
        {initMarkerArray(props.goal.progress).map( 
          (marker) => 
          {
            return <BlockVisual goalId={props.goal.id} marker={marker}/>
          })}
      </div>   
  );
}

export default WeeklyVisual;
