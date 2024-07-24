import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export const Loading = ({ setIsLoading }) => {
  const [counter, setCounter] = useState(0);
  const loadingBarRef = useRef(null);
  const textRef = useRef(null);
  const barRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter === 100) {
          clearInterval(interval);
          gsap.to([loadingBarRef.current, textRef.current, barRef.current], {
            // Applying animation to loading bar and text
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            onComplete: () => setIsLoading(false),
          });
          return prevCounter;
        }
        return prevCounter + 1;
      });
    }, 50);

    gsap.fromTo(
      loadingBarRef.current,
      { opacity: 1 },
      { opacity: 0, duration: 100 * 0.1, ease: "none" }
    );

    return () => clearInterval(interval);
  }, [setIsLoading]);

  return (
    <div className="bg-gray-900 h-screen grid place-items-center" ref={loadingBarRef}>
      <div className="wrapper flex flex-col gap-y-5 justify-center items-center h-screen absolute top-0 left-0 w-full z-50">
        <div className="text__light text-center " ref={textRef} >
          {" "}
          {/* Applying ref to text element */}
          <p className="mb-2">Loading %</p>
          <p className="text-8xl">{counter}</p>
        </div>
        <hr className="bg-emerald-600 border-none h-1.5 mt-10 " ref={barRef} style={{ width: `${counter}%` }} />
      </div>
    </div>
  );
};