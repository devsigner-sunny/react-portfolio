import React from "react";
import ProjectThumb from "../Components/Projects/ProjectThumb";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import { featureProjects } from "../Contents/projectContents";
import { useNav } from "../Hooks/useNav";

export default function Work() {
  const workRef = useNav("Work");
  const projectList = Object.values(featureProjects);

  return (
    <section ref={workRef} id="work" className="py-20">
      <SectionTitle isRight title="Works" />
      {projectList.map(
        (
          { link, title, desc, tags, keywords, image, responsibilities },
          index
        ) => (
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
    </section>
  );
}
