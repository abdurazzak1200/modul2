import React from 'react';
import './Navigation.css';
import {NavLink} from 'react-router-dom';
import logo from "../../assets/images/logo/logo.png";

const Navigation = () => {
  return (
    <div className='nav'>
      <div className='container flex-container'>
        <div className='nav__logo'>
        <NavLink to='/'>
          <img src={logo} alt="logo" className='logo__img'/>
        </NavLink>
        </div>
        <ul className='nav__list'>
          <li className='nav__item'>
            <NavLink to='/' exact className='nav__link'>Меню</NavLink>
          </li>
          <li className='nav__item'>
          <NavLink to='/news' className='nav__link'>Новости</NavLink>
          </li>
          <li className='nav__item'>
            <NavLink to='/Add' className='nav__link'>Добавить</NavLink>
          </li>
          <li className='nav__item'>
            <NavLink to='/Contact' className='nav__link'>Контакты</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
