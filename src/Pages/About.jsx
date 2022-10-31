import "./About.scss";
import BrowserContainer from "../Components/BrowserContainer/BrowserContainer";
import {aboutContents} from "../content";

function About() {

  return (
    <div>
      <h1>About</h1>
      <div id="about" className="about page">
        <BrowserContainer>
          <div className="p-5 bg-gray-900">
            <small className="text-white">About /&gt;</small>
            <div className="code-view">
              <div className="codes pl-3 pt-5">
                {aboutContents.map((content, index) =>
                  <div key={index} data-line-nr={index} className="code d-flex">
                    {content.dot &&
                      <span className="dot">
                          {content.dot}
                        </span>
                    }
                    <span dangerouslySetInnerHTML={ {__html: content.html} } />
                  </div>
                )}
              </div>
            </div>
          </div>
        </BrowserContainer>
      </div>
    </div>
  );
}
export default About;
