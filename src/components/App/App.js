import React from 'react';
import 'components/App/App.css';
import { CarouselProvider, Slider, Slide, ButtonNext} from 'pure-react-carousel';
import Section2 from 'components/section2'


function App() {
  return (
    <div className="App">
        <CarouselProvider
         visibleSlides={1}
         orientation="vertical"
         totalSlides={3}
         step={1}
         touchEnabled={false}
      >
        <Slider>
          <Slide index={0}>
          <div className="section-1">
                <div className="container-fluid">
                  <div className="section-1-content">
                    <p className="section-1-p">HELLO WORLD</p>
                    <h1>Sunny's Portfolio</h1>
                    <p><a className="btn btn-dark" href="https://github.com/devsigner-sunny" role="button">
                      <span className="fa fa-github" aria-hidden="true"></span>
                      &nbsp; Github</a></p>
                  </div>
                  <ButtonNext className="to-bottom-first">
                    <span className="fa fa-angle-double-down" aria-hidden="true"></span>
                  </ButtonNext>
                </div>
              </div>
          </Slide>
          <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide>
        </Slider>
      </CarouselProvider>
        <Section2 />
    </div>
  );
}

export default App;
