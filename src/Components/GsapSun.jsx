/* eslint-disable */
import { gsap } from "gsap";
import { useEffect, useRef, useLayoutEffect } from "react";

const GsapSun = ({className}) => {
  const sun = useRef(null);
  const tl = useRef();
  const faceRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .from(".entire", {
          autoAlpha: 0,
          scale: 12,
          transformOrigin: "center center",
          x: 200,
        })
        .from(".face", { opacity: 0 })

        .to(".entire", { autoAlpha: 1, scale: 1.5, x: 0, duration: 1 })
        .to(".sun", {
          transformOrigin: "center center",
          duration: 0.5,
          rotate: 180,
        })
        .to(".face", { opacity: 1, duration: 1 });
    }, sun);

    return () => ctx.revert();
  }, []);

  // useLayoutEffect(()=> {
  //   const ctx = gsap.context(() => {
  //     tl.current = gsap.timeline();

  //     gsap.set(faceRef, {
  //       autoAlpha: 0,
  //       y: 50
  //     });

  //     tl.to(
  //       faceRef,
  //       1.5,
  //       {
  //         autoAlpha: 1,
  //         stagger: 0.2,
  //         y: 0,
  //         ease: "power4"
  //       },
  //       0.2
  //     );

  //     tl.from(
  //       "svg path",
  //       {
  //         autoAlpha: 0,
  //         scale: 0,
  //         transformOrigin: "center center",
  //         stagger: 0.1,
  //         duration: 1.2,
  //         ease: "Power4.inOut"
  //       },
  //       0.3
  //     );

  //     return () => ctx.revert();
  //   })
  // })

  return (
    <div ref={sun} className={className}>
      <svg
        className="w-100 h-100"
        width="349"
        height="349"
        viewBox="0 0 349 349"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="face"
          stroke="#166534"
          strokeWidth="2.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            className="eyelid right bottom"
            d="M219.09 164.873C219.09 164.873 216.202 163.762 214.868 161.762C213.535 159.763 208.647 157.541 204.425 157.541C200.203 157.541 195.315 159.763 193.982 161.762C192.648 163.762 189.76 164.873 189.76 164.873"
          />
          <path
            className="eye right"
            d="M209.092 162.207C209.092 164.651 207.092 166.651 204.648 166.651C202.203 166.651 200.204 164.651 200.204 162.207C200.204 159.763 202.203 157.763 204.648 157.763C207.092 157.541 209.092 159.54 209.092 162.207Z"
          />
          <path
            className="eyelid right top"
            d="M188.427 160.429C188.427 160.429 193.982 155.541 196.426 153.985C198.87 152.43 205.981 151.763 208.869 153.097C211.758 154.43 217.091 160.429 217.091 160.429"
          />
          <path
            className="nosestril"
            d="M185.982 187.982C185.982 187.982 189.538 191.093 188.649 195.092C187.982 199.092 183.76 198.648 181.094 198.87C178.205 199.092 176.65 202.647 173.539 202.425C170.428 202.647 168.873 198.87 165.984 198.87C163.096 198.648 159.096 199.092 158.429 195.092C157.763 191.093 161.096 187.982 161.096 187.982"
          />
          <path
            className="nose"
            d="M169.984 195.981C169.984 195.981 166.873 194.648 168.206 189.315C169.317 183.982 171.095 185.093 171.095 176.65C171.095 168.206 171.095 157.763 171.095 157.763"
          />
          <path
            className="mouse"
            d="M190.427 214.202C190.427 214.202 186.649 214.646 184.205 214.424C181.761 214.202 180.65 213.757 178.872 213.757C175.317 213.98 175.539 215.091 173.317 215.091C171.317 215.091 171.317 213.757 167.762 213.757C165.985 213.757 164.874 214.424 162.429 214.424C159.985 214.646 156.208 214.202 156.208 214.202"
          />
          <path
            className="lips top"
            d="M182.649 211.535C182.649 211.535 178.872 209.536 177.761 209.98C176.65 210.202 173.317 212.646 173.317 212.646C173.317 212.646 169.984 210.202 168.873 209.98C167.762 209.758 163.985 211.535 163.985 211.535"
          />
          <path
            className="lips bottom"
            d="M184.872 216.646C184.872 216.646 178.205 221.09 173.539 221.09C168.873 221.09 162.207 216.646 162.207 216.646"
          />
          <path
            className="eyebrow right"
            d="M184.871 144.653C184.871 144.653 197.537 131.987 220.423 144.653"
          />
          <path
            className="eyelid left bottom"
            d="M130.21 164.873C130.21 164.873 133.099 163.762 134.432 161.762C135.765 159.763 140.654 157.541 144.875 157.541C149.097 157.541 153.986 159.763 155.319 161.762C156.652 163.762 159.541 164.873 159.541 164.873"
          />
          <path
            className="eye left"
            d="M140.209 162.207C140.209 164.651 142.209 166.651 144.653 166.651C147.097 166.651 149.097 164.651 149.097 162.207C149.097 159.763 147.097 157.763 144.653 157.763C142.209 157.541 140.209 159.54 140.209 162.207Z"
          />
          <path
            className="eyelid left top"
            d="M160.874 160.429C160.874 160.429 155.319 155.541 152.875 153.985C150.43 152.43 143.32 151.763 140.431 153.097C137.543 154.43 132.21 160.429 132.21 160.429"
          />
          <path
            className="eyebrow left"
            d="M164.429 144.653C164.429 144.653 151.764 131.987 128.877 144.653"
          />
        </g>
        <g
          className="sun"
          stroke="#166534"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            className="circle outer"
            d="M174.65 248.643C215.515 248.643 248.643 215.515 248.643 174.65C248.643 133.785 215.515 100.657 174.65 100.657C133.785 100.657 100.657 133.785 100.657 174.65C100.657 215.515 133.785 248.643 174.65 248.643Z"
          />
          <circle
            className="circle inner"
            cx="175.3"
            cy="175.3"
            r="66.8"
            strokeWidth="1"
            strokeDasharray="2 2"
          />
          <path
            className="sunshine"
            d="M184.871 101.324C183.76 73.5487 181.094 45.7736 177.094 18.4429L174.65 2L172.206 18.4429C168.206 45.7736 165.54 73.3264 164.429 101.324C167.762 100.879 171.095 100.657 174.65 100.657C178.205 100.435 181.538 100.879 184.871 101.324Z"
          />
          <path
            className="sunshine"
            d="M164.429 247.976C165.54 275.751 168.206 303.526 172.206 330.857L174.65 347.3L177.094 330.857C181.094 303.526 183.76 275.974 184.871 247.976C181.538 248.421 178.205 248.643 174.65 248.643C171.095 248.865 167.762 248.421 164.429 247.976Z"
          />
          <path
            className="sunshine"
            d="M247.976 184.871C275.751 183.76 303.526 181.094 330.857 177.094L347.3 174.65L330.857 172.206C303.526 168.206 275.973 165.54 247.976 164.429C248.42 167.762 248.643 171.095 248.643 174.65C248.865 178.205 248.42 181.538 247.976 184.871Z"
          />
          <path
            className="sunshine"
            d="M101.324 164.429C73.5487 165.54 45.7736 168.206 18.4429 172.206L2 174.65L18.4429 177.094C45.7736 181.094 73.3264 183.76 101.324 184.871C100.879 181.538 100.657 178.205 100.657 174.65C100.435 171.095 100.879 167.762 101.324 164.429Z"
          />
          <path
            className="sunshine"
            d="M144.875 78.8815C134.209 73.7709 124.21 62.6608 121.988 51.773C119.766 40.8852 116.433 24.8867 101.323 25.5533C101.323 25.5533 114.211 33.9969 113.767 47.9956C113.545 57.7724 109.101 69.9935 116.878 78.2149C124.655 86.6585 131.987 94.4356 131.987 103.546C131.987 111.545 128.876 116.433 128.876 116.433C138.875 108.434 151.096 103.101 164.429 101.324C164.429 101.324 158.207 85.3253 144.875 78.8815Z"
          />
          <path
            className="sunshine"
            d="M204.425 78.8815C214.868 73.7709 225.09 62.6608 227.312 51.5508C229.534 40.4407 232.867 24.6645 247.976 25.3311C247.976 25.3311 235.089 33.7747 235.533 47.7734C235.755 57.5502 240.199 69.7712 232.422 77.9927C224.645 86.4363 217.313 94.2133 217.313 103.324C217.313 111.323 220.423 116.211 220.423 116.211C210.424 108.212 198.203 102.879 184.871 101.102C184.871 101.324 191.093 85.3253 204.425 78.8815Z"
          />
          <path
            className="sunshine"
            d="M204.425 270.196C214.868 275.307 225.089 286.417 227.311 297.527C229.533 308.415 232.866 324.413 247.976 323.747C247.976 323.747 235.088 315.303 235.533 301.304C235.755 291.528 240.199 279.307 232.422 271.085C224.645 262.864 217.312 254.865 217.312 245.754C217.312 237.755 220.423 232.867 220.423 232.867C210.424 240.866 198.203 246.199 184.871 247.976C184.871 247.976 191.093 263.753 204.425 270.196Z"
          />
          <path
            className="sunshine"
            d="M144.875 270.196C134.431 275.307 124.21 286.417 121.988 297.527C119.766 308.415 116.433 324.413 101.323 323.747C101.323 323.747 114.211 315.303 113.767 301.304C113.545 291.528 109.101 279.307 116.878 271.085C124.655 262.642 131.987 254.865 131.987 245.754C131.987 237.755 128.876 232.867 128.876 232.867C138.875 240.866 151.096 246.199 164.429 247.976C164.429 247.976 158.207 263.753 144.875 270.196Z"
          />
          <path
            className="sunshine"
            d="M129.988 115.545C109.545 96.6575 88.214 78.8815 65.9939 62.4386L52.6619 52.6618L62.4387 65.9938C78.8816 88.2139 96.6576 109.545 115.545 129.988C117.544 127.321 119.767 124.655 122.211 122.211C124.655 119.766 127.321 117.544 129.988 115.545Z"
          />
          <path
            className="sunshine"
            d="M219.312 233.755C239.755 252.642 261.086 270.419 283.306 286.861L296.638 296.638L286.862 283.306C270.419 261.086 252.643 239.755 233.756 219.312C231.756 221.979 229.534 224.645 227.09 227.089C224.645 229.534 221.979 231.756 219.312 233.755Z"
          />
          <path
            className="sunshine"
            d="M233.756 129.988C252.643 109.545 270.419 88.2139 286.862 65.9938L296.638 52.6618L283.306 62.4386C261.086 78.8815 239.755 96.6575 219.312 115.545C221.979 117.544 224.645 119.766 227.09 122.211C229.534 124.655 231.756 127.321 233.756 129.988Z"
          />
          <path
            className="sunshine"
            d="M115.545 219.312C96.6576 239.755 78.8816 261.086 62.4387 283.306L52.6619 296.638L65.9939 286.861C88.214 270.419 109.545 252.642 129.988 233.755C127.321 231.756 124.655 229.534 122.211 227.089C119.767 224.645 117.544 221.979 115.545 219.312Z"
          />
          <path
            className="sunshine"
            d="M270.419 144.653C275.529 134.209 286.639 123.988 297.749 121.766C308.637 119.544 324.636 116.211 323.969 101.102C323.969 101.102 315.525 113.989 301.527 113.545C291.75 113.323 279.529 108.879 271.307 116.656C262.864 124.433 255.087 131.765 245.977 131.765C237.977 131.765 233.089 128.654 233.089 128.654C241.088 138.653 246.421 150.875 248.199 164.207C247.976 164.429 263.975 158.207 270.419 144.653Z"
          />
          <path
            className="sunshine"
            d="M270.419 204.425C275.529 214.868 286.639 225.09 297.749 227.312C308.637 229.534 324.636 232.867 323.969 247.976C323.969 247.976 315.525 235.089 301.527 235.533C291.75 235.755 279.529 240.199 271.307 232.422C262.864 224.645 255.087 217.313 245.977 217.313C237.977 217.313 233.089 220.423 233.089 220.423C241.088 210.424 246.421 198.203 248.199 184.871C247.976 184.871 263.975 191.093 270.419 204.425Z"
          />
          <path
            className="sunshine"
            d="M78.8816 204.425C73.771 214.868 62.6609 225.09 51.5509 227.312C40.6631 229.534 24.6646 232.867 25.3312 247.976C25.3312 247.976 33.7748 235.089 47.7735 235.533C57.5503 235.755 69.7714 240.199 77.9928 232.422C86.4364 224.645 94.2135 217.313 103.324 217.313C111.323 217.313 116.211 220.423 116.211 220.423C108.212 210.424 102.879 198.203 101.102 184.871C101.324 184.871 85.3254 191.093 78.8816 204.425Z"
          />
          <path
            className="sunshine"
            d="M78.8816 144.653C73.771 134.209 62.6609 123.988 51.5509 121.766C40.6631 119.544 24.6646 116.211 25.3312 101.102C25.3312 101.102 33.7748 113.989 47.7735 113.545C57.5503 113.323 69.7714 108.879 77.9928 116.656C86.4364 124.433 94.2135 131.765 103.324 131.765C111.323 131.765 116.211 128.654 116.211 128.654C108.212 138.653 102.879 150.875 101.102 164.207C101.324 164.429 85.3254 158.207 78.8816 144.653Z"
          />
        </g>
      </svg>
    </div>
  );
};
export default GsapSun;