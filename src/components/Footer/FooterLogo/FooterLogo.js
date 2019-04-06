import React from 'react';
import './FooterLogo.css'
import logo from '../../../assets/images/logo/logo.png';

const FooterLogo = () => {
    return (
        <div className='footer__logo'>
            <a href='/'>
                <img src={logo} alt="logo"/>
            </a>
            <p className='footer__logo-paraph'>© Все права защищены</p>
        </div>
    );
}

export default FooterLogo;
