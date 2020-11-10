import React from 'react';
import DrawerAndBar from '../../components/DrawerAndBar';
import './index.css';

function SignUp() {
  return (
      <div className="App">
        <input          
          type="username"
          placeholder="email "
          className="Login-SignUp-textbox"
        />
        <input
          type="username"
          placeholder="username "
          className="Login-SignUp-textbox"
        />
        <input
          type="password"
          placeholder="password "
          className="Login-SignUp-textbox"
        />
        <input
          type="password"
          placeholder="re-password "
          className="Login-SignUp-textbox"
        />
        <button className="Login-SignUp-button"  >Sign Up</button>
      </div>
  );
}

export default SignUp;