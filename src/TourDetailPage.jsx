import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toursData } from "./data/toursData"; // Path verify karein (agar pages folder me hai to ../data/toursData hoga)
import "./TourDetailPage.css";

function TourDetailPage() {
  const { slug } = useParams();

  // Debugging: Browser console (F12) me check karein kya print ho raha hai
  console.log("URL Slug:", slug);
  console.log("Available Tours Data:", toursData);

  // Exact slug matching
  const tour = toursData?.find(
    (item) => item.slug.toLowerCase().trim() === slug?.toLowerCase().trim()
  );

  const [bookingStatus, setBookingStatus] = useState(false);

  // Agar tour match na ho
  if (!tour) {
    return (
      <div style={{ padding: "100px 20px", textAlign: "center" }}>
        <h2>Tour Not Found ❌</h2>
        <p>Searched URL Slug: <strong>"{slug}"</strong></p>
        <p>Yeh package humare database/toursData.js mein nahi mila.</p>
        <Link to="/" style={{ color: "#00c853", fontWeight: "bold" }}>
          ← Back to Home / Tours
        </Link>
      </div>
    );
  }

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingStatus(true);
  };

  return (
    <div className="tour-detail-page">
      {/* Tour Banner */}
      <div
        className="tour-banner"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 26, 23, 0.65), rgba(5, 26, 23, 0.88)), url(${tour.heroImage || tour.image})`,
        }}
      >
        <div className="container">
          <span className="location-badge">📍 {tour.location || "Pakistan"}</span>
          <h1>{tour.title}</h1>
          <div className="banner-meta">
            <span>⏱️ {tour.duration}</span>
            <span>👥 {tour.groupSize || "12-15 People"}</span>
            <span>⭐ {tour.rating || "4.8"} ({tour.reviewsCount || 20} reviews)</span>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="container tour-content-grid">
        <div className="tour-main-details">
          <section className="detail-section">
            <h2>Overview</h2>
            <p>{tour.overview}</p>
          </section>

          {tour.highlights && (
            <section className="detail-section">
              <h2>Highlights</h2>
              <ul className="highlights-list">
                {tour.highlights.map((item, idx) => (
                  <li key={idx}>✓ {item}</li>
                ))}
              </ul>
            </section>
          )}

          {tour.itinerary && (
            <section className="detail-section">
              <h2>Day-by-Day Itinerary</h2>
              <div className="itinerary-timeline">
                {tour.itinerary.map((step, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-day">{step.day}</div>
                    <div className="timeline-body">
                      <h4>{step.title}</h4>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="detail-section grid-split">
            <div>
              <h3>What's Included</h3>
              <ul className="inc-list">
                {tour.included?.map((inc, i) => (
                  <li key={i}>✅ {inc}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>What's Excluded</h3>
              <ul className="exc-list">
                {tour.excluded?.map((exc, i) => (
                  <li key={i}>❌ {exc}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Sidebar Booking Form */}
        <div className="tour-sidebar">
          <div className="booking-card">
            <div className="price-header">
              <span className="price-label">Starting From</span>
              <h3 className="price-val">{tour.price} <span>/ person</span></h3>
            </div>

            {bookingStatus ? (
              <div className="booking-success">
                🎉 <h4>Inquiry Received!</h4>
                <p>Our tour consultant will contact you on WhatsApp shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="booking-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <label>WhatsApp / Phone</label>
                  <input type="tel" placeholder="+92 300 1234567" required />
                </div>
                <button type="submit" className="btn-book">Book This Expedition</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourDetailPage;