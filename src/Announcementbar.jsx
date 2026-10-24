import { useState, useEffect } from "react";
import "./Announcementbar.css";

// Get the next Thursday at 11:59:59 PM
function getNextSaleEnd() {
  const now = new Date();
  const target = new Date(now);

  // Thursday = 4
  const daysUntilThursday = (4 - now.getDay() + 7) % 7;

  target.setDate(now.getDate() + daysUntilThursday);
  target.setHours(23, 59, 59, 999);

  // If this Thursday's sale has ended, use next Thursday
  if (target <= now) {
    target.setDate(target.getDate() + 7);
  }

  return target.getTime();
}

function getTimeLeft() {
  const remaining = Math.max(0, getNextSaleEnd() - Date.now());

  return {
    days: Math.floor(remaining / (1000 * 60 * 60 * 24)),
    hours: Math.floor((remaining / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((remaining / (1000 * 60)) % 60),
    seconds: Math.floor((remaining / 1000) % 60),
  };
}

const pad = (n) => String(n).padStart(2, "0");

export default function Announcementbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);

    return () => clearInterval(countdownTimer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="announcement-bar" role="region" aria-label="Weekly offer">
      <div className="announcement-inner">
        <span className="ab-tag">SPECIAL WEEKLY OFFER</span>

        <p className="ab-text">
          <span className="ab-long">
            Get <strong>10% OFF</strong> on all tour packages. Book before
            this week's offer ends!
          </span>
          <span className="ab-short">
            <strong>10% OFF</strong> all tours
          </span>
        </p>

        <div className="ab-countdown" aria-label="Sale ends in">
          <span className="ab-label">SALE ENDS IN</span>

          <span className="ab-time">
            <b>{pad(time.days)}</b>
            <i>d</i>
          </span>
          <span className="ab-time">
            <b>{pad(time.hours)}</b>
            <i>h</i>
          </span>
          <span className="ab-time">
            <b>{pad(time.minutes)}</b>
            <i>m</i>
          </span>
          <span className="ab-time">
            <b>{pad(time.seconds)}</b>
            <i>s</i>
          </span>
        </div>

        <a href="/Contact_Us" className="ab-btn">
          Book Now
        </a>
      </div>

      <button
        type="button"
        className="ab-close"
        onClick={() => setIsVisible(false)}
        aria-label="Close announcement"
      >
        &times;
      </button>
    </div>
  );
}