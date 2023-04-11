import React from "react";
import { VscLinkExternal } from "react-icons/vsc";
import ImageEffect from "../ImageEffect/ImageEffect";
import { useMediaQuery } from "react-responsive";
import "./Project.scss";

export default function Project({ ...props }) {
  const { title, keywords, link, image } = props;
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1280px)" });

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-block project xl:my-20"
    >
      <h2 className="inline text-2xl uppercase sm:text-5xl md:text-6xl xl:text-8xl">
        {title}
      </h2>
      <VscLinkExternal className="inline mb-4 ml-2 text-xl lg:text-3xl" />
      <div className="keyword-list">
        <div className="keyword-list-container">
          {keywords.map((keyword, index) => (
            <span key={index} className="px-2 text-emerald-600 keyword">
              #{keyword}
            </span>
          ))}
        </div>
      </div>
      {!isTabletOrMobile && (
        <ImageEffect
          imgSrc={image}
          className="absolute -translate-x-1/2 opacity-0 -translate-y-2/3 top-1/2 left-1/2"
        />
      )}
    </a>
  );
}
