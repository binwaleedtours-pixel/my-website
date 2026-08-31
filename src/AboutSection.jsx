import React from "react";
import { Link } from "react-router-dom";
import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about-section" id="about">
      {/* Section Heading */}
      <div className="section-heading">
        <h2>About Bin Waleed Tours</h2>
        <p>
          Crafting unforgettable alpine expeditions and luxury tours across the
          majestic landscapes of Pakistan.
        </p>
      </div>

      {/* About Card */}
      <div className="about-card">
        <div className="about-text">
          <h3>
            From Majestic Mountains To Serene Valleys, We Make Every Journey
            Unforgettable.
          </h3>
          <p className="about-description">
            Bin Waleed Tours is dedicated to providing premium, hassle-free travel
            experiences. Whether you're seeking adrenaline-filled mountain treks,
            peaceful valley retreats, or customized luxury family tours, our expert
            guides ensure complete safety and authentic local hospitality.
          </p>

          {/* Key Metrics / Highlights */}
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Successful Tours</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5.0★</span>
              <span className="stat-label">Client Rating</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5k+</span>
              <span className="stat-label">Happy Adventurers</span>
            </div>
          </div>

          <div className="about-buttons">
            <Link to="/why-us" className="btn btn-green">
              Learn More About Us ↗
            </Link>
          </div>
        </div>

        {/* About Feature Image */}
        <div
          className="about-img"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=1200&q=80")',
          }}
        ></div>
      </div>
    </section>
  );
}

export default AboutSection;