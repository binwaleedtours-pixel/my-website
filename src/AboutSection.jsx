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
          <h2>Turning Travel Dreams Into Real Journeys
</h2>
          <p>
         Bin Waleed Tours is built for those who want to see more, explore further, and experience Pakistan beyond the usual routes.
          </p>
        </div>

        {/* Hero-Style Feature Card */}
        <div className="about-card">
          {/* Content Side */}
          <div className="about-text">
            <span className="accent-tag">YOUR JOURNEY, OUR PASSION
</span>
            <h3>
From Famous Destinations To Hidden Gems, We Make Every Journey Worth Remembering.
            </h3>
            <p className="about-description">

From the breathtaking valleys of Naran and Kashmir to the majestic landscapes of Hunza, Skardu, Swat, and Fairy Meadows, we bring together carefully planned tours, comfortable travel, and memorable experiences.

Whether you're travelling with family, friends, or looking for your next adventure, we take care of the journey so you can focus on the moments that matter.            </p>

            {/* Key Metrics Grid */}
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">70+</span>
                <span className="stat-label">Guided Expeditions</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-number">4.9 ★</span>
                <span className="stat-label">Verified Rating</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-number">2.5k+</span>
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