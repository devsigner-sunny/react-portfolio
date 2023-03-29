import React from "react";
import ProjectThumb from "../Components/Projects/ProjectThumb";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import { featureProjects } from "../Contents/projectContents";
import { useNav } from "../Hooks/useNav";

export default function Work() {
  const projectList = Object.values(featureProjects);
  const workRef = useNav("Work");

  return (
    <section ref={workRef} id="work" className="py-20">
      <SectionTitle isRight title="Works" />
      <div className="px-6 lg:px-16 xl:px-32">
        {projectList.map(
          (
            { link, title, desc, tags, keywords, image, responsibilities },
            index
          ) => (
            <div key={index}>
              <ProjectThumb
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
            </div>
          )
        )}
      </div>
    </section>
  );
}
