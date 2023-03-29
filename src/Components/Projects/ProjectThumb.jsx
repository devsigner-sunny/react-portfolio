import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import Project from "./Project";
import "./ProjectThumb.scss";
import ImageEffect from "../ImageEffect/ImageEffect";
import { useMediaQuery } from "react-responsive";

export default function ProjectThumb({ ...props }) {
  const { index, image } = props;
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
            <div className="relative inline-block project-wrapper">
              <Project {...props} />
              <ImageEffect
                imgSrc={image}
                className="absolute -translate-x-1/2 opacity-0 -translate-y-2/3 top-1/2 left-1/2"
              />
            </div>
          </Parallax>
        </ParallaxProvider>
      )}
    </>
  );
}
