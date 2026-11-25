import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Gallery.css";

import img1 from "./gallerySection/IMG_0644.webp";
import img2 from "./gallerySection/IMG_2795.webp";
import img3 from "./gallerySection/IMG_2871.webp";
import img4 from "./gallerySection/IMG_2926.webp";
import img5 from "./gallerySection/IMG_4409.webp";
import img6 from "./gallerySection/IMG_4440.webp";
import img7 from "./gallerySection/IMG_4497.webp";

gsap.registerPlugin(ScrollTrigger);

// alt add kar diya taake overlay mein "undefined" / khali text na aaye
const images = [
  { id: 1, url: img1, alt: "Mountain Views" },
  { id: 2, url: img2, alt: "Valley Adventures" },
  { id: 3, url: img3, alt: "Alpine Lakes" },
  { id: 4, url: img4, alt: "Camping Nights" },
  { id: 5, url: img5, alt: "Highland Trails" },
  { id: 6, url: img6, alt: "Golden Hours" },
  { id: 7, url: img7, alt: "Unforgettable Memories" },
];

function Gallery() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      const getScrollAmount = () =>
        Math.max(0, track.scrollWidth - window.innerWidth);

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
    });

    // Sab images decode hone ke baad measurements dobara lo
    const imgs = Array.from(track.querySelectorAll("img"));
    let cancelled = false;
    Promise.all(
      imgs.map((im) =>
        im.decode ? im.decode().catch(() => null) : Promise.resolve()
      )
    ).then(() => {
      if (!cancelled) ScrollTrigger.refresh();
    });

    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);

    return () => {
      cancelled = true;
      window.removeEventListener("load", handleLoad);
      mm.revert();
    };
  }, []);

  return (
    <div className="gallery-outer-wrapper">
      <section className="gallery-pin-section" ref={sectionRef}>
        <div className="section-headings">
          <h2>Captured Moments</h2>
          <p>
            A glimpse into the breathtaking landscapes and unforgettable
            memories from our recent expeditions.
          </p>
        </div>

        <div className="gallery-wrapper">
          <div className="gallery-track" ref={trackRef}>
            {images.map((img) => (
              <div key={img.id} className="gallery-card">
                <img
                  src={img.url}
                  alt={img.alt}
                  loading="eager"
                  decoding="async"
                  draggable="false"
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