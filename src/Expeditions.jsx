import React from "react";
import { Link } from "react-router-dom";
import "./Expeditions.css";

import naranImg from "./tourImg/Naran.webp";
import swatImg from "./tourImg/swat.webp";
import kashmirImg from "./tourImg/Kashmir.webp";
import kumratImg from "./tourImg/kumrat.webp";
import hunzaImg from "./tourImg/hunza.webp";
import fairyMeadowsImg from "./tourImg/fairymeadows.webp";
import skarduImg from "./tourImg/skardu.webp";
import hunzaSkarduImg from "./tourImg/hunzaskardu.webp";

const expeditionsData = [
  { id: 1, slug: "naran-valley", title: "Naran Valley", image: naranImg, badge: "3 Days", departure: "Departures: Mon & Thu Night", price: "PKR 18,500", solo: "18,500", couple: "42,000" },
  { id: 2, slug: "swat-valley", title: "Swat Valley", image: swatImg, badge: "3 Days", departure: "Departures: Mon & Thu Night", price: "PKR 18,500", solo: "18,500", couple: "42,000" },
  { id: 3, slug: "kashmir", title: "Kashmir", image: kashmirImg, badge: "3 Days", departure: "Departures: Mon & Thu Night", price: "PKR 18,500", solo: "18,500", couple: "42,000" },
  { id: 4, slug: "kumrat-jhazbanda", title: "Kumrat & Jhazbanda", image: kumratImg, badge: "4 Days", departure: "Departures: Wed Night", price: "PKR 25,000", solo: "25,000", couple: "55,000" },
  { id: 5, slug: "hunza-khunjrab-pass", title: "Hunza & Khunjrab Pass", image: hunzaImg, badge: "5 Days", departure: "Departures: Tue & Fri Night", price: "PKR 29,000", solo: "29,000", couple: "65,000" },
  { id: 6, slug: "fairy-meadows", title: "Fairy Meadows", image: fairyMeadowsImg, badge: "5 Days", departure: "Departures: Tue & Fri Night", price: "PKR 29,000", solo: "29,000", couple: "65,000" },
  { id: 7, slug: "skardu-valley", title: "Skardu Valley", image: skarduImg, badge: "6 Days", departure: "Departures: Thu Night", price: "PKR 36,000", solo: "36,000", couple: "82,000" },
  { id: 8, slug: "hunza-skardu", title: "Hunza & Skardu", image: hunzaSkarduImg, badge: "8 Days", departure: "Departures: Fri Night", price: "PKR 44,000", solo: "44,000", couple: "97,000" },
];

export default function Expeditions() {
  return (
    
    <section className="expeditions" id="tours">
      
      <div className="section-headings">
        <h2>Featured Expeditions</h2>
        <p>Curated itineraries designed to showcase alpine beauty. From swift weekend escapes to comprehensive highland tours.</p>
      </div>

      <div className="exp-grid">
        {expeditionsData.map((exp) => (
          <div key={exp.id} className="exp-card">
            <Link to={`/tour/${exp.slug}`} className="exp-img-link">
              <div className="exp-img">
                <img src={exp.image} alt={exp.title} loading="lazy" />
                <span className="days-badge">{exp.badge}</span>
              </div>
            </Link>

            <div className="exp-body">
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

              <div className="exp-actions">
                <Link to={`/tour/${exp.slug}`} className="btn-exp-book">Book Now</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button Section */}
      <div className="view-all-wrap">
        <Link to="/tours" className="btn-view-all">
          View All Expeditions &rarr;
        </Link>
      </div>
    </section>
  );
}