import React from "react";
import WaterWave from "react-water-wave";
import "./ImageEffect.scss";
/* eslint-disable */
export default function ImageEffect({ className, imgSrc }) {
  return (
    <div className={`image-effect ${className}`}>
      <WaterWave
        imageUrl={imgSrc}
        style={{
          width: "100%",
          height: "100%",
          backgroundSize: "contain",
          backgroundPosition: "center",
          pinterEvent: "none"
        }}
        dropRadius={50}
        perturbance={0.05}
        interactive={true}
      >
        {({}) => <></>}
      </WaterWave>
    </div>
  );
}
