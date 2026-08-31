import React from "react";
import "./Features.css";

function Features() {
  const featureList = [
    {
      id: 1,
      icon: "🏨",
      title: "Luxury Accommodation & Stays",
      description:
        "Handpicked top-rated hotels, cozy resorts, and private family/couple rooms for complete privacy and comfort.",
    },
    {
      id: 2,
      icon: "🍲",
      title: "Hygienic Delicious Meals",
      description:
        "Freshly prepared quality breakfast and dinner included to keep you energized throughout your tour.",
    },
    {
      id: 3,
      icon: "🚌",
      title: "Comfortable Travel & 4x4",
      description:
        "Modern air-conditioned vehicles and professional 4x4 Jeeps for off-road tracks driven by expert mountain drivers.",
    },
    {
      id: 4,
      icon: "🏔️",
      title: "15+ Iconic Sightseeing Spots",
      description:
        "Covering maximum destinations, serene lakes, and hidden valleys in a single well-structured itinerary.",
    },
    {
      id: 5,
      icon: "👫",
      title: "Couple & Family Environment",
      description:
        "Dedicated private rooms and a safe, respectful environment curated specially for families and couples.",
    },
    {
      id: 6,
      icon: "🧭",
      title: "24/7 Expert Tour Guides",
      description:
        "Professional local tour managers dedicated to assisting you at every step and making your trip hassle-free.",
    },
  ];

  return (
    <section className="features" id="why-us">
      {/* Section Heading */}
      <div className="section-heading">
        <h2>Why Travel With Us</h2>
        <p>
          We take care of every detail so you can focus on making unforgettable
          memories across Pakistan.
        </p>
      </div>

      {/* Features Grid */}
      <div className="features-grid">
        {featureList.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;