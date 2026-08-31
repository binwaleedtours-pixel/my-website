import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Gallery.css";

gsap.registerPlugin(ScrollTrigger);

const images = [
  { id: 1, url: "https://loremflickr.com/600/400/mountains,lake", alt: "Attabad Lake" },
  { id: 2, url: "https://loremflickr.com/600/400/pakistan,valley", alt: "Hunza Valley" },
  { id: 3, url: "https://loremflickr.com/600/400/snow,mountains", alt: "Nanga Parbat" },
  { id: 4, url: "https://loremflickr.com/600/400/river,forest", alt: "Neelum Valley" },
  { id: 5, url: "https://loremflickr.com/600/400/desert,mountains", alt: "Katpana Desert" },
  { id: 6, url: "https://loremflickr.com/600/400/meadow,green", alt: "Deosai Plains" },
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
          // Scroll length factor (1.5 - 2.0 ideal for smooth ending)
          end: () => `+=${getScrollAmount() * 1.5}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, sectionRef);

    // Images load hone ke baad ScrollTrigger refresh force karein
    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);
    
    // Safety delay refresh for React dynamic mounting
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