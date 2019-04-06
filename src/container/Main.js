import React from 'react';
import './Main.css'

import MainNews from '../components/MainNews.js/MainNews';
import Banner from '../components/Banner/Banner';

const Main = () => {
    return (
        <div className='main'>
            <Banner/>
            <MainNews/>
        </div>
    );
}

export default Main;
