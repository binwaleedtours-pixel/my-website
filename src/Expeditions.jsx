import React from "react";
import { Link } from "react-router-dom";
import "./Expeditions.css";

const expeditionsData = [
  {
    id: 1,
    slug: "naran-valley",
    title: "Naran Valley",
    image: "https://loremflickr.com/500/350/naran,valley,river",
    badge: "3 Days",
    departure: "Departures: Mon & Thu Night",
    price: "PKR 18,500",
    solo: "18,500",
    couple: "44,000",
  },
  {
    id: 2,
    slug: "swat-valley",
    title: "Swat Valley",
    image: "https://loremflickr.com/500/350/swat,valley,river",
    badge: "3 Days",
    departure: "Departures: Mon & Thu Night",
    price: "PKR 18,500",
    solo: "18,500",
    couple: "44,000",
  },
  {
    id: 3,
    slug: "kashmir",
    title: "Kashmir",
    image: "https://loremflickr.com/500/350/kashmir,valley,mountains",
    badge: "3 Days",
    departure: "Departures: Mon & Thu Night",
    price: "PKR 18,500",
    solo: "18,500",
    couple: "44,000",
  },
  {
    id: 4,
    slug: "kumrat-jhazbanda",
    title: "Kumrat & Jhazbanda",
    image: "https://loremflickr.com/500/350/forest,waterfall,green",
    badge: "4 Days",
    departure: "Departures: Wed Night",
    price: "PKR 25,000",
    solo: "25,000",
    couple: "55,000",
  },
  {
    id: 5,
    slug: "hunza-khunjrab-pass",
    title: "Hunza & Khunjrab Pass",
    image: "https://loremflickr.com/500/350/autumn,valley,river,mountains",
    badge: "5 Days",
    departure: "Departures: Tue & Fri Night",
    price: "PKR 29,000",
    solo: "29,000",
    couple: "65,000",
  },
  {
    id: 6,
    slug: "fairy-meadows",
    title: "Fairy Meadows",
    image: "https://loremflickr.com/500/350/cabin,snowmountain,meadow",
    badge: "5 Days",
    departure: "Departures: Tue & Fri Night",
    price: "PKR 29,000",
    solo: "29,000",
    couple: "65,000",
  },
  {
    id: 7,
    slug: "skardu-valley",
    title: "Skardu Valley",
    image: "https://loremflickr.com/500/350/skardu,valley,desert,mountains",
    badge: "6 Days",
    departure: "Departures: Thu Night",
    price: "PKR 36,000",
    solo: "36,000",
    couple: "82,000",
  },
  {
    id: 8,
    slug: "hunza-skardu",
    title: "Hunza & Skardu",
    image: "https://loremflickr.com/500/350/hunza,skardu,greenvalley,lake",
    badge: "8 Days",
    departure: "Departures: Fri Night",
    price: "PKR 45,000",
    solo: "45,000",
    couple: "95,000",
  },
];

function Expeditions() {
  return (
    <section className="expeditions" id="tours">
      {/* Section Heading */}
      <div className="section-heading">
        <h2>Featured Expeditions</h2>
        <p>
          Curated itineraries designed to showcase the pinnacle of alpine
          beauty. From swift weekend escapes to comprehensive highland tours.
        </p>
      </div>

      {/* Expeditions Grid */}
      <div className="exp-grid">
        {expeditionsData.map((exp) => (
          <div key={exp.id} className="exp-card">
            {/* Clickable Image -> Detail Page */}
            <Link to={`/tour/${exp.slug}`} className="exp-img-link">
              <div className="exp-img">
                <img src={exp.image} alt={exp.title} />
                <span className="days-badge">{exp.badge}</span>
              </div>
            </Link>

            <div className="exp-body">
              {/* Clickable Title -> Detail Page */}
              <Link to={`/tour/${exp.slug}`} className="exp-title-link">
                <h4>{exp.title}</h4>
              </Link>

              <div className="exp-departure">{exp.departure}</div>
              <div className="exp-divider"></div>
              <div className="exp-price-row">
                <span className="label">Starting from</span>
                <span className="value">{exp.price}</span>
              </div>
              <div className="exp-sub">
                <span>Solo: PKR {exp.solo}</span>
                <span>Couple: PKR {exp.couple}</span>
              </div>

              {/* Single Full-Width Book Now Button */}
              <div className="exp-actions">
                <Link to={`/tour/${exp.slug}`} className="btn-exp-book">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

    
    </section>
  );
}

export default Expeditions;