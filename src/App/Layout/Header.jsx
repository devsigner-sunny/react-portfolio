import React, { useState, useRef, useLayoutEffect } from "react";
import { NavLink } from "react-router-dom";
import { logoText } from "../../Contents/siteContents";
import Menu from "../../Components/Menu";
import Eyeball from "../../Components/Eyeball";
import { VscGrabber, VscClose } from "react-icons/vsc";

function Header() {
  const [isActive, setIsActive] = useState("false");
  const [isSticky, setIsSticky] = useState("false");
  const headerRef = useRef();

  const onToggle = () => {
    setIsActive(!isActive);
  };

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
    "px-6",
    "lg:px-10",
    "xl:px-20",
    "bg__main",
    "fixed",
    "top-0",
    "w-full",
    "z-30",
    "transition-all",
  ];

  if (isSticky) {
    delete headerClasses[1];
    delete headerClasses[2];
    headerClasses.push("fixed w-100  bg-emerald-600");
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
              to="/react-portfolio"
              className={isSticky ? "text__light" : "text-emerald-600"}
            >
              {logoText}
            </NavLink>
          </h1>
          {!isSticky && <small>Creative Developer, based in Perth, AU</small>}
        </div>

        <div className="absolute hidden -translate-x-1/2 -translate-y-1/2 md:flex top-1/2 eyeball__container left-1/2">
          <Eyeball color={isSticky ? "#0f172a" : "#059669"} />
          <Eyeball color={isSticky ? "#0f172a" : "#059669"} />
        </div>
        <Menu
          className={`hidden lg:block ${
            isSticky ? "text__light" : "text-gray-900"
          }`}
        />

        <div className="flex lg:hidden">
          <button
            type="button"
            className={`p-1 rounded-full ${
              isSticky
                ? "bg__light text-emerald-600"
                : "bg-emerald-600 text__light"
            }`}
            onClick={onToggle}
          >
            {!isActive ? (
              <VscClose className="text-2xl font-bold" />
            ) : (
              <VscGrabber className="text-2xl font-bold" />
            )}
          </button>
        </div>
        <div
          className={`${
            !isActive
              ? "bg-emerald-600 min-w-[20vh] animate__animated animate__fadeInRight animate__faster h-screen  absolute right-0"
              : "hidden"
          } ${isSticky ? "top-12" : "top-16"}`}
        >
          <Menu className="text__light" />
        </div>
      </div>
    </header>
  );
}

export default Header;
