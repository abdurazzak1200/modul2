import React from 'react';
import './Footer.css';
import FooterNav from './FooterNav/FooterNav';
import FooterSocial from './FooterSocial/FooterSocial';
import FooterLogo from './FooterLogo/FooterLogo';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className="footer__nav-block">
                    <FooterNav/>
                    <FooterSocial/>
                    <FooterLogo/>
                </div>
            </div>
        </div>
    );
}

export default Footer;
