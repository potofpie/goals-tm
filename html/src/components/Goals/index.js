import React from 'react';
import Goal from '../Goal'
import './index.css';

function Goals(props) {
  return (
      <div className="Goals-container">
      {props.goals.map(g =>  
        <Goal g={g}/>
      )}
      </div>   
  );
}

export default Goals;
