import React from "react";
import { Link } from "react-router-dom";
import "./AboutPage.css";
import Gallery from "./Gallery";
import founderImg from "./assets/founder.png";
  import ceoImg from "./assets/ceo.png";
function AboutPage() {
  return (
    <div className="about-page">
      {/* Standard Hero Banner with Breadcrumbs */}
      <div className="page-banner">
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h1>About Us</h1>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">About Us</span>
          </div>
        </div>
      </div>

      {/* Company Introduction Section */}
      <section className="about-intro-section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-text">
              <span className="sub-heading">Explore Pakistan Like Never Before</span>
              <h2>About Bin Waleed Tours</h2>
              <p>
                <strong>Bin Waleed Tours</strong> is a registered Pakistan-based tourism company built with a passion for travel, exploration, and creating unforgettable experiences. We believe that travel is more than just visiting a destination; it is about discovering new places, experiencing different cultures, building connections, and creating memories that stay with you for a lifetime.
              </p>
              <p>
                From the majestic peaks of Hunza and Skardu to the scenic valleys of Kashmir, Naran Kaghan, and Swat Kalam, we aim to make every journey comfortable, exciting, and meaningful for individuals, couples, families, friends, and groups.
              </p>
            </div>
            <div className="intro-stats-box">
              <div className="stat-item">
                <h3>100%</h3>
                <p>Tailored Itineraries</p>
              </div>
              <div className="stat-item">
                <h3>FBR & LCCI</h3>
                <p>Fully Registered Business</p>
              </div>
              <div className="stat-item">
                <h3>Northern</h3>
                <p>Pakistan Specialists</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To make travel easier, more enjoyable, and more memorable. We are committed to providing thoughtfully planned tours, reliable services, comfortable travel, and experiences that allow our guests to focus on what truly matters—enjoying the journey.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">🌟</div>
              <h3>Our Vision</h3>
              <p>
                To build Bin Waleed Tours into a trusted and recognized tourism brand, known for quality travel experiences, responsible tourism, and a genuine passion for showcasing the beauty of Pakistan to travelers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Messages Section */}
      <section className="leadership-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Leadership</h2>
            <p>Guiding visionaries dedicated to delivering exceptional travel experiences across Pakistan.</p>
          </div>

          {/* Founder & Director Card */}
          <div className="leader-card">
            <div className="leader-img-wrapper">
              <img
                src={founderImg}
                alt="Waleed Chaudhry - Founder & Director"
                className="leader-img"
              />
              <span className="leader-badge">Founder</span>
            </div>
            <div className="leader-content">
              <span className="leader-role">Founder & Director</span>
              <h3>Waleed Chaudhry</h3>
              <p className="leader-message">
                "With a deep passion for travel and exploration, I founded Bin Waleed Tours with the vision of building a trusted tourism brand that connects people directly with the breathtaking natural beauty of Pakistan. Our goal remains focused on top-tier quality experiences and absolute customer satisfaction."
              </p>
              <div className="leader-info">
                <h4>Waleed Chaudhry</h4>
                <span>Founder & Director, Bin Waleed Tours</span>
              </div>
            </div>
          </div>

          {/* CEO Card */}
          <div className="leader-card reverse">
            <div className="leader-img-wrapper">
              <img
                src={ceoImg}
                alt="Shakaib Ali - CEO"
                className="leader-img"
              />
              <span className="leader-badge">CEO</span>
            </div>
            <div className="leader-content">
              <span className="leader-role">Chief Executive Officer</span>
              <h3>Shakaib Ali</h3>
              <p className="leader-message">
                "As CEO, I contribute my leadership, vision, and operational expertise to the continuous development of Bin Waleed Tours. We prioritize robust service standards, seamless transport, and curated itineraries to ensure every expedition is safe, comfortable, and memorable."
              </p>
              <div className="leader-info">
                <h4>Shakaib Ali</h4>
                <span>Chief Executive Officer, Bin Waleed Tours</span>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registrations & Accountability Section */}
      <section className="registrations-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Registrations & Credentials</h2>
            <p>Operating as a formal, accountable, and trusted tourism enterprise.</p>
          </div>
          <div className="reg-cards-grid">
            <div className="reg-card">
              <div className="reg-icon">🏛️</div>
              <h3>FBR Registered</h3>
              <p>Registered with the Federal Board of Revenue (FBR) ensuring full financial compliance and legal transparency.</p>
                                            <span className="reg-number">NTN No.: 6808587-0</span>

            </div>
            <div className="reg-card">
              <div className="reg-icon">📜</div>
              <h3>LCCI Member</h3>
              <p>Proud member of the Lahore Chamber of Commerce & Industry (LCCI).</p>
              <span className="reg-number">Membership No.: 142915-A</span>
            </div>
          </div>
        </div>
      </section>

      <Gallery />
    </div>
  );
}

export default AboutPage;