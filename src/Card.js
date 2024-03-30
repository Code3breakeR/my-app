import React from 'react'

function Card() {
    return (
        <div className='box'>
            <h3>heading</h3>
            <h4>sub heading</h4>

            <img src={require('./pokeball.ico')} width='50'></img><br></br>
            <a href='/'><button className='know'>Know More</button></a>

        </div>
    )
}

export default Card
