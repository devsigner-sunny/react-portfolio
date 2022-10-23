import React, { useState } from 'react';
import './Menu.css';
import { VscGrabber, VscClose } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { logoText, socialLinks } from '../../content';

function Menu() {
  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle('ovhidden');
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac" to="/">
            {logoText}
            {' '}
            🌞
          </Link>
          <div className="d-flex align-items-center">
            <button type="button" className="menu__button  nav_ac" onClick={handleToggle}>
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>

          </div>
        </div>

        <div className={`site__navigation ${!isActive ? 'menu__opend' : ''}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper bg-white">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                    <Link onClick={handleToggle} to="/" className="my-3">Home</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/work" className="my-3">Work</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/about" className="my-3">About</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/contact" className="my-3"> Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
              <a href={socialLinks.linkedin}>LinkedIn</a>
              <a href={socialLinks.github}>Github</a>
            </div>
            <p className="copyright m-0">
              copyright __
              {logoText}
            </p>
          </div>
        </div>
      </header>
      <div className="br-top" />
      <div className="br-bottom" />
      <div className="br-left" />
      <div className="br-right" />

    </>
  );
}

export default Menu;
