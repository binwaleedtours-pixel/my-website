
import { useState, useEffect } from "react";
import "./DiscountPopup.css";

// Get the next Thursday at 11:59:59 PM
function getNextSaleEnd() {
  const now = new Date();
  const target = new Date(now);

  // Thursday = 4
  let daysUntilThursday = (4 - now.getDay() + 7) % 7;

  target.setDate(now.getDate() + daysUntilThursday);
  target.setHours(23, 59, 59, 999);

  // If today's Thursday sale has ended, use next Thursday
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

export default function DiscountPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    let repeatTimer;
    let hideTimer;

    // Show popup and hide after 3 seconds
    const showPopup = () => {
      setIsVisible(true);

      clearTimeout(hideTimer);

      hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 6000);
    };

    // First appearance after 10 seconds
    const firstTimer = setTimeout(() => {
      showPopup();

      // Repeat every 10 seconds
      repeatTimer = setInterval(showPopup, 10000);
    }, 2000);

    // Update countdown every second
    const countdownTimer = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(repeatTimer);
      clearTimeout(hideTimer);
      clearInterval(countdownTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="discount-popup">
      <button
        type="button"
        className="discount-popup-close"
        onClick={() => setIsVisible(false)}
        aria-label="Close discount popup"
      >
        &times;
      </button>

      <div className="discount-popup-tag">
        SPECIAL WEEKLY OFFER
      </div>

      <h3>
        Get <span>10% OFF</span>
      </h3>

      <p className="discount-popup-description">
        Save 10% on all tour packages. Book your next adventure
        before this week's offer ends!
      </p>

      <div className="discount-countdown-title">
        SALE ENDS IN
      </div>

      <div className="discount-countdown">
        <div className="discount-time-box">
          <strong>{String(time.days).padStart(2, "0")}</strong>
          <small>Days</small>
        </div>

        <div className="discount-time-box">
          <strong>{String(time.hours).padStart(2, "0")}</strong>
          <small>Hours</small>
        </div>

        <div className="discount-time-box">
          <strong>{String(time.minutes).padStart(2, "0")}</strong>
          <small>Minutes</small>
        </div>

        <div className="discount-time-box">
          <strong>{String(time.seconds).padStart(2, "0")}</strong>
          <small>Secs</small>
        </div>
      </div>


      <a
        href="/Contact_Us"
        className="discount-popup-btn"
      >
        Book Your Tour →
      </a>

      <span className="discount-popup-note">
        Your next adventure awaits!
      </span>
    </div>
  );
}
