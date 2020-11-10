import React from 'react';
import DrawerAndBar from '../../components/DrawerAndBar';
import './index.css';

function Login() {
  return (
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
  );
}

export default Login;