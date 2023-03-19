import React from "react";
import ProjectThumb from "./ProjectThumb";
import { featureProjects } from "../../Contents/projectContents";

export default function ProjectThumbList() {
  const projectList = Object.values(featureProjects);
  return (
    <div>
      {projectList.map(
        ({ link, title, desc, tags, keywords, image, responsibilities }, index) => (
          <ProjectThumb
            key={index}
            {...{
              index,
              link,
              title,
              desc,
              tags,
              keywords,
              image,
              responsibilities,
            }}
          />
        )
      )}
    </div>
  );
}
