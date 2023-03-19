import React, { useState, useRef, useLayoutEffect } from "react";
import symbolMoon from "../../Assets/svg/moon.svg";
import symbolFingerLight from "../../Assets/svg/finger-light.svg";
import { socialLinks } from "../../Contents/siteContents";
import "./Footer.scss";

function Footer() {
  // console.log(`:`, Object.values(socialLinks));
  console.log(`:`, Object.entries(socialLinks)[0][0]);
  const socialLinkList = Object.entries(socialLinks);
  return (
    <footer
      className="flex items-end p-20 mt-10 bg-gray-900 bg-no-repeat section-cta"
      style={{
        backgroundImage: `url(${symbolMoon})`,
      }}
    >
      <div>
        <h4 className="mb-2 font-medium text__light">Wanna know more?</h4>
        <div className="flex items-center">
          <h2 className="inline text__light">Send me a message</h2>
          <img
            src={symbolFingerLight}
            className="inline w-12 ml-6 img-finger animate__animated animate__shakeX animate__infinite"
          />
        </div>
      </div>
      <ul className="flex gap-5 ml-auto mr-32">
        {socialLinkList?.map((link, index) => (
          <li key={index}>
            <a
              className="tracking-wider uppercase text__light"
              href={link[1]}
              target="_blank"
              rel="noopenner noreferrer"
            >
              {link[0]}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
