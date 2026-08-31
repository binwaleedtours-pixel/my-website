import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="nav-wrap">
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/logo.jpg" alt="Company Logo" className="logo-img" />
        </Link>

        {/* Desktop Links */}
        <nav className="desktop-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
          <NavLink to="/tours" className={({ isActive }) => (isActive ? "active" : "")}>
            Tours
          </NavLink>
          <NavLink to="/AboutPage" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
          <NavLink to="/GalleryPage" className={({ isActive }) => (isActive ? "active" : "")}>
            Gallery
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </nav>

        {/* Desktop Action Button */}
        <Link to="/contact" className="btn btn-dark desktop-btn">
          Book Now
        </Link>

        {/* Mobile Hamburger Toggle */}
        <button
          className={`hamburger-btn ${isOpen ? "is-active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg viewBox="0 0 24 24" width="28" height="28" stroke="#ffffff" strokeWidth="2.5" fill="none">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="28" height="28" stroke="#0c211e" strokeWidth="2.5" fill="none">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu Layer */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <nav className="mobile-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/tours" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
            Tours
          </NavLink>
          <NavLink to="/AboutPage" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
            About Us
          </NavLink>
          <NavLink to="/GalleryPage" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
            Gallery
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>

        <div className="mobile-action">
          <Link to="/contact" className="btn btn-gold" onClick={closeMenu}>
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;