
import React from "react";
import { Link } from "react-router-dom";
import "./CustomizeTour.css";

function CustomizeTour() {
  const tourItems = [
    {
      id: 1,
      title: "HUNZA (Gilgit-Baltistan)",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hello Bin Waleed Tours! I want to book or customize the Private Hunza Valley Explorer tour.",
    },
    {
      id: 2,
      title: "SKARDU (Gilgit-Baltistan)",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hello Bin Waleed Tours! I want to book or customize the Skardu & Shigar Luxury Trip.",
    },
    {
      id: 3,
      title: "ASTORE (Gilgit-Baltistan)",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hello Bin Waleed Tours! I want to book or customize the Fairy Meadows & Nanga Parbat tour.",
    },
    {
      id: 4,
      title: "RAMA MEADOWS (Gilgit-Baltistan)",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hello Bin Waleed Tours! I want to book or customize the Swat & Kalam Valley Getaway.",
    },
    {
      id: 5,
      title: "KHAPLU VALLEY (Gilgit-Baltistan)",
      image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hello Bin Waleed Tours! I want to book or customize the Naran Kaghan & Shogran Tour.",
    },
    {
      id: 6,
      title: "SHIGAR VALLEY (Gilgit-Baltistan)",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hello Bin Waleed Tours! I want to book or customize the Kumrat Valley & Jahaz Banda tour.",
    },
    {
      id: 7,
      title: "NARAN KAGHAN (Mansehra Dist)",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hello Bin Waleed Tours! I want to book or customize the Neelum Valley Adventure.",
    },
    {
      id: 8,
      title: "SHOGRAN (Mansehra Dist)",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hello Bin Waleed Tours! I want to book or customize the Azad Kashmir Family Tour.",
    },
    {
      id: 9,
      title: "SIRI PAYE (Mansehra Dist)",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hello Bin Waleed Tours! I want to book or customize the Murree & Patriata Hills Trip.",
    },
    {
      id: 10,
      title: "KALAM (Swat Dist)",
      image: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hello Bin Waleed Tours! I want to book or customize the Chitral & Kalash Valley Tour.",
    },
    {
      id: 11,
      title: "MAHODAND LAKE (Swat Dist)",
      image: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hello Bin Waleed Tours! I want to book or customize the Deosai National Park Expedition.",
    },
    {
      id: 12,
      title: "MALAM JABBA (Swat Dist)",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hello Bin Waleed Tours! I want to book or customize the Khunjerab Pass Road Trip.",
    },
    {
      id: 13,
      title: "SWAT VALLEY (Swat Dist)",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hello Bin Waleed Tours! I want to book or customize the Attabad Lake & Passu Cones tour.",
    },
    {
      id: 14,
      title: "NALTAR VALLEY (Gilgit-Baltistan)",
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hello Bin Waleed Tours! I want to book or customize the Upper Hunza Photography Tour.",
    },
    {
      id: 15,
      title: "UPPER DIR VALLEY",
      image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hello Bin Waleed Tours! I want to book or customize the Lahore to Northern Areas Tour.",
    },
    {
      id: 16,
      title: "CHITRAL (Chitral Dist)",
      image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hello Bin Waleed Tours! I want to book or customize the Islamabad City & Nature Escape.",
    },
    {
      id: 17,
      title: "KALASH VALLEY (Chitral Dist)",
      image: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hello Bin Waleed Tours! I want to book or customize the Ratti Gali Lake Trek.",
    },
    {
      id: 18,
      title: "NEELUM VALLEY (Neelum Dist)",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hello Bin Waleed Tours! I want to book or customize the Shogran & Siri Paye Meadows tour.",
    },
    {
      id: 19,
      title: "ARANG KEL (Neelum Dist)",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hello Bin Waleed Tours! I want to book or customize the Babusar Top Scenic Drive.",
    },
    {
      id: 20,
      title: "RATTI GALI LAKE (Neelum Dist)",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hello Bin Waleed Tours! I want to book or customize the Galiyat Weekend Getaway.",
    },
    {
      id: 21,
      title: "BANJOSA LAKE (Poonch Dist)",
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hello Bin Waleed Tours! I want to customize a Couples Private Mountain Retreat.",
    },
    {
      id: 22,
      title: "TOLI PEER (Poonch Dist)",
      image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hello Bin Waleed Tours! I want to customize a Family Northern Pakistan Adventure.",
    },
    {
      id: 23,
      title: "LEEPA VALLEY (Muzaffarabad Dist)",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
      whatsappText: "Hello Bin Waleed Tours! I want to customize a Luxury SUV Northern Areas Tour.",
    },
    // {
    //   id: 24,
    //   title: "Pakistan Grand Northern Explorer",
    //   image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    //   whatsappText: "Hello Bin Waleed Tours! I want to customize the Pakistan Grand Northern Explorer tour.",
    // },
  ];

  return (
    <div className="customize-page-wrapper">
      {/* Page Hero Banner */}
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

      {/* Main Tour Gallery */}
      <section className="customize-section">
        <div className="section-headings">
          <h2>Explore Our Customized Tour Service & Gallery</h2>
          <p>
            Tailor your dream trip with us. Pick your destination or let us
            build a custom plan for you.
          </p>
        </div>

        <div className="customize-grid-container">
          {tourItems.map((item) => (
            <div className="customize-card" key={item.id}>
              <div className="card-img-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
              </div>

              <div className="card-content">
                <h3>{item.title}</h3>

                {/* Optional individual WhatsApp booking button */}
                {/*
                <a
                  href={`https://wa.me/923028908761?text=${encodeURIComponent(
                    item.whatsappText
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-book-now"
                >
                  Book Now on WhatsApp ↗
                </a>
                */}
              </div>
            </div>
          ))}
        </div>

        {/* General Custom Tour Inquiry */}
        <div className="bottom-inquiry-wrap">
          <a
            href="https://wa.me/923028908761?text=Hello%20Bin%20Waleed%20Tours!%20I%20want%20to%20create%20a%20fully%20customized%20private%20tour%20package."
            target="_blank"
            rel="noopener noreferrer"
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