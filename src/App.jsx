import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";


import Header from "./Header";
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
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        {/* Main Home Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Dynamic Tour Details Route */}
        <Route path="/tour/:slug" element={<TourDetailPage />} />

        {/* Dedicated Pages */}
        <Route path="/aboutPage" element={<AboutPage />} />
        <Route path="/galleryPage" element={<GalleryPage />} />
        <Route path="/tours" element={<Expeditions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;