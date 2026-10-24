import React, { useState, useRef, useLayoutEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "./assets/BinWaleedTours.png";
import AnnouncementBar from "./AnnouncementBar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);

  // Header (bar + navbar) ki height measure karke CSS variable --header-h set karta hai.
  // Pages ke banners isse apni jagah set karte hain, taake text header ke peeche na chhupe.
  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const update = () => {
      let h = 0;
      el.querySelectorAll(".announcement-bar, .nav-wrap").forEach((p) => {
        h += p.offsetHeight;
      });
      document.documentElement.style.setProperty("--header-h", `${h}px`);
    };

    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    el.querySelectorAll(".announcement-bar, .nav-wrap").forEach((p) => ro.observe(p));

    window.addEventListener("resize", update);
    window.addEventListener("load", update); // logo/fonts load hone ke baad dobara naapo

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
      window.removeEventListener("load", update);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header" ref={headerRef}>
      {/* Announcement bar: header ke top par, header ke saath sticky */}
      <AnnouncementBar />

      <div className="nav-wrap">
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Company Logo" className="logo-img" />
        </Link>

        {/* Desktop Links */}
        <nav className="desktop-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
          <NavLink to="/OurTour" className={({ isActive }) => (isActive ? "active" : "")}>
            Our Tours
          </NavLink>
          <NavLink to="/About" className={({ isActive }) => (isActive ? "active" : "")}>
            About Us
          </NavLink>
          <NavLink to="/Our_Gallery" className={({ isActive }) => (isActive ? "active" : "")}>
            Gallery
          </NavLink>
          <NavLink to="/Contact_Us" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </nav>

        {/* Desktop Action Button */}
        <Link to="/Contact_Us" className="btn btn-dark desktop-btn">
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
          <NavLink to="/OurTour" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
            Our Tours
          </NavLink>
          <NavLink to="/About" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
            About Us
          </NavLink>
          <NavLink to="/Our_Gallery" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
            Gallery
          </NavLink>
          <NavLink to="/Contact_Us" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>

        <div className="mobile-action">
          <Link to="/Contact_Us" className="btn btn-gold" onClick={closeMenu}>
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;