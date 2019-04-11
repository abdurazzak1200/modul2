import React from 'react';
import './FooterSocial.css'
import facebook from '../../../assets/images/social/facebook-logo-button.png';
import googlep from '../../../assets/images/social/google-plus.png';
import insta from '../../../assets/images/social/instagram.png';
import linkedin from '../../../assets/images/social/linkedin.png';
import pinterest from '../../../assets/images/social/pinterest.png';
import telegram from '../../../assets/images/social/telegram.png';
import youtube from '../../../assets/images/social/youtube.png';


const FooterSocial = () => {
    return (
        <div className='social'>
            <h4 className="social__title">
                КАК СВЯЗАТЬСЯ?
            </h4>
            <ul className="social__list">
                <li className="social__item">
                    <a href="http://facebook.ru">
                        <img className='social__img' src={facebook} alt="insta" className='social__img' />
                    </a>
                </li>
                <li className="social__item">
                    <a href="http://facebook.ru">
                        <img className='social__img' src={googlep} alt="google" className='social__img' />
                    </a>
                </li>
                <li className="social__item">
                    <a href="http://facebook.ru">
                        <img className='social__img' src={insta} alt="insta" className='social__img' />
                    </a>
                </li>
                <li className="social__item">
                    <a href="http://facebook.ru">
                        <img className='social__img' src={linkedin} alt="linkedin" className='social__img' />
                    </a>
                </li>
                <li className="social__item">
                    <a href="http://facebook.ru">
                        <img className='social__img' src={pinterest} alt="pinterest" className='social__img' />
                    </a>
                </li>
                <li className="social__item">
                    <a href="http://facebook.ru">
                        <img className='social__img' src={telegram} alt="telegram" className='social__img' />
                    </a>
                </li>
                <li className="social__item">
                    <a href="http://facebook.ru">
                        <img className='social__img' src={youtube} alt="youtube" className='social__img' />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default FooterSocial;
