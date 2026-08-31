import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Preloader.css";

function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const preloaderWrapperRef = useRef(null);

  useEffect(() => {
    const textToDisplay = "Bin Waleed Tour";
    const lineElements = containerRef.current.querySelectorAll(".line");

    // Dynamic Character Splitting Logic
    lineElements.forEach((line) => {
      line.innerHTML = "";
      textToDisplay.split("").forEach((char) => {
        const charSpan = document.createElement("span");
        charSpan.className = "char";
        charSpan.innerHTML = char === " " ? "&nbsp;" : char;
        line.appendChild(charSpan);
      });
    });

    const lines = containerRef.current.querySelectorAll(".line");
    const splitCharsList = Array.from(lines).map((line) =>
      line.querySelectorAll(".char")
    );

    // 3D Tube Calculations
    const width = window.innerWidth;
    const depth = -width / 10;
    const transformOrigin = `50% 50% ${depth}px`;

    gsap.set(containerRef.current, { visibility: "visible" });
    gsap.set(lines, { perspective: 700, transformStyle: "preserve-3d" });

    // Timeline Setup (Total duration exact ~2 seconds)
    const masterTl = gsap.timeline({
      onComplete: () => {
        // Exit / Close Animation
        gsap.to(preloaderWrapperRef.current, {
          y: "-100%",
          duration: 0.6,
          ease: "power4.inOut",
          onComplete: () => {
            if (onComplete) onComplete();
          },
        });
      },
    });

    // Fast 3D Cylinder Rolling Animation (1.4s loop duration)
    const rollingTl = gsap.timeline();

    splitCharsList.forEach((chars, index) => {
      rollingTl.fromTo(
        chars,
        { rotationX: -90, opacity: 0 },
        {
          rotationX: 90,
          opacity: 1,
          stagger: 0.03,
          duration: 0.8,
          ease: "none",
          transformOrigin: transformOrigin,
        },
        index * 0.25
      );
    });

    masterTl.add(rollingTl);

    return () => masterTl.kill();
  }, [onComplete]);

  return (
    <div className="preloader-overlay-wrapper" ref={preloaderWrapperRef}>
      <div className="container tube-container" ref={containerRef}>
        <div className="tube">
          <h1 className="line line1">Bin Waleed Tour</h1>
          <h1 className="line line2">Bin Waleed Tour</h1>
          <h1 className="line line3">Bin Waleed Tour</h1>
          <h1 className="line line4">Bin Waleed Tour</h1>
        </div>
      </div>
    </div>
  );
}

export default Preloader;