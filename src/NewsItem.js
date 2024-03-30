import React, { Component, useEffect } from 'react'
import './NewsItem.css'

export class NewsItem extends Component {
    render() {
        let { title, description, imgUrl, newsUrl } = this.props;
        let color = this.props.mode.color;
        let background = this.props.mode.backgroundColor;

        return (
            <>
                <div className='news-box' style={{ backgroundColor: `${background}`, color: `${color}` }} >
                    <a href={newsUrl} target='_blank'><img className='img' src={imgUrl} alt='img'></img></a>
                    <h3>{title}...</h3>
                    <p>{description}...</p>
                    <button className='button'><a href={newsUrl} target='_blank'>Read More</a></button>
                </div>
            </>
        )
    }
}

export default NewsItem
