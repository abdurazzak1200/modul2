import React from 'react';
import {NavLink} from 'react-router-dom';
import './FooterNav.css';

const FooterNav = () => {
    return (
        <div className="footer__navigation">
            <h4 className="navigation__title">НАВИГАЦИЯ</h4>
            <ul className="navigation__list">
                <li className="navigation__item">
                    <NavLink className='navigation__link' to='/' exact>Главная</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink className='navigation__link' to='/news' exact>Новости</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink className='navigation__link' to='/Add' exact>Добавить</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink className='navigation__link' to='/contact' exact>Контакты</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default FooterNav;
