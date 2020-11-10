import React from 'react';
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Login from './pages/Login'
import DrawerAndBar from './components/DrawerAndBar';
import './App.css';
import { useState } from 'react';
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
                  <DrawerAndBar profilePage={false}>
                    <Signup />
                  </DrawerAndBar>
                </Route>
                <Route path="/login">
                  <DrawerAndBar profilePage={false}>
                    <Login />
                  </DrawerAndBar>
                </Route>
                <Route path="/profile">
                  <DrawerAndBar profilePage={true}>
                    <Profile />
                  </DrawerAndBar>
                </Route>
            </Switch>
          </Router>
      </div>
  );
}

export default App;
