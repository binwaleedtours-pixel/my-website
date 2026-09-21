import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toursData } from "./data/toursData"; 
import "./TourDetailPage.css";

// Yahan apni Banner.png file ko import karein
import bannerImg from "./assets/Banner.png";

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
    roomType: "Single / Group Sharing",
  });

  const [bookingStatus, setBookingStatus] = useState(false);

  // Single Main Image for Tour Card
  const mainTourImage = tour?.heroImage || tour?.image || "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1000&auto=format&fit=crop";

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

  const getNumericPrice = (priceStr) => {
    if (!priceStr) return 0;
    if (typeof priceStr === "number") return priceStr;
    const num = priceStr.toString().replace(/[^0-9]/g, "");
    return parseInt(num, 10) || 0;
  };

  const unitPrice = getNumericPrice(tour.price);
  const basePrice = unitPrice * Number(formData.persons);
  const coupleSurcharge = formData.roomType === "Couple (Private Room)" ? 5000 : 0;
  const totalPrice = basePrice + coupleSurcharge;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "roomType") {
      if (value === "Couple (Private Room)") {
        setFormData((prev) => ({
          ...prev,
          roomType: value,
          persons: prev.persons < 2 ? 2 : prev.persons,
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          roomType: value,
        }));
      }
    } else if (name === "persons") {
      const val = parseInt(value, 10) || 1;
      if (formData.roomType === "Couple (Private Room)" && val < 2) {
        return; 
      }
      setFormData((prev) => ({ ...prev, [name]: val }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "+923028908761"; 

    const message = `👋 *NEW TOUR BOOKING INQUIRY*%0A%0A` +
      `📍 *Tour:* ${encodeURIComponent(formData.destination || tour.title)}%0A` +
      `👤 *Name:* ${encodeURIComponent(formData.name)}%0A` +
      `📅 *Travel Date:* ${encodeURIComponent(formData.travelDate)}%0A` +
      `👥 *Persons:* ${encodeURIComponent(formData.persons)} Person(s)%0A` +
      `🛌 *Stay Type:* ${encodeURIComponent(formData.roomType)}%0A` +
      `💵 *Total Price:* PKR ${totalPrice.toLocaleString()}%0A%0A` +
      `Please confirm availability!`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    setBookingStatus(true);
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="tour-detail-page">
      {/* Tour Banner */}
      <div
        className="tour-banner"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 26, 23, 0.75), rgba(5, 26, 23, 0.85)), url(${bannerImg})`,
        }}
      >
        <div className="container banner-inner">
          <span className="location-badge">📍 {tour.location || "Pakistan"}</span>
          <h1 className="banner-title">{tour.title}</h1>
          <div className="banner-meta">
            <span>⏱️ {tour.duration}</span>
            <span>👥 {tour.groupSize || "20-22 People"}</span>
            <span>⭐ {tour.rating || "4.9"} ({tour.reviewsCount || 29} reviews)</span>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="container tour-content-grid">
        <div className="tour-main-details">
          
          <section className="tour-image-card-section">
            <div className="tour-single-image-wrapper">
              <img src={mainTourImage} alt={tour.title} className="tour-featured-image" />
            </div>
          </section>

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

          {tour.tourDetails && (
            <section className="detail-section">
              <h2>About This Tour</h2>
              <div className="tour-info-block">
                <h3>🚀 Departure Cities</h3>
                <div className="badge-grid">
                  {tour.tourDetails.departures?.map((dep, idx) => (
                    <span key={idx} className="info-badge">{dep}</span>
                  ))}
                </div>
              </div>

              <div className="tour-info-block">
                <h3>🛎️ Services Included</h3>
                <ul className="services-list">
                  <li><strong>Accommodation:</strong> {tour.tourDetails.services?.accommodation}</li>
                  <li><strong>Food:</strong> {tour.tourDetails.services?.food}</li>
                  <li><strong>Transportation:</strong> {tour.tourDetails.services?.transportation}</li>
                </ul>
              </div>

              {tour.tourDetails.importantNotes && (
                <div className="important-notes-box">
                  <h3>⚠️ Important Guidelines</h3>
                  <ul>
                    {tour.tourDetails.importantNotes.map((note, idx) => (
                      <li key={idx}>• {note}</li>
                    ))}
                  </ul>
                </div>
              )}
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

          {/* 📄 PDF Brochure Normal Open / Download Section */}
          {tour.pdfUrl && (
            <section className="detail-section pdf-download-box" style={{ background: "#f9f9f9", padding: "20px", borderRadius: "8px", border: "1px dashed #00c853", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "15px", marginTop: "20px" }}>
              <div>
                <h3 style={{ margin: "0 0 5px 0", color: "#051a17" }}>📄 Complete Tour Itinerary</h3>
                <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>View or download the detailed day-by-day plan brochure.</p>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <a 
                  href={tour.pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-download-pdf"
                  style={{ background: "#051a17", color: "#fff", padding: "10px 16px", borderRadius: "5px", textDecoration: "none", fontWeight: "bold", display: "inline-block", fontSize: "14px" }}
                >
                  Open PDF 👁️
                </a>
                <a 
                  href={tour.pdfUrl} 
                  download
                  className="btn-download-pdf"
                  style={{ background: "#00c853", color: "#fff", padding: "10px 16px", borderRadius: "5px", textDecoration: "none", fontWeight: "bold", display: "inline-block", fontSize: "14px" }}
                >
                  Download 📥
                </a>
              </div>
            </section>
          )}

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
                <button onClick={() => setBookingStatus(false)} className="btn-book-again">
                  Book Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="booking-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label>Travel Date</label>
                  <input type="date" name="travelDate" value={formData.travelDate} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label>Destination</label>
                  <input type="text" name="destination" value={formData.destination || tour.title} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label>Booking / Room Type</label>
                  <select name="roomType" value={formData.roomType} onChange={handleChange} required>
                    <option value="Single / Group Sharing">Single / Group Sharing</option>
                    <option value="Couple (Private Room)">Couple (Private Room)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Number of Persons</label>
                  <input type="number" name="persons" min={formData.roomType === "Couple (Private Room)" ? "2" : "1"} max="50" value={formData.persons} onChange={handleChange} required />
                  {formData.roomType === "Couple (Private Room)" && (
                    <small style={{ color: "#e6c182", fontSize: "11px", marginTop: "4px", display: "block" }}>
                      *Couple package requires minimum 2 persons.
                    </small>
                  )}
                </div>

                <div className="calculated-price-box">
                  <span>Total Calculated Price:</span>
                  <h4>PKR {totalPrice.toLocaleString()}</h4>
                  {formData.roomType === "Couple (Private Room)" && (
                    <small style={{ color: "#00c853", fontSize: "11.5px", fontWeight: "600", display: "block", marginTop: "4px" }}>
                      ✨ Includes Couple Private Room 
                    </small>
                  )}
                </div>

                <button type="submit" className="btn-book">Book via WhatsApp 💬</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourDetailPage;