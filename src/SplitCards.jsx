import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // <-- Link import kiya
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./SplitCards.css";

gsap.registerPlugin(ScrollTrigger);

function SplitCards() {
  const sectionRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Slow & Smooth Scroll Trigger Setup
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",   // Screen par thora neechay hit hotay hi start hoga
          end: "+=600",       // Animation duration space
          scrub: 1.5,         // Smoothness lag
        },
      });

      // Fly-in from Left and Right (Slower Pace)
      tl.fromTo(
        leftCardRef.current,
        { x: "-100vw", opacity: 0, rotate: -6 },
        { x: "0%", opacity: 1, rotate: 0, ease: "power1.out", duration: 2 }
      ).fromTo(
        rightCardRef.current,
        { x: "100vw", opacity: 0, rotate: 6 },
        { x: "0%", opacity: 1, rotate: 0, ease: "power1.out", duration: 2 },
        "<" // Parallel execution
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="split-cards" ref={sectionRef}>
      <div className="split-grid">
        <div className="split-card card-1" ref={leftCardRef}>
          <div className="split-content">
            <span className="eyebrow">TRAVEL WITH BIN WALEED</span>
            <h3>Public Tours</h3>
            <a href="#tours" className="tag-btn">
              Explore Tours →
            </a>
          </div>
        </div>
        
        <div className="split-card card-2" ref={rightCardRef}>
          <div className="split-content">
            <span className="eyebrow">TAILORED EXPERIENCES</span>
            <h3>Customize your Tour</h3>
            {/* Yahan href ki jagah Link to="/customizetours" laga diya hai */}
            <Link to="/customizetours" className="tag-btn">
              Start Planning ✎
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SplitCards;