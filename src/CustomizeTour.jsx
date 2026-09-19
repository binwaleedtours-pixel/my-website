import React from "react";
import { Link } from "react-router-dom";
import "./CustomizeTour.css";

function CustomizeTour() {
  // Aap yahan apni custom tours / gallery ki images aur titles add kar sakte hain
  const tourItems = [
    {
      id: 1,
      title: "Private Hunza Valley Explorer",
      category: "Custom Tour",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hello Bin Waleed Tours! I want to book or customize the Private Hunza Valley Explorer tour.",
    },
    {
      id: 2,
      title: "Skardu & Shigar Luxury Trip",
      category: "By-Air / Road Package",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hello Bin Waleed Tours! I want to book or customize the Skardu & Shigar Luxury Trip.",
    },
    {
      id: 3,
      title: "Fairy Meadows & Nanga Parbat",
      category: "Adventure Trek",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hello Bin Waleed Tours! I want to book or customize the Fairy Meadows & Nanga Parbat tour.",
    },
    {
      id: 4,
      title: "Swat & Kalam Valley Getaway",
      category: "Family Tour",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hello Bin Waleed Tours! I want to book or customize the Swat & Kalam Valley Getaway.",
    },
    {
      id: 5,
      title: "Naran Kaghan & Shogran Tour",
      category: "Honeymoon Special",
      image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hello Bin Waleed Tours! I want to book or customize the Naran Kaghan & Shogran Tour.",
    },
    {
      id: 6,
      title: "Kumrat Valley & Jahaz Banda",
      category: "Explorer Camp",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hello Bin Waleed Tours! I want to book or customize the Kumrat Valley & Jahaz Banda tour.",
    },
  ];

  return (
    <div className="customize-page-wrapper">
      {/* ---------- Top Page Hero Banner (Same as Contact / Privacy) ---------- */}
      <div className="page-banner">
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h1>Customize Your Tour</h1>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">Customize Tour</span>
          </div>
        </div>
      </div>

      {/* ---------- Main Grid Section ---------- */}
      <section className="customize-section">
        <div className="section-headings">
          <h2>Explore Our Customized Tour Service & Gallery</h2>
          <p>Tailor your dream trip with us. Pick your destination or let us build a custom plan for you.</p>
        </div>

        <div className="customize-grid-container">
          {tourItems.map((item) => (
            <div className="customize-card" key={item.id}>
              <div className="card-img-wrap">
                <img src={item.image} alt={item.title} loading="lazy" />
                <span className="card-badge">{item.category}</span>
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <a
                  href={`https://wa.me/923028908761?text=${encodeURIComponent(item.whatsappText)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-book-now"
                >
                  Book Now on WhatsApp ↗
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom General Custom Inquiry Button */}
        <div className="bottom-inquiry-wrap">
          <a
            href="https://wa.me/923028908761?text=Hello%20Bin%20Waleed%20Tours!%20I%20want%20to%20create%20a%20fully%20customized%20private%20tour%20package."
            target="_blank"
            rel="noreferrer"
            className="btn-main-custom"
          >
            Create Your Own Custom Tour Plan ↗
          </a>
        </div>
      </section>
    </div>
  );
}

export default CustomizeTour;