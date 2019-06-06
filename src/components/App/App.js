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
          <div>
            <div className="container-fluid">
              I am the first Slide.
              <ButtonNext/>
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
