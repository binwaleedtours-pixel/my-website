import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Features.css";

gsap.registerPlugin(ScrollTrigger);

// Custom SVG Icons
const BuildingIcon = () => (
  <svg className="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-6 0h6" />
  </svg>
);

const CakeIcon = () => (
  <svg className="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.555a.5.5 0 01-.332.477c-2.07.74-4.246 1.11-6.425 1.11s-4.355-.37-6.425-1.11A.5.5 0 017.5 15.555V11a.5.5 0 01.332-.477C9.902 9.783 12.078 9.413 14.257 9.413s4.355.37 6.425 1.11A.5.5 0 0121 11v4.555zM12 3v3m0 0a1.5 1.5 0 001.5 1.5H15" />
  </svg>
);

const TruckIcon = () => (
  <svg className="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v11.177" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const HeartIcon = () => (
  <svg className="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

const UserGroupIcon = () => (
  <svg className="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 002.25-1.875M15 12a3 3 0 11-6 0 3 3 0 016 0zM6 18.72a9.094 9.094 0 012.25-1.875" />
  </svg>
);

const featureList = [
  {
    id: 1,
    icon: <BuildingIcon />,
    title: "Luxury Accommodation & Stays",
    description: "Handpicked top-rated hotels, cozy resorts, and private family/couple rooms for complete privacy and ultimate mountain comfort.",
    badge: "5 Star Comfort"
  },
  {
    id: 2,
    icon: <CakeIcon />,
    title: "Hygienic Delicious Meals",
    description: "Freshly prepared quality breakfast and dinner included daily to keep you fully energized.",
  },
  {
    id: 3,
    icon: <TruckIcon />,
    title: "Comfortable Travel & 4x4",
    description: "Modern AC vehicles & expert mountain drivers for off-road tracks.",
  },
  {
    id: 4,
    icon: <MapPinIcon />,
    title: "15+ Iconic Sightseeing Spots",
    description: "Covering maximum destinations, serene lakes, and hidden valleys in a single seamless itinerary.",
    badge: "All-Inclusive"
  },
  {
    id: 5,
    icon: <HeartIcon />,
    title: "Couple & Family Environment",
    description: "Safe, respectful, and private environment curated specially for loved ones.",
  },
  {
    id: 6,
    icon: <UserGroupIcon />,
    title: "24/7 Expert Tour Guides",
    description: "Dedicated managers making your journey smooth, safe, and completely hassle-free.",
    badge: "24/7 Support"
  },
];

// Initial Scaffolding Directions for Exploding Fly-In Effect
const initialScatterPositions = [
  { x: -350, y: -250, rotation: -25, scale: 0.6 }, // Top-Left
  { x: 0, y: -300, rotation: 15, scale: 0.5 },      // Top-Center
  { x: 350, y: -250, rotation: 25, scale: 0.6 },   // Top-Right
  { x: -350, y: 250, rotation: -18, scale: 0.6 },  // Bottom-Left
  { x: 0, y: 300, rotation: -12, scale: 0.5 },     // Bottom-Center
  { x: 350, y: 250, rotation: 20, scale: 0.6 },    // Bottom-Right
];

function Features() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pinning + Scroll Driven Assembly Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1200", // Scroll Distance
          scrub: 1.2,    // Smooth Scroll Sync
          pin: true,     // Screen Pinning while animating
          anticipatePin: 1,
        },
      });

      // Header Fade & Scale
      tl.from(".features-header", {
        opacity: 0,
        y: -40,
        scale: 0.9,
        duration: 0.5,
      });

      // Animate cards from scattered off-grid locations to zeroed grid position
      cardsRef.current.forEach((card, index) => {
        const initial = initialScatterPositions[index];

        tl.fromTo(
          card,
          {
            x: initial.x,
            y: initial.y,
            rotation: initial.rotation,
            scale: initial.scale,
            opacity: 0,
          },
          {
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            opacity: 1,
            ease: "power2.out",
            duration: 1,
          },
          "-=0.4" // Slight overlap stagger
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Spotlight Mouse Move Effect (Card Level)
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="features-section" id="why-us" ref={containerRef}>
      <div className="features-container">
        <div className="features-header">
          <span className="sub-title">EXCELLENCE IN TRAVEL</span>
          <h2>Why Travel With Us</h2>
          <p>
            We take care of every detail so you can focus on making unforgettable
            memories across Pakistan.
          </p>
        </div>

        <div className="bento-grid">
          {featureList.map((feature, idx) => (
            <div
              key={feature.id}
              className="bento-card"
              ref={(el) => (cardsRef.current[idx] = el)}
              onMouseMove={handleMouseMove}
            >
              <div className="spotlight-layer" />
              <div className="card-top">
                <div className="icon-box">{feature.icon}</div>
                {feature.badge && <span className="card-badge">{feature.badge}</span>}
              </div>
              <div className="card-content">
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;