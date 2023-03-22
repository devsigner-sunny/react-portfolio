import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { NavContext } from "../Context/NavContext";

function Menu({ className }) {
  const navLinks = ["Work", "About", "Contact"];

  const { activeLinkId } = useContext(NavContext);
  const renderNavkLink = (content) => {
    const scrollToId = content.toLowerCase();

    const handleClickNav = () => {
      document
        .getElementById(scrollToId)
        .scrollIntoView({ behavior: "smooth" });
    };

    const navLinkClasses = ["font__heading"];

    console.log(`active::`, activeLinkId);
    console.log(`content::`, content);

    if (activeLinkId === content) {
      navLinkClasses.push("text-slate-900");
    }

    return (
      <li key={content} className="p-4 font-semibold text-center">
        <NavLink
          to={`#${content}`}
          onClick={handleClickNav}
          className={navLinkClasses.join(" ")}
        >
          {content}
        </NavLink>
      </li>
    );
  };

  return (
    <nav className={className}>
      <ul className="block pl-0 text-3xl list-none menus md:text-xl md:flex">
        {navLinks.map((nav) => renderNavkLink(nav))}
      </ul>
    </nav>
  );
}

export default Menu;
