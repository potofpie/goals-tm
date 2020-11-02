import React,{ useState }  from 'react';
import './index.css';
import { changeProgress } from '../../actions';


function BlockVisual(props) {
  const [ status, index ] = props.marker;
  const id = props.goalId;
  return (
    <div 
        className={status ? 'active-block' : 'inactive-block'} 
        onClick={() => status ? changeProgress(index-1, id) : changeProgress(index, id)} 
    />

  );
}

export default BlockVisual;
