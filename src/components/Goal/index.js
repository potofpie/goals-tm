import React,{useState}  from 'react';
import TextField from '@material-ui/core/TextField';
import MonthlyVisual from '../MonthlyVisual'
import WeeklyVisual from '../WeeklyVisual';
import DailyVisual from '../DailyVisual';
import Fade from '@material-ui/core/Fade';
import Delete from '@material-ui/icons/Delete';
import CheckCircle from '@material-ui/icons/CheckCircle';
import CircularProgress from '@material-ui/core/CircularProgress';


import IconButton from '@material-ui/core/IconButton';
import { deleteGoal } from '../../actions/deleteGoal';
import { changeText } from '../../actions/changeText';
import './index.css';

function CaseSwitchVisual(goal){
  // console.log(goal.id)
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
  const [ showSaveComlete, setShowSaveComlete ] = useState(false)
  const [ text, setText ] = useState(props.g.text)
  return (
      <div className="Goal-container">
        <div className="Goal-textbox-container">
          <input
            type="text"
            placeholder="enter your goal here"
            value={text}
            className="Goal-textbox"
            onChange={(e)=>{setText(e.target.value)}}
            onBlur={() => { text !== props.g.text ? changeText(setShowSaveComlete,setSaving,text,props.g.id)   : console.log()}}
          />
          {saving ? 
              <CircularProgress size={20}/> 
              : 
              <div className="checkmark"><CheckCircle color='primary' /></div>
          }
        </div>
        {CaseSwitchVisual(props.g)}
        <IconButton onClick={() => { deleteGoal(props.g.id) } }>
            <Delete color='primary' />
        </IconButton>
      </div>   
  );
}

export default Goal;


