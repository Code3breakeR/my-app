import React from 'react';
import './Login.css';

function Login(props) {
    return (props.trigger) ? (
        <div className='login'>
            <form className='forms'>
                <h2>Sign In</h2>
                <button className='close' type='button' onClick={(e) => {props.setTrigger(false)}}> X </button>
                <div className='details'>
                    <input type='text'></input>
                    <label>UserName</label>
                </div>
                <div className='details'>
                    <input type='password'></input>
                    <label>Password</label>
                </div>
                <button className='btn' type='submit'>Login</button>
                <button className='link' type='button'>Forgot Password</button>
                <button className='link' type='button'>Sign Up</button>
            </form>
        </div>
    ) : "";
}

export default Login;
