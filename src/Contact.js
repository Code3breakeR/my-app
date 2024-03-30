import React from 'react'
import './Contact.css'
import 'animate.css';

function Contact() {
    return (
        <div className='social'>
            <div className='insta'>
                <a href='https://instagram.com/' target='_blank'>I</a>
                <span className='i'>InstaGram</span>
            </div>
            <div className='face'>
                <a href='https://facebook.com/' target='_blank'>F</a>
                <span className='f'>FaceBook</span>
            </div>
            <div className='twit'>
                <a href='https://twitter.com/' target='_blank'>T</a>
                <span className='t'>Twitter</span>
            </div>
            <div className='git'>
                <a href='https://github.com/' target='_blank'>G</a>
                <span className='g'>GitHub</span>
            </div>
            <div className='youtube'>
                <a href='https://www.youtube.com/' target='_blank'>Y</a>
                <span className='y'>YouTube</span>
            </div>
        </div>
    )
}

export default Contact
