import React from "react";
import Project from "./Project";
import { featureProjects } from "../../Contents/projectContents";

export default function Projects() {
  const projectList = Object.values(featureProjects);
  return (
    <ul className="flex flex-col gap-32">
      {projectList.map(
        ({ link, title, desc, tags, image, responsibilities }, index) => (
          <Project
            key={index}
            {...{
              link,
              title,
              desc,
              tags,
              image,
              responsibilities,
            }}
          />
        )
      )}
    </ul>
  );
}
