import React from 'react';
import GoalHeader from '../../components/GoalHeader'; 
import {useGoalsValue} from '../../context'
import UIGoals from '../../components/Goals';
import DrawerAndBar from '../../components/DrawerAndBar';
import Header from '../../components/Header';
import CircularProgress from '@material-ui/core/CircularProgress';
import './index.css';

function Profile() {
  const {Goals} = useGoalsValue();
  return (
      <div className="App">
      <DrawerAndBar profilePage={false}>
        <div className="Login-SignUp-container">
          <input
              type="text"
              placeholder="username "
              className="Login-SignUp-textbox"
          />
          <input
              type="password"
              placeholder="password "
              className="Login-SignUp-textbox"
          />
            
          <button className="Login-SignUp-button" >Log In</button>
        </div>
      </DrawerAndBar>
      </div>
  );
}

export default Profile;
