import React from "react";
import BrowserContainer from "../BrowserContainer";
import "./Project.scss";

export default function Project({ ...props }) {
  const { image, title, desc, link, tags } = props;

  return (
    <a
      className="flex gap-10 project"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <BrowserContainer>
        <img src={image} className="object-cover object-center w-full h-full" />
      </BrowserContainer>
      <div className="project-contents">
        <h3 className="my-2 font-semibold">{title}</h3>
        <ul className="flex my-2">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="px-2 py-1 m-1 text-sm rounded-md bg__secondary text__ivory"
            >
              #{tag}
            </li>
          ))}
        </ul>
        <p>{desc}</p>
      </div>
    </a>
  );
}
