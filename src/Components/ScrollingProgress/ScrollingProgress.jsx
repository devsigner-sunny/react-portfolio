import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import "./ScrollingProgress.scss";

export default function ScrollingProgress() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("progress", {
      value: 100,
      scrollTrigger: {
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <progress
      max="100"
      value="0"
      className="fixed top-0 left-0 z-50 w-full h-1 bg-transparent border-none appearance-none scrolling-progress"
    ></progress>
  );
}
