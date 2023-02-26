import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introData, meta } from "../../Contents/siteContents";
import symbolSun from "../../Assets/svg/sun.svg";
import symbolFinger from "../../Assets/svg/finger.svg";
import Projects from "../../Components/Projects/Projects";
import "./Home.scss";

function Home() {
  return (
    <HelmetProvider>
      <main>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <section className="flex flex-row justify-center min-h-screen home">
          <div className="flex flex-col justify-center basis-3/4">
            <h4 className="font-medium text__black mb-1x">{introData.title}</h4>
            <h1 className="my-10 text-6xl text__primary">
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

          <div className="absolute z-0 flex justify-center bottom-10">
            <img
              src={symbolFinger}
              alt="scroll down icon"
              className="animate__animated animate__shakeY animate__delay-2s"
            />
          </div>
        </section>

        <section className="flex flex-col">
          <h2 className="text-center mb-14">Selected Projects</h2>
          <Projects />
        </section>
      </main>
    </HelmetProvider>
  );
}

export default Home;
