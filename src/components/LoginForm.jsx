import React from 'react';
import logo from '../assets/logo.jpeg';
import './forms.css';
import { Link } from 'react-router-dom';

function LoginForm(props) {
  return (
    <div className="forms">
      <div className="form-container login">
        <form className="form">
          <div className="logo">
            <img src={logo} alt="logo" />
            <span>MINEMA</span>
          </div>

          <div className="title">
            <h2>Welcome</h2>
            <p>Online system for minema</p>
          </div>

          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button type="submit">Login</button>
          <Link to="/reset">Forgot password?</Link>
          <span> Or </span>
          <Link to="/signup">Sign up</Link>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
