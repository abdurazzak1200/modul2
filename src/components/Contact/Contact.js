import React from 'react';
import './Contact.css';
import logo from '../../assets/images/logo/logo.png';
import face from '../../assets/images/social/facebook-logo-button.png'
import insta from '../../assets/images/social/instagram.png'
import telegram from '../../assets/images/social/telegram.png'

const Contact = () => {
    return (
        <div className='contact'> 
            <div className="container">
                <h1 className="contact__logo">
                    <img src={logo} alt="logo"/>
                </h1>
                <p className="contact__parahp">
                    News - ведущее информационное агентство, публикует последние новости Кыргызстана. <br/>
                    Мы придерживаемся высоких стандартов, оперативны и нейтральны.
                </p>
                <p className="contact__parahp">
                    +996 312 98-69-70, info@knews.kg <br/>
                    Кыргызская Республика, г. Бишкек, Пр. Чуй д. 126, кв. 11 <br/>
                    Реклама и сотрудничество: +996 550 38-38-75, <a href="/Contact" className="contact__link-news">pr@knews.kg</a> 
                </p>
                <p className="contact__parahp">
                    Редакция не несет ответственности за содержимое перепечатанных материалов и высказывания отдельных лиц.  <br/>
                    При перепечатке материалов сайта, активная гиперссылка обязательна.  <br/>
                    © 2019, News
                </p>
                <div className="contact__call">
                    <h4 className="call__title">
                        СВЯЗАТЬСЯ С НАМИ:
                    </h4>
                    <ul className="call__list">
                        <li className="call__item">
                            <a href="insta" className="call__li">
                                <img className='call__img' src={face} alt=""/>
                            </a>
                        </li>
                        <li className="call__item">
                            <a href="insta" className="call__li">
                                <img className='call__img' src={insta} alt=""/>
                            </a>
                        </li>
                        <li className="call__item">
                            <a href="insta" className="call__li">
                                <img className='call__img' src={telegram} alt=""/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Contact;
