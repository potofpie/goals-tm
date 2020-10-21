import React from 'react';
import GoalHeader from '../../components/GoalHeader'; 
import {useGoalsValue} from './../../context'
import UIGoals from '../../components/Goals';
import DrawerAndBar from '../../components/DrawerAndBar';
import Header from '../../components/Header';
import CircularProgress from '@material-ui/core/CircularProgress';
import './index.css';

function Profile() {
  const {Goals} = useGoalsValue();
  return (
      <div className="App">
      <DrawerAndBar profilePage={true}>
        {Goals === 'init' ? <div className="loading-container"><CircularProgress size={60}/></div> :
          <>
          <GoalHeader type="monthly" text='Monthly Goal'/>
          <UIGoals goals={Goals.filter((g)=> g['type'] === 'monthly')} />
          <GoalHeader type="weekly" text='Weekly Goal'/>
          <UIGoals goals={Goals.filter((g)=> g['type'] === 'weekly')} />
          <GoalHeader type="daily" text='Daily Goal'/>
          <UIGoals goals={Goals.filter((g)=> g['type'] === 'daily')} />
          </>
        }
      </DrawerAndBar>
      </div>
  );
}

export default Profile;
