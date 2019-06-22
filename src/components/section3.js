import React, { Component } from 'react';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';

class Section3 extends Component {
  render() {
    return (
      <div className="section-3">
        <ButtonBack className="to-top-project">
          <span className="fa fa-angle-double-up" aria-hidden="true"></span>
        </ButtonBack>
        <div className="container-fluid">
          <div className="title-wrapper">
            <h2 className="project-title-p3">TetraMap</h2>
            <h4 className="sub-title">Industry Project</h4>
          </div>
          <div className="content-wrapper row">
            <div className="col-md-6 video-wrapper">
              <div className="embed-responsive embed-responsive-16by9 media">
                <iframe title="project1" className="embed-responsive-item project-video" src="https://www.youtube.com/embed/1jil4emoexU" frameBorder="0" gesture="media" allowFullScreen />
              </div>
            </div>
            <div className="col-md-6 project-content">
              <ul className="info">
                <li className="info-list">
                  <p className="content-summary" aria-hidden="true"> Client "TetraMap" needs to provide their service within digital. They want to bring their tools which has been in a print format to be optimized on the web and mobile devices too.<br/>
                  Based on client’s needs we propose to create and maintain a dynamic and interactive web application for the client.  
                    </p>
                </li>
                <li className="info-list">
                  <ul className="content-list">
                    <li className="fa fa-check" aria-hidden="true"> Team Leader</li>
                    <li className="fa fa-check" aria-hidden="true"> 
Project Proposal and Report (Analysis, Diagram Modelling)</li>
                    <li className="fa fa-check" aria-hidden="true"> Architecture Design, SI / UI Design</li>
                    <li className="fa fa-check" aria-hidden="true"> Build Database in mySQL</li>
                    <li className="fa fa-check" aria-hidden="true"> 
Front-end development for users</li>
                  </ul>
                </li>
                <p className="content-text-stacks" aria-hidden="true"> <code>HTML5/CSS</code> <code>Javascript</code> <code>mySQL</code> <code>PHP</code> 
                </p>
              </ul>
            </div>
          </div>
        </div>
        <ButtonNext className="to-bottom-project">
          <span className="fa fa-angle-double-down" aria-hidden="true"></span>
        </ButtonNext>
      </div>
    );
  }
}

export default Section3;
