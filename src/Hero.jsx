import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./Hero.css";
import banner1 from "./assets/IMG_0771.jpg";
import banner2 from "./assets/IMG_0854.jpg";
import banner3 from "./assets/IMG_1162.jpg";
const slidesData = [
  {
    id: 1,
    title: "Turning Destinations into Memories.",
    description:
      "Embark on unforgettable journeys through Pakistan's most serene valleys, Lakes and rugged peaks.",
    bgImage:
      banner1,
  },
  {
    id: 2,
    title: "Where Every Journey Tells a Story",
    description:
      "Travel through majestic mountains, scenic valleys, and hidden gems while creating memories with a family environment  that last a lifetime.",
    bgImage:
      banner2,
  },
  {
    id: 3,
    title: "Experience Pakistan Like Never Before",
    description:
      "Discover breathtaking destinations, unforgettable adventures, and thoughtfully planned journeys with a registered tourism company.",
    bgImage:
      banner3,
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const isAnimating = useRef(false);

  const switchSlide = (targetIndex) => {
    if (isAnimating.current || targetIndex === currentSlide) return;
    isAnimating.current = true;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setCurrentSlide(targetIndex);
          isAnimating.current = false;
        },
      });

      // Slide Text Exit (Fade & Upward Movement)
      tl.to(".reveal-text", {
        y: -40,
        opacity: 0,
        duration: 0.45,
        stagger: 0.06,
        ease: "power3.in",
      })
      // Background Crossfade Exit
      .to(
        ".hero-bg",
        {
          opacity: 0.2,
          scale: 1.08,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "-=0.3"
      );
    }, containerRef);

    return () => ctx.revert();
  };

  // 1. Text Reveal & Background Zoom Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Reset and Scale Background In
      gsap.fromTo(
        ".hero-bg",
        { opacity: 0, scale: 1.15 },
        { opacity: 1, scale: 1, duration: 1.4, ease: "power3.out" }
      );

      // Staggered Text Mask Reveal Animation
      tl.fromTo(
        ".reveal-text",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power4.out",
          delay: 0.1,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [currentSlide]);

  // 2. Auto-Play Interval (Har 2 Seconds Baad Auto-Slide Change Fix)
  useEffect(() => {
    const autoPlayTimer = setInterval(() => {
      const nextSlideIndex = (currentSlide + 1) % slidesData.length;
      switchSlide(nextSlideIndex);
    }, 2000); // 2000ms = 2 seconds

    return () => clearInterval(autoPlayTimer);
  }, [currentSlide]);

  const activeSlide = slidesData[currentSlide];

  return (
    <section className="hero" ref={containerRef}>
      {/* Dynamic Background Image */}
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${activeSlide.bgImage})` }}
      />
      <div className="hero-overlay" />

      <div className="hero-inner">
        {/* Animated Title */}
        <div className="mask-wrapper">
          <h1 className="reveal-text">{activeSlide.title}</h1>
        </div>

        {/* Animated Description */}
        <div className="mask-wrapper">
          <p className="reveal-text">{activeSlide.description}</p>
        </div>

        {/* Fixed Action Buttons */}
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-dark">
            Book Now →
          </a>
          <a href="#tours" className="btn btn-outline-light">
            Explore Tours
          </a>
        </div>
      </div>

      {/* Minimalist Slide Bullets */}
      <div className="slide-bullets">
        {slidesData.map((_, idx) => (
          <button
            key={idx}
            className={`bullet ${idx === currentSlide ? "active" : ""}`}
            onClick={() => switchSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;