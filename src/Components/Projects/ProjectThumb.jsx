import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import Project from "./Project";
import { useMediaQuery } from "react-responsive";

export default function ProjectThumb({ ...props }) {
  const { index } = props;
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1280px)" });
  let parallaxMoveValue = [30, 0];

  if (index % 2 === 0) {
    parallaxMoveValue = [-10, 30];
  }

  return (
    <>
      {isTabletOrMobile && <Project {...props} />}
      {!isTabletOrMobile && (
        <ParallaxProvider>
          <Parallax speed={-5} translateX={parallaxMoveValue}>
            <Project {...props} />
          </Parallax>
        </ParallaxProvider>
      )}
    </>
  );
}
