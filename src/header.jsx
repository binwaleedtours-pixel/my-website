import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="nav-wrap">
        {/* Logo Section */}
        <Link to="/" className="logo">
          <img src="/public/logo.jpg" alt="Company Logo" className="logo-img" />

        </Link>

        {/* Navigation Links */}
        <nav className="links">
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

        {/* Action Button */}
        <Link to="/contact" className="btn btn-dark">
          Book Now
        </Link>
      </div>
    </header>
  );
}

export default Header;