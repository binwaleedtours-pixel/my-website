import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    destination: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMsg = `Hello Bin Waleed Tours!%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Destination:* ${formData.destination}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/923177773141?text=${whatsappMsg}`, "_blank");
  };

  return (
    <div className="contact-page-wrapper">
      {/* ---------- Top Page Hero Banner ---------- */}
      <div className="page-banner">
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h1>Contact Us</h1>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">Contact Us</span>
          </div>
        </div>
      </div>

      {/* ---------- Main Contact Section ---------- */}
      <section className="contact-section" id="contact">
        <div className="section-headings">
          <h2>Get In Touch With Us</h2>
          <p>
            Have questions about our upcoming tours or want a customized plan?
            Reach out to our trip advisors.
          </p>
        </div>

        <div className="contact-container">
          {/* Left Side: Contact Info */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Plan your next adventure with Bin Waleed Tours today.</p>

            <div className="info-list">
              <div className="info-item">
                <span className="icon">📍</span>
                <div>
                  <h5>Office Location</h5>
                  <p>26 F/F, Quaid Commercial, Near Eiffel Tower, Bahria Town Lahore </p>
                                    <p>37AC E-BLock Muhafiz Town, Lahore </p>

                </div>
              </div>

              <div className="info-item">
                <span className="icon">📞</span>
                <div>
                  <h5>Phone / WhatsApp</h5>
                  <p>+923028908761</p>
                                    <p>+923157764146</p>

                </div>
              </div>

              <div className="info-item">
                <span className="icon">✉️</span>
                <div>
                  <h5>Email Address</h5>
                  <p>binwaleedtours@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <span className="icon">🕒</span>
                <div>
                  <h5>Working Hours</h5>
                  <p>Mon - Sat: 10:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-links-wrap">
              <h5>Follow Our Journeys</h5>
              <div className="social-icons">
                <a href="https://www.facebook.com/binwaleedtours" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <span>FB</span>
                </a>
                <a href="https://www.instagram.com/binwaleedtours/" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <span>IG</span>
                </a>
                <a href="https://www.tiktok.com/@binwaleedtours" target="_blank" rel="noreferrer" aria-label="TikTok">
                  <span>TT</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Inquiry Form */}
          <div className="contact-form-wrap">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Phone / WhatsApp Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="03xx xxxxxxx"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Interested Destination</label>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Destination</option>
                  <option value="Hunza Valley">Hunza Valley</option>
                  <option value="Skardu Valley">Skardu Valley</option>
                  <option value="Fairy Meadows">Fairy Meadows</option>
                  <option value="Swat Valley">Swat Valley</option>
                  <option value="Naran Valley">Naran Valley</option>

                  <option value="Khasmir">Khasmir</option>
                  <option value="Kumrat Jhazbanda">Kumrat Jhazbanda</option>
                                    <option value="Kumrat Jhazbanda">Astor Minimerg</option>


                  <option value="Custom Tour">Custom Private Tour</option>
                  
                </select>
              </div>

              <div className="form-group">
                <label>Your Message</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about total travelers or trip dates..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn-send">
                Send Inquiry on WhatsApp ↗
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="map-container">
          <iframe
            title="Bin Waleed Tours Location"
            src="https://maps.app.goo.gl/N6NUn1bPJQ3NsVDV9"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Contact;