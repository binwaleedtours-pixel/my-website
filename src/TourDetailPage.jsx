import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { toursData } from "./data/toursData"; // Path check karein
import "./TourDetailPage.css";

function TourDetailPage() {
  const { slug } = useParams();

  // Find tour by slug
  const tour = toursData?.find(
    (item) => item.slug.toLowerCase().trim() === slug?.toLowerCase().trim()
  );

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    travelDate: "",
    destination: tour?.title || "",
    persons: 1,
    roomType: "Single / Group Sharing", // Default choice
  });

  const [bookingStatus, setBookingStatus] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  // Fallback Carousel Images (agar database me gallery images na ho)
  const galleryImages = tour?.gallery || [
    tour?.heroImage || tour?.image,
    tour?.image || tour?.heroImage,
    "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1627894010302-3932e652d874?q=80&w=1000&auto=format&fit=crop",
  ].filter(Boolean);

  // Auto-Play Carousel Logic
  useEffect(() => {
    if (!galleryImages || galleryImages.length <= 1) return;
    const interval = setInterval(() => {
      setActiveSlide((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 3500); // Change image every 3.5s

    return () => clearInterval(interval);
  }, [galleryImages]);

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

  // Helper to extract numeric price from string e.g. "PKR 18,500" -> 18500
  const getNumericPrice = (priceStr) => {
    if (!priceStr) return 0;
    if (typeof priceStr === "number") return priceStr;
    const num = priceStr.toString().replace(/[^0-9]/g, "");
    return parseInt(num, 10) || 0;
  };

  const unitPrice = getNumericPrice(tour.price);
  
  // Couple surcharge (Optional: e.g. Couple room extra cost, ya direct base calculation)
  const coupleExtra = formData.roomType === "Couple (Private Room)" ? 4000 : 0;
  const totalPrice = (unitPrice * Number(formData.persons)) + (formData.roomType === "Couple (Private Room)" ? coupleExtra : 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "923099956484"; // Target Number

    const message = `👋 *NEW TOUR BOOKING INQUIRY*%0A%0A` +
      `📍 *Tour:* ${encodeURIComponent(formData.destination || tour.title)}%0A` +
      `👤 *Name:* ${encodeURIComponent(formData.name)}%0A` +
      `📅 *Travel Date:* ${encodeURIComponent(formData.travelDate)}%0A` +
      `👥 *Persons:* ${encodeURIComponent(formData.persons)} Person(s)%0A` +
      `🛌 *Stay Type:* ${encodeURIComponent(formData.roomType)}%0A` +
      `💵 *Total Price:* PKR ${totalPrice.toLocaleString()} (Approx)%0A%0A` +
      `Please confirm availability!`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    setBookingStatus(true);
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="tour-detail-page">
      {/* Tour Banner with High Visibility Typography */}
      <div
        className="tour-banner"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 26, 23, 0.75), rgba(5, 26, 23, 0.85)), url(${tour.heroImage || tour.image})`,
        }}
      >
        <div className="container banner-inner">
          <span className="location-badge">📍 {tour.location || "Pakistan"}</span>
          <h1 className="banner-title">{tour.title}</h1>
          <div className="banner-meta">
            <span>⏱️ {tour.duration}</span>
            <span>👥 {tour.groupSize || "12-18 People"}</span>
            <span>⭐ {tour.rating || "4.9"} ({tour.reviewsCount || 29} reviews)</span>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="container tour-content-grid">
        <div className="tour-main-details">
          
          {/* Auto-Playing Image Carousel Section */}
          <section className="carousel-section">
            <div className="auto-carousel">
              {galleryImages.map((imgUrl, idx) => (
                <div
                  key={idx}
                  className={`carousel-slide ${idx === activeSlide ? "active" : ""}`}
                  style={{ backgroundImage: `url(${imgUrl})` }}
                />
              ))}
              {/* Carousel Indicators */}
              <div className="carousel-dots">
                {galleryImages.map((_, idx) => (
                  <span
                    key={idx}
                    className={`dot ${idx === activeSlide ? "active" : ""}`}
                    onClick={() => setActiveSlide(idx)}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Overview Section */}
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
                🎉 <h4>Opening WhatsApp...</h4>
                <p>Aap ki booking inquiry redirect kar di gayi hai.</p>
                <button 
                  onClick={() => setBookingStatus(false)} 
                  className="btn-book-again"
                >
                  Book Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="booking-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label>Travel Date</label>
                  <input 
                    type="date" 
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label>Destination</label>
                  <input 
                    type="text" 
                    name="destination"
                    value={formData.destination || tour.title}
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label>Booking / Room Type</label>
                  <select 
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    required
                  >
                    <option value="Single / Group Sharing">Single / Group Sharing</option>
                    <option value="Couple (Private Room)">Couple (Private Room)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Number of Persons</label>
                  <input 
                    type="number" 
                    name="persons"
                    min="1"
                    max="50"
                    value={formData.persons}
                    onChange={handleChange}
                    required 
                  />
                </div>

                {/* Calculated Total Price Box */}
                <div className="calculated-price-box">
                  <span>Total Calculated Price:</span>
                  <h4>PKR {totalPrice.toLocaleString()}</h4>
                  {formData.roomType === "Couple (Private Room)" && (
                    <small>*Includes private couple room surcharge</small>
                  )}
                </div>

                <button type="submit" className="btn-book">
                  Book via WhatsApp 💬
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourDetailPage;