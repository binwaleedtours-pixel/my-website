import React, { useEffect, useRef, useState } from "react";
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

/* Element viewport mein aate hi ek baar true ho jata hai */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, shown];
}

function ExpCard({ exp, index }) {
  const [ref, shown] = useReveal();
  const p = getPricing(exp);
  const onSale = p.discount > 0;

  // Har row mein left -> right stagger (3 columns)
  const delay = (index % 3) * 140;

  return (
    <div
      ref={ref}
      className={`exp-card ${shown ? "is-visible" : ""}`}
      style={{ "--delay": `${delay}ms` }}
    >
      <Link to={`/tour/${exp.slug}`} className="exp-img-link">
        <div className="exp-img">
          <img src={exp.image} alt={exp.title} loading="lazy" />
          <div className="exp-img-overlay" />
          <span className="days-badge">{exp.badge}</span>
          {onSale && <span className="sale-badge">🔥 {p.discount}% OFF</span>}
          <span className="explore-pill">Explore Tour &rarr;</span>
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
            {onSale && <span className="old-price">PKR {fmt(p.solo)}</span>}
            PKR {fmt(p.newSolo)}
          </span>
        </div>

        <div className="exp-sub">
          <span>
            Solo: {onSale && <s>{fmt(p.solo)}</s>} PKR {fmt(p.newSolo)}
          </span>
          <span>
            Couple: {onSale && <s>{fmt(p.couple)}</s>} PKR {fmt(p.newCouple)}
          </span>
        </div>

        <div className="exp-actions">
          <Link to={`/tour/${exp.slug}`} className="btn-exp-book">
            <span>Book Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Expeditions() {
  const [headRef, headShown] = useReveal(0.3);
  const [btnRef, btnShown] = useReveal(0.5);

  return (
    <section className="expeditions" id="tours">
      <div
        ref={headRef}
        className={`section-headings ${headShown ? "is-visible" : ""}`}
      >
        <h2>Featured Expeditions</h2>
        <span className="heading-line" />
        <p>
          Curated itineraries designed to showcase alpine beauty. From swift
          weekend escapes to comprehensive highland tours.
        </p>
      </div>

      <div className="exp-grid">
        {expeditionsData.slice(0, 6).map((exp, i) => (
          <ExpCard key={exp.id} exp={exp} index={i} />
        ))}
      </div>

      {/* View All Button Section */}
      <div
        ref={btnRef}
        className={`view-all-wrap ${btnShown ? "is-visible" : ""}`}
      >
        <Link to="/ourTour" className="btn-view-all">
          View All Expeditions <span className="arrow">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}