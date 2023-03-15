import React, { useState, useRef, useLayoutEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logoText, introData, socialLinks } from "../../Contents/siteContents";
import Menu from "./Menu";
import Eyeball from "../Eyeball";
import "./Header.scss";

function Header() {
  const [isActive, setActive] = useState("false");
  const [isSticky, setIsSticky] = useState("false");
  const headerRef = useRef();
  const isSmScreen = useMediaQuery({ query: "(max-width: 639px)" });

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

  const onToggle = () => {
    setActive(!isActive);
  };

  const headerClasses = ["px-32", "bg__main", "fixed", "w-full", "z-50","transition-all" ];

  if (isSticky) {
    headerClasses.shift('px-32');
    headerClasses.push("sticky px-10");
  }

  return (
    <header className={headerClasses.join(" ")} ref={headerRef}>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col px-3 py-1">
          <Link
            className='my-2 text-xl font-semibold font__heading text__primary'
            to="/react-portfolio"
          >
            {logoText}
          </Link>
          {!isSticky && (
            <small className="text-xs">
              Creative Developer, based in Auckland, New Zealand
            </small>
          )}
        </div>

        {isSmScreen ? (
          <div className="my-auto min-h-fit">
            <button type="button" className="menu__trigger" onClick={onToggle}>
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        ) : (
          <>
            <div className="absolute flex -translate-x-1/2 -translate-y-1/2 top-1/2 eyeball__container left-1/2">
              <Eyeball />
              <Eyeball />
            </div>
            <Menu />
          </>
        )}
      </div>

      <div
        className={`site__navigation bg__main ${
          !isActive && "visible flex flex-col justify-center"
        }`}
      >
        <div className="relative flex items-center justify-center menus__wrapper">
          <Menu />
        </div>
        <div className="flex flex-col justify-between w-full p-3 menus__footer flex-md-row md:items-center">
          <div className="flex">
            <a
              className="p-1 text-sm"
              target="_blank"
              href={socialLinks.linkedin}
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="p-1 text-sm"
              target="_blank"
              href={socialLinks.github}
              rel="noreferrer"
            >
              Github
            </a>
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

export default Header;
