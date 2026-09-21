import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "./assets/BinWaleedToursLogo.png";

function Footer() {
  const whatsappNumber = "+923028908761";
  const whatsappMessage = encodeURIComponent("Hello! I want to inquire about tours.");

  return (
    <footer>
      <div className="footer-grid">
        {/* Brand Info */}
        <div>
          <div className="footer-brand">
             <img src={logo} alt="Bin Waleed Tours" />
            <div>
            </div>
          </div>
        </div>

        {/* Company Navigation Links */}
        <div>
          <h5>Company</h5>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tours">Our Tours</Link></li>
            <li><Link to="/GalleryPage">Gallery</Link></li>
            <li><Link to="/aboutPage">About Us</Link></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h5>Support</h5>
          <ul className="footer-links">
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/privacypolicy">Privacy Policy</Link></li>
            <li><Link to="/termandconditions">Terms and Conditions</Link></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h5>Get in Touch</h5>
          <div className="contact-item">
            <span className="ic">📍</span>
            <span>
              26 F/F, Quaid Commercial, Near Eiffel Tower, Bahria Town Lahore
            </span>
          </div>
          <div className="contact-item">
            <span className="ic">✉️</span>
            <span>binwaleedtours@gmail.com</span>
          </div>
          <div className="contact-item">
            <span className="ic">📞</span>
            <span>+923028908761</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar with Social Links */}
      <div className="footer-bottom">
        <span>
          © 2026 Bin Waleed Tours. All rights reserved. Built for adventurers.
        </span>

        {/* Social Icons in Bottom Right */}
        <div className="footer-socials-bottom">
          <a
            href="https://www.facebook.com/binwaleedtours"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.02 11.48 5.6 13.78 5.6c1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.23 0-1.61.76-1.61 1.54V12h2.78l-.44 3h-2.34v6.8c4.56-.93 8-4.96 8-9.8z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/binwaleedtours/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@binwaleedtours"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.33 22a6.33 6.33 0 0 0 6.33-6.32V9.05a8.16 8.16 0 0 0 4.93 1.64V7.25a4.85 4.85 0 0 1-1-.56z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Floating WhatsApp Button (Official Icon Updated) */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          className="whatsapp-icon"
          fill="currentColor"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.42 1.33 4.88L2 22l5.33-1.42c1.41.77 3.02 1.2 4.71 1.2 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.83 14.19c-.24.67-1.4 1.28-1.93 1.36-.51.08-1.16.12-3.74-.92-3.15-1.28-5.23-4.49-5.39-4.71-.16-.22-1.27-1.69-1.27-3.23 0-1.54.81-2.28 1.1-2.59.29-.31.63-.39.84-.39.21 0 .42 0 .61.01.2 0 .47-.08.74.57.27.67.92 2.25 1 2.41.08.16.13.35.03.56-.1.21-.15.34-.31.52-.16.18-.34.4-.49.54-.16.16-.33.34-.14.66.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.6 1.6.32.16.51.14.7-.08.19-.22.82-.96 1.04-1.29.22-.33.44-.27.74-.16.3.11 1.9.9 2.23 1.06.33.16.55.24.63.37.08.13.08.75-.16 1.42z" />
        </svg>
      </a>
    </footer>
  );
}

export default Footer;