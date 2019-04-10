import React from 'react';
import './FooterLogo.css'
import logo from '../../../assets/images/logo/logo.png';

const FooterLogo = () => {
    return (
        <div className='footer__logo'>
            <a href='/'>
                <img src={logo} alt="logo"/>
            </a>
            <p className='footer__logo-paraph'>© Все права защищены 2019-г.</p>
        </div>
    );
}

export default FooterLogo;
