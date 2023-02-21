import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Typewriter from 'typewriter-effect';
import { introData, meta } from '../content';
import Eyeball from '../Components/Eyeball';

function Home() {
  return (
    <HelmetProvider>
      <section id="home" className="home page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="flex flex-row justify-center intro_sec align-center">
          <div className="basis-1/2 intro">
            <p>Start/&gt;</p>
            <h2 className="mb-1x">{introData.title}</h2>
            <h1 className="my-10 text-4xl">
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
            <p className="mb-1x">{introData.description}</p>
            <div className="pb-5 intro_btn-action">
              <Link to="/work" className="text_2">
                <div id="button_p" className="ac_btn btn ">
                  Work
                  <div className="ring one" />
                  <div className="ring two" />
                  <div className="ring three" />
                </div>
              </Link>
              <Link to="/contact">
                <div id="button_h" className="ac_btn btn">
                  Contact Me
                  <div className="ring one" />
                  <div className="ring two" />
                  <div className="ring three" />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex basis-1/2 align-items-center">
            <Eyeball />
            <Eyeball />
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
}

export default Home;
