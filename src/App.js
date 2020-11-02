import React from 'react';
import './App.css';

import { 
  Signup, 
  Login, 
  Profile 
} from './pages';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
