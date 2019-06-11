import React, { Component } from 'react';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';
import Typed from 'typed.js';

class Section2 extends Component {
  componentDidMount() {
    const options = {
      strings: [
        "HTML5", "CSS3", "jQuery", "JavaScript", "React",  "ES6", "Typescript", "SASS"
      ],
      typeSpeed: 150,
      startDelay: 500,
      backSpeed: 100,
      backDelay: 1300,
      loop: true,
    }
    this.typed = new Typed(this.el, options);
  }
  render() {
    return (
      <div>
      {/* <ButtonBack/> */}
        <div className="container-fluid">
          <div>
            <h4>I am a developer having 
            <strong id="typed" style={{ whiteSpace: "pre" }} ref={(el) => { this.el = el; }}></strong> skills.</h4>
          </div>
        </div>
        {/* <ButtonNext /> */}
      </div>
    );
  }
}

export default Section2;
