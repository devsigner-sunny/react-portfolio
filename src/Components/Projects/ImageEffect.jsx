import React from "react";
import Background from "/src/Assets/img/project-hah.jpg";
import WaterWave from "react-water-wave";
import './ImageEffect.scss';

export default function ImageEffect({className, imgSrc}) {
  return (
    <div className={`image-effect ${className}`}>
      <WaterWave
        imageUrl={imgSrc}
        style={{ width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center' }}
        dropRadius={50}
        perturbance={0.05}
        interactive={true}
    >
      {({}) => (
        <>
        </>
      )}
    </WaterWave>
  </div>
  )
}
