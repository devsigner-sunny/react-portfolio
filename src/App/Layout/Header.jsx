import React, { useState, useRef, useLayoutEffect } from "react";
import { NavLink } from "react-router-dom";
import { logoText } from "../../Contents/siteContents";
import Menu from "../../Components/Menu";
import Eyeball from "../../Components/Eyeball";

function Header() {
  const [isSticky, setIsSticky] = useState("false");
  const headerRef = useRef();

  const handleClickLogo = () => {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  };

  useLayoutEffect(() => {
    const fixedTop = headerRef.current.offsetTop;

    const stickyHeader = () => {
      if (window.pageYOffset > fixedTop) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", stickyHeader);
  }, []);

  const headerClasses = [
    "px-32",
    "bg__main",
    "fixed",
    "w-full",
    "z-10",
    "transition-all",
  ];

  if (isSticky) {
    headerClasses.shift("px-32");
    headerClasses.push("fixed w-100 px-10 bg-emerald-600");
  }

  return (
    <header className={headerClasses.join(" ")} ref={headerRef}>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col py-1">
          <h1
            className="my-2 text-xl font-semibold font__heading"
            onClick={handleClickLogo}
          >
            <NavLink
              to="/"
              className={isSticky ? "text__light" : "text-emerald-600"}
            >
              {logoText}
            </NavLink>
          </h1>
          {!isSticky && (
            <small className="text-xs">
              Creative Developer, based in Auckland, New Zealand
            </small>
          )}
        </div>

        <div className="absolute flex -translate-x-1/2 -translate-y-1/2 top-1/2 eyeball__container left-1/2">
          <Eyeball color={isSticky ? "#0f172a" : "#059669"} />
          <Eyeball color={isSticky ? "#0f172a" : "#059669"} />
        </div>
        <Menu className={isSticky ? "text__light" : "text-gray-900"} />
      </div>
    </header>
  );
}

export default Header;
