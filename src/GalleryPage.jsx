import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./GalleryPage.css";

const galleryImages = [
  {
    id: 1,
    title: "Hunza Valley Autumn",
    category: "Valleys",
    url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "K2 Basecamp Expedition",
    category: "Trekking",
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Attabad Lake Boating",
    category: "Lakes",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Fairy Meadows Night Sky",
    category: "Camping",
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Skardu Desert Dunes",
    category: "Valleys",
    url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Passu Cones Sunrise",
    category: "Trekking",
    url: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80",
  },
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
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImg(img)}
            >
              <img src={img.url} alt={img.title} />
              <div className="card-info">
                <span className="cat-badge">{img.category}</span>
                <h3>{img.title}</h3>
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
            <img src={selectedImg.url} alt={selectedImg.title} />
            <div className="lightbox-details">
              <h4>{selectedImg.title}</h4>
              <p>{selectedImg.category} Expedition</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryPage;