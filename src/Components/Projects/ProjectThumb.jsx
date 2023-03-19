import React from "react";
import { Parallax } from "react-scroll-parallax";
import { VscLinkExternal } from "react-icons/vsc";
import "./ProjectThumb.scss";
import ImageEffect from "../ImageEffect/ImageEffect";

export default function ProjectThumb({ ...props }) {
  const { image, title, keywords, index, link } = props;

  let parallaxMoveValue = [30, 0];

  if (index % 2 === 0) {
    parallaxMoveValue = [-10, 30];
  }

  return (
    <Parallax speed={-5} translateX={parallaxMoveValue}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-block my-20 project-thumb"
      >
        <ImageEffect
          imgSrc={image}
          className="absolute -translate-x-1/2 opacity-0 -translate-y-2/3 top-1/2 left-1/2"
        />
        <h2 className="relative flex uppercase text-8xl">
          {title}
          <VscLinkExternal className="pt-2 mt-2 text-3xl" />
        </h2>
        <div className="keyword-list">
          <div className="keyword-list-container">
            {keywords.map((keyword, index) => (
              <span key={index} className="px-2 keyword text__primary">
                #{keyword}
              </span>
            ))}
          </div>
        </div>
      </a>
    </Parallax>
  );
}
