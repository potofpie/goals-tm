import React from 'react';
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Login from './pages/Login'
import './App.css';
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
