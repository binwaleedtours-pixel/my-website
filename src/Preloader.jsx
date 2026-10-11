import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Preloader.css";

const TEXT = "Bin Waleed Tour";
const LINES = [1, 2, 3, 4];

function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  // onComplete ko ref mein rakha taake animation dobara restart na ho
  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useLayoutEffect(() => {
    // Preloader ke dauran scroll band
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray(".line");
      const origin = `50% 50% ${-window.innerWidth / 10}px`;

      gsap.set(containerRef.current, { visibility: "visible" });

      const tl = gsap.timeline();

      // 3D rolling animation
      lines.forEach((line, index) => {
        tl.fromTo(
          line.querySelectorAll(".char"),
          { rotationX: -90, opacity: 0 },
          {
            rotationX: 90,
            opacity: 1,
            stagger: 0.03,
            duration: 0.8,
            ease: "none",
            transformOrigin: origin,
            force3D: true,
          },
          index * 0.25
        );
      });

      // Exit animation (same timeline ka hissa, is liye cleanup mein kill hogi)
      tl.to(wrapperRef.current, {
        yPercent: -100,
        duration: 0.6,
        ease: "power4.inOut",
        onComplete: () => {
          gsap.set(wrapperRef.current, { display: "none" });
          document.body.style.overflow = prevOverflow;
          if (onCompleteRef.current) onCompleteRef.current();
        },
      });
    }, wrapperRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = prevOverflow;
    };
  }, []); // sirf ek baar chalega

  return (
    <div className="preloader-overlay-wrapper" ref={wrapperRef}>
      <div className="container tube-container" ref={containerRef}>
        <div className="tube">
          {LINES.map((n) => (
            <h1 key={n} className={`line line${n}`} aria-label={TEXT}>
              {TEXT.split("").map((char, i) => (
                <span className="char" key={i} aria-hidden="true">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Preloader;