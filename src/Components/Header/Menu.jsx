import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  const menuList = [
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

    <ul className="block pl-0 text-3xl list-none menus md:text-xl md:flex">
            {menuList.map(({ link, title }, index) => (
              <li className="p-4 font-semibold text-center" key={index}>
                <Link to={link} className="my-3">{title}</Link>
              </li>
            ))}
    </ul>
  );
}

export default Menu;
