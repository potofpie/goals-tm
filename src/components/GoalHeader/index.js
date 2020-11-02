import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import { addGoal } from '../../actions'
import './index.css';

function GoalHeader(props) {

  return (
      <div className="GoalHeader-container">
        <h2>{props.text}</h2>
        <div className='GoalHeader-addbutton-container'>
          <IconButton value='monthly' onClick={() => { console.log(props.type); addGoal(props.type);} }>
            <AddCircleIcon color='primary' />
          </IconButton>
        </div>
        <Divider />
      </div>   
  );
}

export default GoalHeader;
