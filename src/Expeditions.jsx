import React from "react";
import { Link } from "react-router-dom";
import "./Expeditions.css";

// Assets folder se images proper import karein
import naranImg from "./tourImg/Naran.jpeg";
import swatImg from "./tourImg/Swat.jpeg";
import kashmirImg from "./tourImg/Kashmir.jpeg";
import kumratImg from "./tourImg/Kumrat.jpeg";
import hunzaImg from "./tourImg/Hunza.jpeg";
import fairyMeadowsImg from "./tourImg/FairyMeadows.jpeg";
import skarduImg from "./tourImg/Skardu.jpeg";
import hunzaSkarduImg from "./tourImg/HunzaSkardu.jpeg";

const expeditionsData = [
  {
    id: 1,
    slug: "naran-valley",
    title: "Naran Valley",
    image: naranImg,
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
    image: swatImg,
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
    image: kashmirImg,
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
    image: kumratImg,
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
    image: hunzaImg,
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
    image: fairyMeadowsImg,
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
    image: skarduImg,
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
    image: hunzaSkarduImg,
    badge: "8 Days",
    departure: "Departures: Fri Night",
    price: "PKR 44,000",
    solo: "44,000",
    couple: "97,000",
  },
];

function Expeditions() {
  return (
    <section className="expeditions" id="tours">
      {/* Section Heading */}
      <div className="section-headings">
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