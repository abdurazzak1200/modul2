import React from 'react';
import './Main.css'

import MainNews from '../components/MainNews.js/MainNews';
import Example from '../UI/Carousel/Carousel.js'

const Main = () => {
    return (
        <div className='main'>
            <Example/>
            <MainNews/>
        </div>
    );
}

export default Main;
