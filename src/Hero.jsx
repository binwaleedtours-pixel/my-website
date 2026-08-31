import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1>Discover the Majestic North</h1>
        <p>
          Embark on unforgettable journeys through Pakistan's most serene
          valleys and rugged peaks. Expertly guided expeditions for the true
          adventurer.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-dark">
            Book Now →
          </a>
          <a href="#tours" className="btn btn-outline-light">
            Explore Tours
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;