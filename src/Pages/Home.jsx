import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Typewriter from 'typewriter-effect';
import { introData, meta } from '../content';
import symbolSun from '../Assets/sun.svg';

function Home() {
  return (
    <HelmetProvider>
      <section id="home" className="home page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="flex flex-row justify-center min-h-screen align-middle">
          <div className="flex flex-col justify-center basis-3/4">
            <h4 className="font-medium text__black mb-1x">{introData.title}</h4>
            <h1 className="my-10 text-6xl font-black">
              <Typewriter
                options={{
                  strings: [
                    introData.animated.first,
                    introData.animated.second,
                    introData.animated.third,
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                }}
              />
            </h1>
            <p className="pr-32 mb-1">{introData.description}</p>
          </div>
          <div className="flex basis-1/4">
          <img src={symbolSun} alt="symbol sunny" />
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
}

export default Home;
