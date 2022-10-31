import React, { useState } from 'react';
import { VscGrabber, VscClose } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { logoText, socialLinks } from '../../content';
import './Menu.scss';

function Menu() {
  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle('ovhidden');
  };

  const menuList = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Work',
      link: '/work',
    },
    {
      title: 'About',
      link: '/about',
    },
    {
      title: 'Contact',
      link: '/contact',
    },
  ];

  return (
    <header>
      <div className="w-100 z-index-sticky">
        <div>
          <Link className="navbar-brand nav__logo" to="/">
            {logoText}
            {' '}
            🌞
          </Link>
        </div>
        <div className="ms-auto">
          <button type="button" className="menu__trigger" onClick={handleToggle}>
            {!isActive ? <VscClose /> : <VscGrabber />}
          </button>
        </div>
      </div>

      <div className={`site__navigation bg-white ${!isActive && 'visible'}`}>
        <div className="h-100 menus__wrapper p-3 w-100 h-100 position-relative d-flex justify-content-center align-items-center">
          <ul className="menus">
            {menuList.map(({ link, title }, index) => (
              <li className="menu_item" key={index}>
                <Link onClick={handleToggle} to={link} className="my-3">{title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="menus_footer p-3 d-flex flex-column flex-md-row justify-content-between align-items-md-center fixed-bottom w-100">
          <div className="d-flex">
            <a target="_blank" href={socialLinks.linkedin} rel="noreferrer">LinkedIn</a>
            <a target="_blank" href={socialLinks.github} rel="noreferrer">Github</a>
          </div>
          <p className="copyright m-0">
            copyright __
            {logoText}
          </p>
        </div>
      </div>
    </header>
  );
}

export default Menu;
