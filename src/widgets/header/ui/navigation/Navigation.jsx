import React, { useState } from 'react';
import'./Navigation.scss';

function Navigation()  {
    const [isActive, setIsActive] = useState(false);
    return (
        <nav className='header__navigation'>
            <div className="dropdown">
                <div className='dropdown__button navigation__link' onClick={e => setIsActive(!isActive)}>Разделы сайта
                {isActive ? <span className="icon navigation__icon navigation__icon_opened"></span> : <span className="icon navigation__icon navigation__icon_open_closed"></span>}
                </div>
                {isActive && (<ul className="dropdown__content">
                        <li><a className="dropdown-item" href='#hero'>Виды ремесел</a></li>
                        <li><a className="dropdown-item" href='#advantages'>Преимущества</a></li>
                        <li><a className="dropdown-item" href='#articles'>Статьи авторов</a></li>
                        <li><a className="dropdown-item" href='#onboarding'>Как это работает</a></li>
                        <li><a className="dropdown-item" href='#contact-us'>Контакты</a></li>
                        <li><a className="dropdown-item" href='#'>О нас</a></li>
                    </ul>)}
            </div>
        </nav>
    )
}
export default Navigation;