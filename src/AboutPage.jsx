import React from "react";
import "./AboutPage.css";
import Gallery from "./Gallery";

function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero Banner */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Bin Waleed Tours</h1>
          <p>
            Leading alpine expeditions & luxury journeys across Pakistan's breathtaking landscapes.
          </p>
        </div>
      </section>

      {/* Leadership Messages Section */}
      <section className="leadership-section">
        <div className="container">
          <div className="section-title">
            <h2>Leadership Messages</h2>
            <p>Guiding visionaries driving your luxury and alpine travel experiences.</p>
          </div>

          {/* CEO Message Card */}
          <div className="leader-card">
            <div className="leader-img-wrapper">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                alt="CEO Bin Waleed Tours"
                className="leader-img"
              />
              <span className="leader-badge">CEO</span>
            </div>
            <div className="leader-content">
              <span className="leader-role">Chief Executive Officer</span>
              <h3>Message from the CEO</h3>
              <p className="leader-message">
                "At Bin Waleed Tours, our passion goes beyond simply organizing trips; we craft life-changing memories. Pakistan holds some of the most spectacular peaks and cultural gems in the world. Our mission is to open these doors to global adventurers with world-class safety standards, top-tier luxury, and unmatched local hospitality."
              </p>
              <div className="leader-info">
                <h4>Muhammad Zunair</h4>
                <span>Founder & CEO, Bin Waleed Tours</span>
              </div>
            </div>
          </div>

          {/* COO Message Card */}
          <div className="leader-card reverse">
            <div className="leader-img-wrapper">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                alt="COO Bin Waleed Tours"
                className="leader-img"
              />
              <span className="leader-badge">COO</span>
            </div>
            <div className="leader-content">
              <span className="leader-role">Chief Operating Officer</span>
              <h3>Message from the COO</h3>
              <p className="leader-message">
                "Seamless operations and guest safety are at the core of everything we do. From luxury transport arrangements to certified high-altitude guides, our ground teams work round-the-clock to ensure every journey is flawlessly executed. We take care of every minor detail so you can focus entirely on enjoying the majesty of the mountains."
              </p>
              <div className="leader-info">
                <h4>Ayesha Khan</h4>
                <span>COO & Head of Operations</span>
              </div>
            </div>
          </div>
        </div>
      </section>
<Gallery />
      </div>
      
  );
}

export default AboutPage;