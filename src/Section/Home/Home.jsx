import React from "react";
import { introData } from "../../Contents/siteContents";
import Typewriter from "typewriter-effect";
import symbolFinger from "../../Assets/svg/finger.svg";
import GsapSun from "../../Components/GsapSun";
import { useNav } from "../../Hooks/useNav";
import "./Home.scss";

function Home() {
  const homeRef = useNav("Home");

  return (
    <section
      ref={homeRef}
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 -mt-12 lg:flex-row lg:px-10 xl:px-20"
    >
      <div className="flex flex-col items-center justify-center flex-auto lg:justify-start lg:items-start lg:-mt-20 lg:basis-3/4">
        <h4 className="font-medium text__black mb-1x">{introData.title}</h4>
        <h1 className="my-10 text-4xl leading-relaxed text-center break-words lg:text-left sm:text-6xl text-emerald-700 min-h-[3.3em] xl:min-h-fit">
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
        <p className="text-sm md:text-base mb-1 text-center lg:text-left lg:pr-32">
          {introData.description}
        </p>
      </div>
      <div className="absolute right-0 flex-col hidden lg:flex lg:relative lg:basis-1/4">
        <GsapSun className="relative scale-100 md:opacity-100 opacity-30 lg:scale-150" />
      </div>

      <div className="z-0 flex justify-center sm:absolute bottom-20">
        <img
          src={symbolFinger}
          alt="scroll down icon"
          className="animate__animated animate__fadeInDown animate__delay-1s animate__repeat-2"
        />
      </div>
    </section>
  );
}

export default Home;
