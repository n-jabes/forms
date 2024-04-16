import React from 'react';
import logo from '../assets/logo.jpeg';
import './forms.css';
import { Link } from 'react-router-dom';


function ResetForm(props) {
    return (
        <div className="forms"> 
            <div className="form-container reset">
                <form className="form">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <span>MINEMA</span>
                </div>

                <div className="title">
                    <h2 className="reset-title">Reset your password</h2>
                </div>

                <input type="email" placeholder="Email" />
                <button type="submit">Submit</button>
                <Link to='/'>Remember password Login here?</Link>
                </form>
            </div>
        </div>
    );
}

export default ResetForm;