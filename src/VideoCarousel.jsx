import React, { useRef } from "react";
import "./VideoCarousel.css";

function VideoCarousel() {
  const scrollRef = useRef(null);

  const videos = [
    {
      id: 1,
      title: "Exploring Hunza",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-mountain-range-under-a-blue-sky-41527-large.mp4",
      tag: "Hunza Valley",
    },
    {
      id: 2,
      title: "Skardu Desert",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-desert-and-mountains-41528-large.mp4",
      tag: "Skardu",
    },
    {
      id: 3,
      title: "Fairy Meadows Trek",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4",
      tag: "Fairy Meadows",
    },
    {
      id: 4,
      title: "Kumrat Waterfalls",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-waterfall-in-forest-2213-large.mp4",
      tag: "Kumrat Valley",
    },
    {
      id: 5,
      title: "Swat Scenic Drive",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-driving-on-a-mountain-road-41529-large.mp4",
      tag: "Swat Valley",
    },
  ];

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="video-section">
      {/* Section Heading & Navigation Buttons */}
      <div className="video-header">
        <div className="section-heading-left">
          <h2>Our Instagram Stories</h2>
          <p>Glimpses of real adventures shared by our travelers on the move.</p>
        </div>
        <div className="scroll-controls">
          <button aria-label="Scroll Left" onClick={() => handleScroll("left")}>
            ‹
          </button>
          <button aria-label="Scroll Right" onClick={() => handleScroll("right")}>
            ›
          </button>
        </div>
      </div>

      {/* Reel Carousel Container */}
      <div className="reels-container" ref={scrollRef}>
        {videos.map((reel) => (
          <div key={reel.id} className="reel-card">
            <video src={reel.videoUrl} muted loop autoPlay playsInline />
            <div className="reel-overlay">
              <span className="reel-tag">{reel.tag}</span>
              <h4>{reel.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VideoCarousel;