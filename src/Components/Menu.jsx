import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { NavContext } from "../Context/NavContext";

function Menu() {
  const navLinks = ["Work", "About", "Contact"];

  const { activeLinkId } = useContext(NavContext);
  console.log(activeLinkId);

  const renderNavkLink = (content) => {
    const scrollToId = content.toLowerCase();

    const handleClickNav = () => {
      document
        .getElementById(scrollToId)
        .scrollIntoView({ behavior: "smooth" });
    };

    return (
      <li className="p-4 font-semibold text-center">
        <NavLink
          to={`#${content}`}
          onClick={handleClickNav}
          className={activeLinkId === content ? "bg-green-400" : "bg-red-500"}
        >
          {content}
        </NavLink>
      </li>
    );
  };

  return (
    <nav className="hoho">
      <ul className="block pl-0 text-3xl list-none menus md:text-xl md:flex">
        {navLinks.map((nav) => renderNavkLink(nav))}
      </ul>
    </nav>
  );
}

export default Menu;
