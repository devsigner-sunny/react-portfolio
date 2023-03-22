import React from "react";
import { introData } from "../Contents/siteContents";
import Typewriter from "typewriter-effect";
import symbolFinger from "../Assets/svg/finger.svg";
import GsapSun from "../Components/GsapSun";
import { useNav } from "../Hooks/useNav";

function Home() {
  const homeRef = useNav("Home");

  return (
    <section
      ref={homeRef}
      id="home"
      className="flex flex-row justify-center min-h-screen -mt-12"
    >
      <div className="flex flex-col justify-center basis-3/4">
        <h4 className="font-medium text__black mb-1x">{introData.title}</h4>
        <h1 className="my-10 text-emerald-700">
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
        <GsapSun />
      </div>

      <div className="absolute z-0 flex justify-center bottom-20">
        <img
          src={symbolFinger}
          alt="scroll down icon"
          className="animate__animated animate__shakeY animate__delay-2s animate__infinite"
        />
      </div>
    </section>
  );
}

export default Home;
