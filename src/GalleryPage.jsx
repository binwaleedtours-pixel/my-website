import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./GalleryPage.css";

const galleryImages = [
  {
    id: 1,
    title: "Hunza Valley Autumn",
    category: "Valleys",
    url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=1200&q=80",
    featured: true,
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

const categories = ["All", "Valleys", "Trekking", "Lakes", "Camping"];

function GalleryPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedImg, setSelectedImg] = useState(null);

  const filteredImages =
    activeTab === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeTab);

  return (
    <div className="gallery-page">
      {/* Exact Page Banner Block */}
      <div className="page-banner">
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h1>Gallery</h1>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">Gallery</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container" style={{ paddingTop: "40px" }}>
        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${activeTab === cat ? "active" : ""}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetrical Magazine Grid */}
        <div className="magazine-grid">
          {filteredImages.map((img, index) => (
            <div
              key={img.id}
              className={`gallery-card ${img.featured ? "featured" : ""}`}
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

      {/* Lightbox Pop-up */}
      {selectedImg && (
        <div className="lightbox-modal" onClick={() => setSelectedImg(null)}>
          <div className="lightbox-wrapper" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedImg(null)}>
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