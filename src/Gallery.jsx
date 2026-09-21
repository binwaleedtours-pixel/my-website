import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Gallery.css";

import img1 from "./gallerySection/IMG_0644.jpg";
import img2 from "./gallerySection/IMG_2795.jpg";
import img3 from "./gallerySection/IMG_2871.jpg";
import img4 from "./gallerySection/IMG_2926.jpg";
import img5 from "./gallerySection/IMG_4409.jpg";
import img6 from "./gallerySection/IMG_4440.jpg";
import img7 from "./gallerySection/IMG_4497.jpg";

gsap.registerPlugin(ScrollTrigger);

const images = [
  { id: 1, url: img1 },
  { id: 2, url: img2 },
  { id: 3, url: img3 },
  { id: 4, url: img4 },
  { id: 5, url: img5 },
  { id: 6, url: img6 },
  { id: 7, url: img7 },
];

function Gallery() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    // GSAP Context with MatchMedia (Desktop par chalega, Mobile par automatically disable ho jayega)
    let ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // Desktop Only (769px and above)
        "(min-width: 769px)": function () {
          const getScrollAmount = () => track.scrollWidth - window.innerWidth;

          gsap.to(track, {
            x: () => -getScrollAmount(),
            ease: "none",
            scrollTrigger: {
              trigger: section,
              pin: true,
              scrub: 1,
              start: "top 10%",
              end: () => `+=${getScrollAmount() * 1.5}`,
              invalidateOnRefresh: true,
              anticipatePin: 1,
            },
          });
        },
        // Mobile Only (768px and below) - GSAP off rahega taaki grid kharab na ho
        "(max-width: 768px)": function () {
          // Clean reset for mobile
          gsap.set(track, { clearProps: "all" });
        },
      });
    }, sectionRef);

    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);

    return () => {
      ctx.revert();
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="gallery-outer-wrapper">
      <section className="gallery-pin-section" ref={sectionRef}>
        <div className="section-headings">
          <h2>Captured Moments</h2>
          <p>
            A glimpse into the breathtaking landscapes and unforgettable memories
            from our recent expeditions.
          </p>
        </div>

        <div className="gallery-wrapper">
          <div className="gallery-track" ref={trackRef}>
            {images.map((img, index) => (
              <div key={img.id} className="gallery-card">
                <img 
                  src={img.url} 
                  alt={img.alt || `Gallery image ${img.id}`} 
                  loading={index === 0 ? "eager" : "lazy"} 
                />
                <div className="gallery-overlay">
                  <span>{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;