import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Standard Components
import Header from "./header";
import Hero from "./Hero";
import SplitCards from "./SplitCards";
import Destinations from "./Destinations";
import Expeditions from "./Expeditions";
import Gallery from "./Gallery";
import AboutSection from "./AboutSection";
import Features from "./Features";
import VideoCarousel from "./VideoCarousel";
import Contact from "./Contact";
import Footer from "./Footer";

// Page Views
import AboutPage from "./AboutPage";
import GalleryPage from "./GalleryPage";
import TourDetailPage from "./TourDetailPage";

// GSAP Preloader Component (If in components folder, adjust path accordingly e.g. "./components/Preloader")
import Preloader from "./Preloader"; 

// Page switch hone par automatically screen ko top par scroll karne ke liye
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Single Page View (Home Landing Page)
function Home() {
  return (
    <>
      <Hero />
      <SplitCards />
      <Destinations />
      <Expeditions />
      <Gallery />
      <AboutSection />
      <Features />
      <VideoCarousel />
    </>
  );
}

function App() {
  // Check if loader has already run in current session
  const [loading, setLoading] = useState(() => {
    return !sessionStorage.getItem("hasVisited");
  });

  const handlePreloaderComplete = () => {
    sessionStorage.setItem("hasVisited", "true");
    setLoading(false);
  };

  return (
    <>
      {/* GSAP Rolling Text Preloader */}
      {loading && <Preloader onComplete={handlePreloaderComplete} />}

      <ScrollToTop />
      <Header />

      <Routes>
        {/* Main Home Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Dynamic Tour Details Route */}
        <Route path="/tour/:slug" element={<TourDetailPage />} />

        {/* Dedicated Pages */}
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/galleryPage" element={<GalleryPage />} />
        <Route path="/tours" element={<Expeditions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;