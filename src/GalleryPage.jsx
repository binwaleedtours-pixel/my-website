import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./GalleryPage.css";

// Screenshot ke mutabiq sabhi images ki imports
import img1 from "./gallery/IMG_0644.jpg";
import img2 from "./gallery/IMG_0681.jpg";
import img3 from "./gallery/IMG_0765.jpg";
import img4 from "./gallery/IMG_0854.jpg";
import img5 from "./gallery/IMG_0892.jpg";
import img6 from "./gallery/IMG_0897.jpg";
import img7 from "./gallery/IMG_0927.jpg";
import img8 from "./gallery/IMG_1025.jpg";
import img9 from "./gallery/IMG_1073.jpg";
import img10 from "./gallery/IMG_1078.jpg";
import img11 from "./gallery/IMG_1098.jpg";
import img12 from "./gallery/IMG_1159.jpg";
import img13 from "./gallery/IMG_1161.jpg";
import img14 from "./gallery/IMG_1219.jpg";
import img15 from "./gallery/IMG_1266.jpg";
import img16 from "./gallery/IMG_1268.jpg";
import img17 from "./gallery/IMG_1350.jpg";
import img18 from "./gallery/IMG_1408.jpg";
import img19 from "./gallery/IMG_1431.jpg";
import img20 from "./gallery/IMG_1549.jpg";
import img21 from "./gallery/IMG_1560.jpg";
import img22 from "./gallery/IMG_1695.jpg";
import img23 from "./gallery/IMG_1873.jpg";
import img24 from "./gallery/IMG_1873.jpg";
import img25 from "./gallery/IMG_1997.jpg";
import img26 from "./gallery/IMG_2612.jpg";
import img27 from "./gallery/IMG_2615.jpg";
import img28 from "./gallery/IMG_2624.jpg";
import img29 from "./gallery/IMG_2665.jpg";
import img30 from "./gallery/IMG_2670.jpg";
import img31 from "./gallery/IMG_2673.jpg";
import img32 from "./gallery/IMG_2674.jpg";
import img33 from "./gallery/IMG_2694.jpg";
import img34 from "./gallery/IMG_2697.jpg";
import img35 from "./gallery/IMG_2723.jpg";
import img36 from "./gallery/IMG_2732.jpg";
import img37 from "./gallery/IMG_2736.jpg";
import img38 from "./gallery/IMG_2740.jpg";
import img39 from "./gallery/IMG_2744.jpg";
import img40 from "./gallery/IMG_2779.jpg";
import img41 from "./gallery/IMG_2795.jpg";
import img42 from "./gallery/IMG_2797.jpg";
import img43 from "./gallery/IMG_2803.jpg";
import img44 from "./gallery/IMG_2835.jpg";
import img45 from "./gallery/IMG_2871.jpg";
import img46 from "./gallery/IMG_2904.jpg";
import img47 from "./gallery/IMG_2906.jpg";
import img48 from "./gallery/IMG_2911.jpg";
import img49 from "./gallery/IMG_2926.jpg";
import img50 from "./gallery/IMG_2937.jpg";
import img51 from "./gallery/IMG_2945.jpg";
import img52 from "./gallery/IMG_2948.jpg";
import img53 from "./gallery/IMG_2956.jpg";
import img54 from "./gallery/IMG_2959.jpg";
import img55 from "./gallery/IMG_2962.jpg";
import img56 from "./gallery/IMG_3003.jpg";
import img57 from "./gallery/IMG_3018.jpg";
import img58 from "./gallery/IMG_4337.jpg";
import img59 from "./gallery/IMG_4382.jpg";
import img60 from "./gallery/IMG_4385.jpg";
import img61 from "./gallery/IMG_4409.jpg";
import img62 from "./gallery/IMG_4440.jpg";
import img63 from "./gallery/IMG_4442.jpg";
import img64 from "./gallery/IMG_4443.jpg";
import img65 from "./gallery/IMG_4497.jpg";
import img66 from "./gallery/IMG_4499.jpg";
import img67 from "./gallery/IMG_4510.jpg";
import img68 from "./gallery/IMG_4532.jpg";
import img69 from "./gallery/IMG_4548.jpg";
import img70 from "./gallery/IMG_6482.jpg";
import img71 from "./gallery/IMG_6577.jpg";
import img72 from "./gallery/IMG_6662.jpg";
import img73 from "./gallery/IMG_6723.jpg";
import img74 from "./gallery/IMG_6727.jpg";
import img75 from "./gallery/IMG_6732.jpg";

