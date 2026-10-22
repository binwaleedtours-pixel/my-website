import React from "react";
import { Link } from "react-router-dom";
import { toursData, DISCOUNT_PERCENT } from "./data/toursData";
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

// "18,500" / "PKR 18,500" -> 18500
const toNumber = (str) => parseInt(String(str).replace(/[^0-9]/g, ""), 10) || 0;
const fmt = (n) => n.toLocaleString();

// Discounted prices calculate karna (detail page jaisa hi logic)
const getPricing = (exp) => {
  const tour = toursData.find((t) => t.slug === exp.slug);
  const discount = tour?.discountPercent ?? DISCOUNT_PERCENT;
  const factor = 1 - discount / 100;

  const solo = toNumber(exp.solo);
  const couple = toNumber(exp.couple);

  // Couple price = 2 persons + private room surcharge (surcharge par discount nahi)
  const surcharge = couple - solo * 2;

  return {
    discount,
    solo,
    couple,
    newSolo: Math.round(solo * factor),
    newCouple: Math.round(solo * 2 * factor) + surcharge,
  };
};

export default function Expeditions() {
  return (
    <section className="expeditions" id="tours">
      <div className="section-headings">
        <h2>Featured Expeditions</h2>
        <p>Curated itineraries designed to showcase alpine beauty. From swift weekend escapes to comprehensive highland tours.</p>
      </div>

      <div className="exp-grid">
        {expeditionsData.slice(0, 6).map((exp) => {
          const p = getPricing(exp);
          const onSale = p.discount > 0;

          return (
            <div key={exp.id} className="exp-card">
              <Link to={`/tour/${exp.slug}`} className="exp-img-link">
                <div className="exp-img">
                  <img src={exp.image} alt={exp.title} loading="lazy" />
                  <span className="days-badge">{exp.badge}</span>
                  {onSale && (
                    <span
                      className="sale-badge"
                      style={{
                        position: "absolute",
                        top: "12px",
                        right: "12px",
                        background: "#ff3d00",
                        color: "#fff",
                        padding: "4px 12px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "bold",
                        zIndex: 2,
                      }}
                    >
                      🔥 {p.discount}% OFF
                    </span>
                  )}
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
                  <span className="value">
                    {onSale && (
                      <span
                        style={{
                          textDecoration: "line-through",
                          opacity: 0.55,
                          fontSize: "14px",
                          marginRight: "8px",
                        }}
                      >
                        PKR {fmt(p.solo)}
                      </span>
                    )}
                    PKR {fmt(p.newSolo)}
                  </span>
                </div>

                <div className="exp-sub">
                  <span>
                    Solo:{" "}
                    {onSale && (
                      <s style={{ opacity: 0.55 }}>{fmt(p.solo)}</s>
                    )}{" "}
                    PKR {fmt(p.newSolo)}
                  </span>
                  <span>
                    Couple:{" "}
                    {onSale && (
                      <s style={{ opacity: 0.55 }}>{fmt(p.couple)}</s>
                    )}{" "}
                    PKR {fmt(p.newCouple)}
                  </span>
                </div>

                <div className="exp-actions">
                  <Link to={`/tour/${exp.slug}`} className="btn-exp-book">Book Now</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* View All Button Section */}
      <div className="view-all-wrap">
        <Link to="/ourTour" className="btn-view-all">
          View All Expeditions &rarr;
        </Link>
      </div>
    </section>
  );
}