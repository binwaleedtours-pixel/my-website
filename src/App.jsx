import React, { useState, useEffect, useCallback } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
import OurTour from "./OurTour";
// GSAP Preloader Component
import Preloader from "./Preloader";
import Reviews from "./Reviews";
gsap.registerPlugin(ScrollTrigger);

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
            <Reviews />

    </>
  );
}

function App() {
  const [loading, setLoading] = useState(() => {
    try {
      return !sessionStorage.getItem("hasVisited");
    } catch {
      return true;
    }
  });

  const handlePreloaderComplete = useCallback(() => {
    try {
      sessionStorage.setItem("hasVisited", "true");
    } catch {
      /* ignore */
    }
    setLoading(false);
  }, []);

  // Preloader ke baad ScrollTrigger positions dobara calculate karo
  useEffect(() => {
    if (!loading) {
      const t = setTimeout(() => ScrollTrigger.refresh(), 150);
      return () => clearTimeout(t);
    }
  }, [loading]);

  // Jab tak preloader chal raha hai, sirf preloader dikhao
  if (loading) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour/:slug" element={<TourDetailPage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/galleryPage" element={<GalleryPage />} />
        <Route path="/ourTour" element={<OurTour />} />
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