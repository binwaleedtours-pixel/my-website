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
import CustomizeTour from "./CustomizeTour";
import AboutPage from "./AboutPage";
import GalleryPage from "./GalleryPage";
import TourDetailPage from "./TourDetailPage";
import Privacypolicy from "./Privacypolicy";
import Termandconditions from "./Termandconditions";
// GSAP Preloader Component
import Preloader from "./Preloader"; 

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <SplitCards />
      <Expeditions />
      <Gallery />
      <AboutSection />
      <Features />
      <VideoCarousel />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(() => {
    return !sessionStorage.getItem("hasVisited");
  });

  const handlePreloaderComplete = () => {
    sessionStorage.setItem("hasVisited", "true");
    setLoading(false);
  };

  return (
    <>
      {loading && <Preloader onComplete={handlePreloaderComplete} />}

      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour/:slug" element={<TourDetailPage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/galleryPage" element={<GalleryPage />} />
        <Route path="/tours" element={<Expeditions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/termandconditions" element={<Termandconditions />} />
        <Route path="/customizetours" element={<CustomizeTour />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;