import React from "react";
import "./SplitCards.css";

function SplitCards() {
  return (
    <section className="split-cards">
      <div className="split-grid">
        <div className="split-card card-1">
          <div className="split-content">
            <span className="eyebrow">TRAVEL WITH BIN WALEED</span>
            <h3>Public Tours</h3>
            <a href="#tours" className="tag-btn">
              Explore Tours →
            </a>
          </div>
        </div>
        <div className="split-card card-2">
          <div className="split-content">
            <span className="eyebrow">TAILORED EXPERIENCES</span>
            <h3>Customize your Tour</h3>
            <a href="#custom" className="tag-btn">
              Start Planning ✎
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SplitCards;