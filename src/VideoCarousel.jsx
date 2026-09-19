import React from "react";
import "./VideoCarousel.css";

function VideoCarousel() {
  return (
    <section className="instagram-cta-section">
      <div className="instagram-cta-container">
        
        {/* Left Side: Text Content */}
        <div className="instagram-cta-content">
          <span className="cta-badge">📸 Live Community Stories</span>
          <h2>Catch All Real Adventures on Instagram</h2>
          <p>
            Explore daily updates, traveler reviews, behind-the-scenes moments, 
            and real-time video stories from our latest group tours across Pakistan.
          </p>
          <div className="cta-stats">
            <div>
              <h3>50k+</h3>
              <span>Community</span>
            </div>
            <div>
              <h3>4.9 ★</h3>
              <span>Rating</span>
            </div>
          </div>
          <a 
            href="https://www.instagram.com/binwaleedtours/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-instagram-visit"
          >
            Visit Instagram @binwaleedtours 🚀
          </a>
        </div>

        {/* Right Side: Decorative Preview Cards (Simulating Reels) */}
        <div className="instagram-cta-visuals">
          <div className="preview-card card-1">
            <video src="/videos/hunza-reel.mp4" muted loop autoPlay playsInline />
            <span>Hunza Valley 📍</span>
          </div>
          <div className="preview-card card-2">
            <video src="/videos/skardu-reel.mp4" muted loop autoPlay playsInline />
            <span>Skardu Desert 🏜️</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default VideoCarousel;