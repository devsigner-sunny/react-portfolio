import React from "react";
import { useNav } from "../../Hooks/useNav";
import "./About.scss";
import BrowserContainer from "../../Components/BrowserContainer";
import { aboutContents } from "../../Contents/aboutContents";

function About() {
  const aboutRef = useNav("About");
  return (
    <section ref={aboutRef} id="about">
      <BrowserContainer>
        <div className="p-5 bg-gray-900">
          <small className="text__primary">About /&gt;</small>
          <div className="code-view text__light font__mono">
            <div className="pt-5 pl-3 ml-10 codes">
              {aboutContents.map((content, index) => (
                <div key={index} className="relative pl-3 text-base code">
                  <div className="d-flex">
                    <span className="absolute top-0 text-gray-500 -left-12">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {content.dot && (
                      <span className="inline text-gray-500">
                        {content.dot}
                      </span>
                    )}
                    <span
                      className="inline"
                      dangerouslySetInnerHTML={{ __html: content.html }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BrowserContainer>
    </section>
  );
}
export default About;
