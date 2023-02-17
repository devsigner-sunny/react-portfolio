import React, { useState } from 'react';
import { VscGrabber, VscClose } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { logoText, socialLinks } from '../../content';
import './Menu.scss';

function Menu() {
  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    setActive(!isActive);
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
    <header className="bg__main">
      <div className="flex items-center justify-between w-full">
        <div>
          <Link className="px-3 py-1" to="/">
            {logoText}
            {' '}
            🌞
          </Link>
        </div>
        <div className="my-auto min-h-fit">
          <button type="button" className="menu__trigger" onClick={handleToggle}>
            {!isActive ? <VscClose /> : <VscGrabber />}
          </button>
        </div>
      </div>

      <div className={`site__navigation bg__main ${!isActive && 'visible flex flex-col justify-center'}`}>
        <div className="relative flex items-center justify-center menus__wrapper">
          <ul className="pl-0 list-none menus md:py-20">
            {menuList.map(({ link, title }, index) => (
              <li className="p-4 text-center" key={index}>
                <Link onClick={handleToggle} to={link} className="my-3 ">{title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-between w-full p-3 menus__footer flex-md-row md:items-center">
          <div className="flex">
            <a className="p-1 text-sm" target="_blank" href={socialLinks.linkedin} rel="noreferrer">LinkedIn</a>
            <a className="p-1 text-sm" target="_blank" href={socialLinks.github} rel="noreferrer">Github</a>
          </div>
          <p className="m-0 text-sm copyright">
            copyright__
            {logoText}
          </p>
        </div>
      </div>
    </header>
  );
}

export default Menu;
