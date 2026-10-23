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
import Contact_Us from "./Contact_Us";
import Footer from "./Footer";

// Page Views
import CustomizeTour from "./CustomizeTour";
import About from "./About";
import Our_Gallery from "./Our_Gallery";
import TourDetailPage from "./TourDetailPage";
import Privacypolicy from "./Privacypolicy";
import Termandconditions from "./Termandconditions";
import OurTour from "./OurTour";
// GSAP Preloader Component
import Preloader from "./Preloader";
import DiscountPopup from "./DiscountPopup";
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
        <Route path="/About" element={<About />} />
        <Route path="/Our_Gallery" element={<Our_Gallery />} />
        <Route path="/ourTour" element={<OurTour />} />
        <Route path="/Contact_Us" element={<Contact_Us />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/termandconditions" element={<Termandconditions />} />
        <Route path="/customizetours" element={<CustomizeTour />} />
      </Routes>

      <Footer />
<DiscountPopup />
    </>
  );
}

export default App;