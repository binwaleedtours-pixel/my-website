import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const whatsappNumber = "923177773141";
  const whatsappMessage = encodeURIComponent("Hello! I want to inquire about tours.");

  return (
    <footer>
      <div className="footer-grid">
        {/* Brand Info */}
        <div>
          <div className="footer-brand">
            <div className="footer-logo">⛰️</div>
            <div>
              <h3>Bin Waleed Tours</h3>
            </div>
          </div>
          <p className="footer-desc">
            Your premier partner for alpine expeditions and luxury tours across
            the majestic landscapes of Pakistan.
          </p>
        </div>

        {/* Company Navigation Links */}
        <div>
          <h5>Company</h5>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tours">Our Tours</Link></li>
            <li><Link to="/destinations">Gallery</Link></li>
            <li><Link to="/aboutPage">About Us</Link></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h5>Support</h5>
          <ul className="footer-links">
            <li><Link to="/contact">Contact Us</Link></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h5>Get in Touch</h5>
          <div className="contact-item">
            <span className="ic">📍</span>
            <span>
              Big city plaza, Liberty roundabout, Gulberg, Lahore, Punjab,
              Pakistan 54000
            </span>
          </div>
          <div className="contact-item">
            <span className="ic">✉️</span>
            <span>support@travelwithzunair.pk</span>
          </div>
          <div className="contact-item">
            <span className="ic">📞</span>
            <span>+92 (317) 7773141</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar with Social Links instead of Globe */}
      <div className="footer-bottom">
        <span>
          © 2026 Bin Waleed Tours. All rights reserved. Built for adventurers.
        </span>

        {/* Social Icons in Bottom Right */}
        <div className="footer-socials-bottom">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.02 11.48 5.6 13.78 5.6c1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.23 0-1.61.76-1.61 1.54V12h2.78l-.44 3h-2.34v6.8c4.56-.93 8-4.96 8-9.8z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.33 22a6.33 6.33 0 0 0 6.33-6.32V9.05a8.16 8.16 0 0 0 4.93 1.64V7.25a4.85 4.85 0 0 1-1-.56z" />
            </svg>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          className="whatsapp-icon"
          fill="currentColor"
        >
          <path d="M16 2a13 13 0 0 0-11.2 19.6L3 29l7.7-1.7A13 13 0 1 0 16 2zm0 23.8a10.8 10.8 0 0 1-5.5-1.5l-.4-.2-4.1.9.9-4-.3-.4A10.8 10.8 0 1 1 16 25.8zm5.9-8.1c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-.1 1.2c.2.2.4.2 1.6 1.4 1.5 1.3 2.8 1.8 3.2 2s.6.3.9-.1c.3-.4 1.2-1.4 1.5-1.9s.6-.4.9-.3c.3.1 2 .9 2.3 1.1s.6.3.7.5a2.6 2.6 0 0 1-.2 1.5z" />
        </svg>
      </a>
    </footer>
  );
}

export default Footer;