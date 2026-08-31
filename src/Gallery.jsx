import React from "react";
import "./Gallery.css";

function Gallery() {
  const images = [
    { id: 1, url: "https://loremflickr.com/600/400/mountains,lake", alt: "Attabad Lake" },
    { id: 2, url: "https://loremflickr.com/600/400/pakistan,valley", alt: "Hunza Valley" },
    { id: 3, url: "https://loremflickr.com/600/400/snow,mountains", alt: "Nanga Parbat" },
    { id: 4, url: "https://loremflickr.com/600/400/river,forest", alt: "Neelum Valley" },
    { id: 5, url: "https://loremflickr.com/600/400/desert,mountains", alt: "Katpana Desert" },
    { id: 6, url: "https://loremflickr.com/600/400/meadow,green", alt: "Deosai Plains" },
  ];

  // Infinite smooth scroll ke liye double array
  const galleryList = [...images, ...images];

  return (
    <section className="gallery-section">
      {/* Section Heading */}
      <div className="section-heading">
        <h2>Captured Moments</h2>
        <p>
          A glimpse into the breathtaking landscapes and unforgettable memories
          from our recent expeditions.
        </p>
      </div>

      {/* Auto Scrolling Marquee Track */}
      <div className="gallery-slider">
        <div className="gallery-track">
          {galleryList.map((img, index) => (
            <div key={index} className="gallery-card">
              <img src={img.url} alt={img.alt} />
              <div className="gallery-overlay">
                <span>{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;