const galleryImages = [
  { id: 1, url: img1 },
  { id: 2, url: img2 },
  { id: 3, url: img3 },
  { id: 4, url: img4 },
  { id: 5, url: img5 },
  { id: 6, url: img6 },
  { id: 7, url: img7 },
  { id: 8, url: img8 },
  { id: 9, url: img9 },
  { id: 10, url: img10 },
  { id: 11, url: img11 },
  { id: 12, url: img12 },
  { id: 13, url: img13 },
  { id: 14, url: img14 },
  { id: 15, url: img15 },
  { id: 16, url: img16 },
  { id: 17, url: img17 },
  { id: 18, url: img18 },
  { id: 19, url: img19 },
  { id: 20, url: img20 },
  { id: 21, url: img21 },
  { id: 22, url: img22 },
  { id: 23, url: img23 },
  { id: 24, url: img24 },
  { id: 25, url: img25 },
  { id: 26, url: img26 },
  { id: 27, url: img27 },
  { id: 28, url: img28 },
  { id: 29, url: img29 },
  { id: 30, url: img30 },
  { id: 31, url: img31 },
  { id: 32, url: img32 },
  { id: 33, url: img33 },
  { id: 34, url: img34 },
  { id: 35, url: img35 },
  { id: 36, url: img36 },
  { id: 37, url: img37 },
  { id: 38, url: img38 },
  { id: 39, url: img39 },
  { id: 40, url: img40 },
  { id: 41, url: img41 },
  { id: 42, url: img42 },
  { id: 43, url: img43 },
  { id: 44, url: img44 },
  { id: 45, url: img45 },
  { id: 46, url: img46 },
  { id: 47, url: img47 },
  { id: 48, url: img48 },
  { id: 49, url: img49 },
  { id: 50, url: img50 },
  { id: 51, url: img51 },
  { id: 52, url: img52 },
  { id: 53, url: img53 },
  { id: 54, url: img54 },
  { id: 55, url: img55 },
  { id: 56, url: img56 },
  { id: 57, url: img57 },
  { id: 58, url: img58 },
  { id: 59, url: img59 },
  { id: 60, url: img60 },
  { id: 61, url: img61 },
  { id: 62, url: img62 },
  { id: 63, url: img63 },
  { id: 64, url: img64 },
  { id: 65, url: img65 },
  { id: 66, url: img66 },
  { id: 67, url: img67 },
  { id: 68, url: img68 },
  { id: 69, url: img69 },
  { id: 70, url: img70 },
  { id: 71, url: img71 },
  { id: 72, url: img72 },
  { id: 73, url: img73 },
  { id: 74, url: img74 },
  { id: 75, url: img75 },
];

function GalleryPage() {
  const [selectedImg, setSelectedImg] = useState(null);

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
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div className="magazine-grid">
          {galleryImages.map((img, index) => (
            <div
              key={img.id}
              className="gallery-card"
              style={{ animationDelay: `${index * 0.02}s` }}
              onClick={() => setSelectedImg(img)}
            >
              <img src={img.url} alt="Gallery item" />
              <div className="card-info">
                <span className="view-link">View Fullscreen ↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- Lightbox Pop-up ---------- */}
      {selectedImg && (
        <div className="lightbox-modal" onClick={() => setSelectedImg(null)}>
          <div className="lightbox-wrapper" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setSelectedImg(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <img src={selectedImg.url} alt="Fullscreen preview" />
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryPage;