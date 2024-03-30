import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = (props) => {
    return (
        <div className='navbar-box' style={{ color: props.mode.color, backgroundColor: props.mode.backgroundColor }}>
            <nav>
                <button className='two-bar' type='submit' onClick={(e) => { props.setNavbar(!props.navbar) }}>=</button>
                <ul className={props.navbar ? 'nav-list-mobile' : 'nav-list'}>
                    <Link style={{ color: props.mode.color }} className={props.active == "home" ? "active" : "bar"} onClick={(e) => { props.clickHandler("home") }} to="/Home"><b>Home</b></Link>
                    <Link style={{ color: props.mode.color }} className={props.active == "about" ? "active" : "bar"} onClick={(e) => { props.clickHandler("about") }} to="/About"><b>About</b></Link>
                    <Link style={{ color: props.mode.color }} className={props.active == "contact" ? "active" : "bar"} onClick={(e) => { props.clickHandler("contact") }} to="/Contact"><b>Contact</b></Link>
                    <Link style={{ color: props.mode.color }} className={props.active == "weather" ? "active" : "bar"} onClick={(e) => { props.clickHandler("weather") }} to="/Weather"><b>Weather</b></Link>
                    <Link style={{ color: props.mode.color }} className={props.active == "userdetail" ? "active" : "bar"} onClick={(e) => { props.clickHandler("userdetail") }} to="/Userconfig"><b>UserDetails</b></Link>
                    <label className='switch'>
                        <input type="checkbox" onClick={props.toggleStyle} />
                        <span className='slider'></span>
                    </label>
                    <Link to="login"><button type='submit' onClick={(e) => { props.setTrigger(true) }}>Login</button></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
