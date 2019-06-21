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
          <div className="content-wrapper row">
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
