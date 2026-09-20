import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./SplitCards.css";

// Yahan apne assets folder se images import karein (apne file names ke mutabiq replace kar lein)
import card1Img from "./assets/1.png"; // Misal ke taur par pehli image
import card2Img from "./assets/2.png"; // Misal ke taur par doosri image

gsap.registerPlugin(ScrollTrigger);

function SplitCards() {
  const sectionRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "+=600",
          scrub: 1.5,
        },
      });

      tl.fromTo(
        leftCardRef.current,
        { x: "-100vw", opacity: 0, rotate: -6 },
        { x: "0%", opacity: 1, rotate: 0, ease: "power1.out", duration: 2 }
      ).fromTo(
        rightCardRef.current,
        { x: "100vw", opacity: 0, rotate: 6 },
        { x: "0%", opacity: 1, rotate: 0, ease: "power1.out", duration: 2 },
        "<"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="split-cards" ref={sectionRef}>
      <div className="split-grid">
        {/* Card 1 - Inline style se asset image lagayi gayi hai */}
        <div 
          className="split-card card-1" 
          ref={leftCardRef}
          style={{ backgroundImage: `linear-gradient(180deg, rgba(10, 10, 20, 0.15), rgba(0, 0, 0, 0.4)), url(${card1Img})` }}
        >
          <div className="split-content">
            <span className="eyebrow">TRAVEL WITH BIN WALEED</span>
            <h3>Public Tours</h3>
            <a href="#tours" className="tag-btn">
              Explore Tours →
            </a>
          </div>
        </div>
        
        {/* Card 2 - Inline style se asset image lagayi gayi hai */}
        <div 
          className="split-card card-2" 
          ref={rightCardRef}
          style={{ backgroundImage: `linear-gradient(180deg, rgba(10, 10, 20, 0.05), rgba(0, 0, 0, 0.3)), url(${card2Img})` }}
        >
          <div className="split-content">
            <span className="eyebrow">TAILORED EXPERIENCES</span>
            <h3>Customize your Tour</h3>
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