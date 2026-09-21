import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Gallery.css";

// All images imported from src/assets/gallerySection/
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
  { id: 2, url: img2  },
  { id: 3, url: img3 },
  { id: 4, url: img4},
  { id: 5, url: img5  },
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

    const ctx = gsap.context(() => {
      const getScrollAmount = () => {
        return track.scrollWidth - window.innerWidth;
      };

      const tween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          scrub: 1,
          pin: true,
          start: "top 10%",
          end: () => `+=${getScrollAmount() * 1.5}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, sectionRef);

    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);
    
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      ctx.revert();
      window.removeEventListener("load", handleLoad);
      clearTimeout(timer);
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
            {images.map((img) => (
              <div key={img.id} className="gallery-card">
                <img src={img.url} alt={img.alt} loading="eager" />
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