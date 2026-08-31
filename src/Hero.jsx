import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./Hero.css";

const slidesData = [
  {
    id: 1,
    title: "Discover the Majestic North",
    description:
      "Embark on unforgettable journeys through Pakistan's most serene valleys and rugged peaks.",
    bgImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 2,
    title: "Explore Hunza & Skardu",
    description:
      "Witness turquoise lakes, high altitude deserts, and snow-capped giant peaks of the Karakoram.",
    bgImage:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 3,
    title: "Chasing Alpine Dreams",
    description:
      "Join curated wilderness trekking, luxury camping, and authentic northern culture tours.",
    bgImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
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

  useEffect(() => {
    // Text Reveal & Background Zoom Entrance
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

        {/* Fixed Action Buttons (No re-animation to keep solid) */}
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