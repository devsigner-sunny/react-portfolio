import React, {
  useRef, useState, useEffect,
} from 'react';
import useMousePosition from '../Hooks/useMousePosition';

export default function Eyeball() {
  const mousePosition = useMousePosition();
  const [eyePosition, setEyePosition] = useState(0);
  const eyeRef = useRef(null);
  const pupilRef = useRef(null);
  const [pupilPosition, setpupilPosition] = useState(0);

  useEffect(() => {
    const eyeArea = eyeRef.current.getBoundingClientRect();
    const pupilArea = pupilRef.current.getBoundingClientRect();
    setEyePosition(eyeArea);
    setpupilPosition(pupilArea);
  }, []);

  const R = eyePosition.width / 2;
  const r = pupilPosition.width / 2;
  const centerX = eyePosition.left + R;
  const centerY = eyePosition.top + R;
  const x = mousePosition.x - centerX;
  const y = mousePosition.y - centerY;
  const radian = Math.atan2(y, x);
  const angle = (radian * 180) / Math.PI + 360;

  const styleEye = {
    transform: `translateX(${`${R - r + 2}px`}) rotate(${`${angle}deg`})`,
    transformOrigin: `${`${r + 2}px`} center`,
  };

  return (

    <svg width="40" height="40" className="eye">
      <circle cx="18" cy="18" r="17" fill="none" stroke="#D03E00" vectorEffect="non-scaling-stroke" strokeWidth="2" className="eyeball" ref={eyeRef} />
      <circle cx="18" cy="18" r="10" fill="#D03E00" className="pupil" ref={pupilRef} style={styleEye} />
    </svg>

  );
}
