import React from 'react';
import logo from '../assets/logo.jpeg';
import './forms.css';
import { Link } from 'react-router-dom';



function SignupForm(props) {
    const options = [
        'Electricity',
        'Water',
      ];
    return (
        <div className="forms"> 
            <div className="form-container sigup">
                <form className="form">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <span>MINEMA</span>
                </div>

                <div className="title">
                    <h2 className="reset-title">Welcome</h2>
                </div>

                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Telephone" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Comfirm password" />
                <select>
                    <option>Skills</option>
                    {options.map((option, index) => {
                    return <option key={index}>{option}</option>;
                    })}
                </select>
                <input type="text" placeholder="Preferences" />
                <input type="text" placeholder="Address" />
                <button type="submit">Sign Up</button>
                <Link to='/'>Already have an account? Login here</Link>
                </form>
            </div>
        </div>
    );
}

export default SignupForm;