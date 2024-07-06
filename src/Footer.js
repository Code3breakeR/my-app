import React from 'react'
import './Footer.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {
    return (
        <div>
            <footer className='foot' style={{ color: props.mode.color, backgroundColor: props.mode.backgroundColor }}>
                <ul className='footer'>

                    <Link style={{ color: props.mode.color, backgroundColor: props.mode.backgroundColor }} className={props.active === "News" ? "active" : "bar"} onClick={(e) =>{props.clickHandler("News")}}  to="/News"><strong>News</strong></Link>
                    <Link style={{ color: props.mode.color, backgroundColor: props.mode.backgroundColor }} className={props.active === "Calci" ? "active" : "bar"} onClick={(e) =>{props.clickHandler("Calci")}} to="/Calci"><strong>Calculator</strong></Link>
                    <Link style={{ color: props.mode.color, backgroundColor: props.mode.backgroundColor }} className={props.active === "Anime" ? "active" : "bar"} onClick={(e) =>{props.clickHandler("Anime")}} to="/Anime"><strong>Animation</strong></Link>
                    <Link style={{ color: props.mode.color, backgroundColor: props.mode.backgroundColor }} className={props.active === "img" ? "active" : "bar"} onClick={(e) =>{props.clickHandler("img")}} to="/img"><strong>Images</strong></Link>

                </ul>
            </footer>
        </div>
    )
}

export default Footer;
