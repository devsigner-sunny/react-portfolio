import { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import { gsap } from "gsap";

const MouseCircle = forwardRef(({ className, delay }, ref) => {
  const el = useRef();
  const mouseCircleClasses = [
    "mouse-circle",
    "top-0",
    "left-0",
    "fixed",
    "rounded-full",
    "pointer-events-none",
    "transform__x-y-center",
    "border-2",
  ];

  mouseCircleClasses.push(className);

  useImperativeHandle(
    ref,
    () => {
      return {
        moveTo(x, y) {
          gsap.to(el.current, { x, y, delay });
        },
      };
    },
    [delay]
  );

  return <div className={mouseCircleClasses.join(" ")} ref={el}></div>;
});

MouseCircle.displayName = "MouseCircle";

export default function MousePointer() {
  const circleRefs = useRef([]);

  // reset on re-renders
  circleRefs.current = [];

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    circleRefs.current.forEach((ref) =>
      ref.moveTo(innerWidth / 2, innerHeight / 2)
    );

    const onMove = ({ clientX, clientY }) => {
      circleRefs.current.forEach((ref) => ref.moveTo(clientX, clientY));
    };

    window.addEventListener("pointermove", onMove);

    return () => {
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  const addCircleRef = (ref) => {
    if (ref) {
      circleRefs.current.push(ref);
    }
  };

  return (
    <div>
      <MouseCircle
        className="z-50 w-3.5 h-3.5 bg-amber-600 border__light"
        ref={addCircleRef}
        delay={0}
      />
      <MouseCircle
        className="z-40 w-10 h-10 border__light opacity-30 bg-amber-500"
        ref={addCircleRef}
        delay={0.1}
      />
      <MouseCircle
        className="z-30 w-16 h-16 border-amber-400 bg__dark-ivory"
        ref={addCircleRef}
        delay={0.2}
      />
    </div>
  );
}
