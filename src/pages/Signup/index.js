import React from 'react';
import GoalHeader from '../../components/GoalHeader'; 
import {useGoalsValue} from '../../context'
import UIGoals from '../../components/Goals';
import DrawerAndBar from '../../components/DrawerAndBar';
import Header from '../../components/Header';
import CircularProgress from '@material-ui/core/CircularProgress';
import './index.css';

function Signup() {
  const {Goals} = useGoalsValue();
  return (
      <div className="App">
      <DrawerAndBar profilePage={false}>
        
        email
        <input/>
        username
        <input/>
        password 
        <input/>
        re password 
        <input/>
        <button>Sign Up</button>
        

      </DrawerAndBar>
      </div>
  );
}

export default Signup;
