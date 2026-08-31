import React, { useState } from "react";
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
    <section className="contact-section" id="contact">
      {/* Section Heading */}
      <div className="section-heading">
        <h2>Get In Touch With Us</h2>
        <p>
          Have questions about our upcoming tours or want a customized plan?
          Reach out to our trip advisors.
        </p>
      </div>

      <div className="contact-container">
        {/* Left Side: Contact Information & Socials */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Plan your next adventure with Bin Waleed Tours today.</p>

          <div className="info-list">
            <div className="info-item">
              <span className="icon">📍</span>
              <div>
                <h5>Office Location</h5>
                <p>Big city plaza, Liberty roundabout, Gulberg, Lahore</p>
              </div>
            </div>

            <div className="info-item">
              <span className="icon">📞</span>
              <div>
                <h5>Phone / WhatsApp</h5>
                <p>+92 (317) 7773141</p>
              </div>
            </div>

            <div className="info-item">
              <span className="icon">✉️</span>
              <div>
                <h5>Email Address</h5>
                <p>support@travelwithzunair.pk</p>
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

          {/* Social Links Block */}
          <div className="social-links-wrap">
            <h5>Follow Our Journeys</h5>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <span>FB</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <span>IG</span>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok">
                <span>TT</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                <span>YT</span>
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

      {/* Google Map Section */}
      <div className="map-container">
        <iframe
          title="Bin Waleed Tours Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.5235832714264!2d74.3468503!3d31.5085603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045a55555555%3A0x123456789abcdef!2sLiberty%20Roundabout%2C%20Gulberg%20III%2C%20Lahore%2C%20Punjab!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;