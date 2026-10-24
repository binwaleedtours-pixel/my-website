import { useState, useEffect, useRef, useCallback } from "react";
import "./GalleryPage.css";

import img1 from "./gallery/IMG_0644.webp";
import img3 from "./gallery/IMG_0765.webp";
import img6 from "./gallery/IMG_0897.webp";
import img7 from "./gallery/IMG_0927.webp";
import img9 from "./gallery/IMG_1073.webp";
import img10 from "./gallery/IMG_1078.webp";
import img11 from "./gallery/IMG_1098.webp";
import img12 from "./gallery/IMG_1159.webp";
import img13 from "./gallery/IMG_1161.webp";
import img14 from "./gallery/IMG_1219.webp";
import img15 from "./gallery/IMG_1266.webp";
import img17 from "./gallery/IMG_1350.webp";
import img18 from "./gallery/IMG_1408.webp";
import img19 from "./gallery/IMG_1431.webp";
import img23 from "./gallery/IMG_1873.webp";
import img27 from "./gallery/IMG_2615.webp";
import img30 from "./gallery/IMG_2670.webp";
import img31 from "./gallery/IMG_2673.webp";
import img34 from "./gallery/IMG_2697.webp";
import img36 from "./gallery/IMG_2732.webp";
import img37 from "./gallery/IMG_2736.webp";
import img41 from "./gallery/IMG_2795.webp";
import img45 from "./gallery/IMG_2871.webp";
import img46 from "./gallery/IMG_2904.webp";
import img48 from "./gallery/IMG_2911.webp";
import img49 from "./gallery/IMG_2926.webp";
import img50 from "./gallery/IMG_2937.webp";
import img51 from "./gallery/IMG_2945.webp";
import img53 from "./gallery/IMG_2956.webp";
import img54 from "./gallery/IMG_2959.webp";
import img58 from "./gallery/IMG_4337.webp";
import img59 from "./gallery/IMG_4382.webp";
import img60 from "./gallery/IMG_4385.webp";
import img61 from "./gallery/IMG_4409.webp";
import img62 from "./gallery/IMG_4440.webp";
import img63 from "./gallery/IMG_4442.webp";
import img65 from "./gallery/IMG_4497.webp";
import img66 from "./gallery/IMG_4499.webp";
import img67 from "./gallery/IMG_4510.webp";
import img68 from "./gallery/IMG_4532.webp";
import img70 from "./gallery/IMG_6482.webp";
import img71 from "./gallery/IMG_6577.webp";
import img72 from "./gallery/IMG_6662.webp";
import img73 from "./gallery/IMG_6723.webp";
import img75 from "./gallery/IMG_6732.webp";

const galleryImages = [
  { id: 1, url: img1 },
  { id: 3, url: img3 },
  { id: 6, url: img6 },
  { id: 7, url: img7 },
  { id: 9, url: img9 },
  { id: 10, url: img10 },
  { id: 11, url: img11 },
  { id: 12, url: img12 },
  { id: 13, url: img13 },
  { id: 14, url: img14 },
  { id: 15, url: img15 },
  { id: 17, url: img17 },
  { id: 18, url: img18 },
  { id: 19, url: img19 },
  { id: 23, url: img23 },
  { id: 27, url: img27 },
  { id: 30, url: img30 },
  { id: 31, url: img31 },
  { id: 34, url: img34 },
  { id: 36, url: img36 },
  { id: 37, url: img37 },
  { id: 41, url: img41 },
  { id: 45, url: img45 },
  { id: 46, url: img46 },
  { id: 48, url: img48 },
  { id: 49, url: img49 },
  { id: 50, url: img50 },
  { id: 51, url: img51 },
  { id: 53, url: img53 },
  { id: 54, url: img54 },
  { id: 58, url: img58 },
  { id: 59, url: img59 },
  { id: 60, url: img60 },
  { id: 61, url: img61 },
  { id: 62, url: img62 },
  { id: 63, url: img63 },
  { id: 65, url: img65 },
  { id: 66, url: img66 },
  { id: 67, url: img67 },
  { id: 68, url: img68 },
  { id: 70, url: img70 },
  { id: 71, url: img71 },
  { id: 72, url: img72 },
  { id: 73, url: img73 },
  { id: 75, url: img75 },
];

/* ---------- Gallery card: image load hone tak loader dikhata hai ---------- */
function GalleryCard({ img, index, onOpen }) {
  const [loaded, setLoaded] = useState(false);

  // Cached image jo pehle se load ho chuki ho, uske liye loader foran hata do
  const setImgRef = useCallback((el) => {
    if (el && el.complete && el.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <div
      className={`gallery-card ${loaded ? "is-loaded" : "is-loading"}`}
      style={{ animationDelay: `${index * 0.02}s` }}
      onClick={onOpen}
    >
      {!loaded && (
        <div className="img-loader" aria-hidden="true">
          <span className="img-spinner" />
        </div>
      )}

      <img
        ref={setImgRef}
        src={img.url}
        alt="Gallery item"
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
    </div>
  );
}

/* ---------- Lightbox image: bari image aane tak spinner ---------- */
function LightboxImage({ src }) {
  const [loaded, setLoaded] = useState(false);

  const setImgRef = useCallback((el) => {
    if (el && el.complete && el.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <>
      {!loaded && (
        <div className="lightbox-loader" aria-hidden="true">
          <span className="img-spinner img-spinner-lg" />
        </div>
      )}
      <img
        ref={setImgRef}
        src={src}
        alt="Gallery preview"
        className={`lightbox-img ${loaded ? "is-loaded" : ""}`}
        draggable={false}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
    </>
  );
}

function Our_Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const isOpen = selectedIndex !== null;

  const closeLightbox = useCallback(() => setSelectedIndex(null), []);

  const showNext = useCallback(() => {
    setSelectedIndex((i) => (i + 1) % galleryImages.length);
  }, []);

  const showPrev = useCallback(() => {
    setSelectedIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  // Keyboard controls
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeLightbox, showNext, showPrev]);

  // Lightbox khulne par background scroll band
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Swipe handlers
  const onTouchStart = (e) => {
    touchEndX.current = null;
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      diff > 0 ? showNext() : showPrev();
    }
  };

  return (
    <div className="gallery-page">
      {/* ---------- Top Page Banner ---------- */}
      <div className="top-page-banner">
        <div className="banner-overlay"></div>
        <div className="banner-inner">
          <span className="page-category">Explore Pakistan</span>
          <h1 className="page-title">Gallery</h1>
        </div>
      </div>

      {/* ---------- Gallery Header ---------- */}
      <div className="gallery-header">
        <span className="sub-tag">Visual Journey</span>
        <h1>Captured Moments</h1>
      </div>

      {/* ---------- Main Content / Grid ---------- */}
      <div
        className="container"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div className="magazine-grid">
          {galleryImages.map((img, index) => (
            <GalleryCard
              key={img.id}
              img={img}
              index={index}
              onOpen={() => setSelectedIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* ---------- Lightbox ---------- */}
      {isOpen && (
        <div className="lightbox-modal" onClick={closeLightbox}>
          <button
            className="close-btn"
            onClick={closeLightbox}
            aria-label="Close"
          >
            ✕
          </button>

          <button
            className="nav-btn nav-prev"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div
            className="lightbox-stage"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* key badalne se har nayi image par loader dobara chalta hai */}
            <LightboxImage
              key={galleryImages[selectedIndex].id}
              src={galleryImages[selectedIndex].url}
            />
          </div>

          <button
            className="nav-btn nav-next"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}

export default Our_Gallery;