import React from 'react';
import './MainNews.css';
import {NavLink} from 'react-router-dom';
import News1 from '../../assets/images/news/news.bishkek.jpg';
import News2 from '../../assets/images/news/news2.jpg';
import News3 from '../../assets/images/news/news3.jpg';

const MainNews = () => {
    return (
        <div className='main__news'>
            <div className='container'>
                <ul className='main__news-list'> 
                    <li className='main__news-item'>
                        <div className='news-item__img-block'>
                            <img src={News1} alt='news' className='news-item__img'/>
                            <div className='news-item__time'>14:14 05.04.2019</div>
                            <div className='news-item__blog'>Пострадавших в ДТП стало вдвое меньше — МВД о "Безопасном городе"
                            </div>
                            <p className='news-item__paraph'>Отмечается, что нарушения Правил дорожного движения сократились более чем на треть.
                            </p>
                        </div>
                    </li>
                    <li className='main__news-item'>
                        <div className='news-item__img-block'>
                            <img src={News2} alt='news' className='news-item__img'/>
                            <div className='news-item__time'>13:24 05.04.2019</div>
                            <div className='news-item__blog'>Слышу сказки 10-летней давности — Абылгазиев двум главным энергетикам
                            </div>
                            <p className='news-item__paraph'>Глава правительства напомнил, что с каждым годом растут выплаты по иностранным кредитам, взятым на развитие энергосектора.
                            </p>
                        </div>
                    </li>
                    <li className='main__news-item'>
                        <div className='news-item__img-block'>
                            <img src={News3} alt='news' className='news-item__img'/>
                            <div className='news-item__time'>13:16 05.04.2019</div>
                            <div className='news-item__blog'>В суд направили дело экс-главы таможни Кыргызстана Адамкула Жунусова
                            </div>
                            <p className='news-item__paraph'>Бывшего главу ГТС задержали в конце прошлого года в аэропорту Баку, куда он прилетел из Нью-Йорка.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MainNews;
