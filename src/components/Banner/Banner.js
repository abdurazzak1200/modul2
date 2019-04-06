import React from 'react';
import './Banner.css'
import NewsImg from '../../assets/images/news/news.jpg';


const Banner = () => {
    return (
        <div>
            <div className='main__img-block'>
                <img src={NewsImg} alt='news' className='main__img'/>
            </div>
        </div>
    );
}

export default Banner;
