import React from "react";
import { Link } from "react-router-dom";
import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Section Header */}
        <div className="section-heading">
          <span className="badge-pill">DISCOVER OUR STORY</span>
          <h2>Crafting Alpine Adventures Across Pakistan</h2>
          <p>
            Bin Waleed Tours turns your dream mountain getaways into safe, 
            luxurious, and deeply authentic local experiences.
          </p>
        </div>

        {/* Hero-Style Feature Card */}
        <div className="about-card">
          {/* Content Side */}
          <div className="about-text">
            <span className="accent-tag">ESTABLISHED EXPERTISE</span>
            <h3>
              From Majestic Peaks To Hidden Valleys, We Elevate Every Step Of Your Journey.
            </h3>
            <p className="about-description">
              We specialize in tailor-made expeditions, serene family retreats, and high-altitude treks. With expert local guides, luxury 4x4 transport, and handpicked premium stays, we take care of all details so you can immerse in nature.
            </p>

            {/* Key Metrics Grid */}
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Guided Expeditions</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-number">5.0 ★</span>
                <span className="stat-label">Verified Rating</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-number">5k+</span>
                <span className="stat-label">Happy Explorers</span>
              </div>
            </div>

            <div className="about-buttons">
              <Link to="/AboutPage" className="btn btn-primary">
                Explore Our Story <span>↗</span>
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Plan Custom Trip
              </Link>
            </div>
          </div>

          {/* Visual Showcase Side */}
          <div className="about-media">
            <div
              className="about-img"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=1200&q=80")',
              }}
            >
              <div className="img-overlay"></div>
            </div>

            {/* Floating Glassmorphism Cards */}
            <div className="floating-badge badge-top">
              <span className="icon">⛰️</span>
              <div>
                <strong>Authentic Local Guides</strong>
                <small>100% Safety Certified</small>
              </div>
            </div>

            <div className="floating-badge badge-bottom">
              <span className="icon">🏕️</span>
              <div>
                <strong>Luxury Mountain Stays</strong>
                <small>Handpicked Comfort</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;