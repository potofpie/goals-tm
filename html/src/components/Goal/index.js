import React,{useState}  from 'react';
import MonthlyVisual from '../MonthlyVisual'
import WeeklyVisual from '../WeeklyVisual';
import DailyVisual from '../DailyVisual';
import Delete from '@material-ui/icons/Delete';
import CheckCircle from '@material-ui/icons/CheckCircle';
import CircularProgress from '@material-ui/core/CircularProgress';


import IconButton from '@material-ui/core/IconButton';
import { deleteGoal } from '../../actions/deleteGoal';
import { changeText } from '../../actions/changeText';
import './index.css';

function CaseSwitchVisual(goal){
  switch(goal.type) {
    case 'monthly':
      return <MonthlyVisual goal={goal}/>
    case 'weekly':
      return <WeeklyVisual goal={goal}/>
    case 'daily':
      return <DailyVisual goal={goal}/>
    default:
      return 'error'
  }
}  

function Goal(props) {
  const [ saving, setSaving ] = useState(false)
  const [ showSaveComplete, setShowSaveComplete ] = useState(false)
  const [ text, setText ] = useState(props.g.text)
  console.log(showSaveComplete);
  return (
      <div className="Goal-container">
        <div className="Goal-textbox-container">
          <input
            type="text"
            placeholder="enter your goal here"
            value={text}
            className="Goal-textbox"
            onChange={(e)=>{setText(e.target.value)}}
            onBlur={() => { text !== props.g.text ? changeText(setShowSaveComplete,setSaving,text,props.g.id)   : console.log()}}
          />
          {saving ? 
              <CircularProgress size={20}/> 
              : 
              <div className="checkmark"><CheckCircle color='primary' /></div>
          }
        </div>
        {CaseSwitchVisual(props.g)}
        {console.log(props.g.id)}
        <IconButton onClick={() => { deleteGoal(props.g.id) } }>
            <Delete color='primary' />
        </IconButton>
      </div>   
  );
}

export default Goal;


