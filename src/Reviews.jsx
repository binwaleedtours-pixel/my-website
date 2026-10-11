import React, { useRef, useState } from "react";
import "./Reviews.css";

const STORAGE_KEY = "bw_reviews";

/* ---- Storage (baad mein yahan sirf Firebase/API laga sakte hain) ---- */
function loadReviews() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function saveReviews(list) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch {
    /* storage full ya blocked */
  }
}

function formatDateTime(iso) {
  return new Date(iso).toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

function Stars({ value, size = 16 }) {
  return (
    <span className="rv-stars" style={{ fontSize: size }} aria-label={`${value} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={n <= value ? "on" : ""}>★</span>
      ))}
    </span>
  );
}

function Reviews() {
  const [reviews, setReviews] = useState(loadReviews);
  const [form, setForm] = useState({ name: "", rating: 0, text: "" });
  const [hover, setHover] = useState(0);
  const [msg, setMsg] = useState({ type: "", text: "" });
  const trackRef = useRef(null);

  const slide = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".rv-card");
    const step = card ? card.offsetWidth + 20 : track.clientWidth;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const submit = (e) => {
    e.preventDefault();
    setMsg({ type: "", text: "" });

    if (!form.rating) {
      return setMsg({ type: "err", text: "Pehle star rating select karein." });
    }
    if (form.text.trim().length < 10) {
      return setMsg({ type: "err", text: "Review kam az kam 10 characters ka likhein." });
    }

    const newReview = {
      id: Date.now(),
      name: form.name.trim(),
      rating: form.rating,
      text: form.text.trim(),
      createdAt: new Date().toISOString(),
    };

    const updated = [newReview, ...reviews].slice(0, 50);
    setReviews(updated);
    saveReviews(updated);
    setForm({ name: "", rating: 0, text: "" });
    setMsg({ type: "ok", text: "Shukriya! Aap ka review add ho gaya." });

    if (trackRef.current) trackRef.current.scrollTo({ left: 0, behavior: "smooth" });
  };

  return (
    <section className="reviews-section" id="reviews">
      <div className="rv-wrap">
        <div className="rv-title">
          <span className="rv-eyebrow">TESTIMONIALS</span>
          <h2>What Our Travellers Say</h2>
        </div>

        {/* ---------- Carousel ---------- */}
        {reviews.length === 0 ? (
          <p className="rv-empty">No reviews yet. Be the first to share your experience!</p>
        ) : (
          <div className="rv-carousel">
            <button className="rv-arrow" onClick={() => slide(-1)} aria-label="Previous">
              ‹
            </button>

            <div className="rv-track" ref={trackRef}>
              {reviews.map((r) => (
                <article className="rv-card" key={r.id}>
                  <div className="rv-head">
                    <div className="rv-avatar">{r.name.charAt(0).toUpperCase()}</div>
                    <div className="rv-who">
                      <strong>{r.name}</strong>
                      <small>{formatDateTime(r.createdAt)}</small>
                    </div>
                  </div>
                  <Stars value={r.rating} />
                  <p className="rv-text">{r.text}</p>
                </article>
              ))}
            </div>

            <button className="rv-arrow" onClick={() => slide(1)} aria-label="Next">
              ›
            </button>
          </div>
        )}

        {/* ---------- Form ---------- */}
        <form className="rv-form" onSubmit={submit}>
          <h3>Share Your Experience</h3>

          <input
            type="text"
            placeholder="Your name"
            maxLength={60}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <div className="rv-pick" onMouseLeave={() => setHover(0)}>
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                type="button"
                key={n}
                className={n <= (hover || form.rating) ? "on" : ""}
                onMouseEnter={() => setHover(n)}
                onClick={() => setForm({ ...form, rating: n })}
                aria-label={`${n} star`}
              >
                ★
              </button>
            ))}
          </div>

          <textarea
            rows="4"
            placeholder="Write your review..."
            maxLength={600}
            value={form.text}
            onChange={(e) => setForm({ ...form, text: e.target.value })}
            required
          />

          <button type="submit" className="rv-submit">Submit Review</button>

          {msg.text && <p className={`rv-msg ${msg.type}`}>{msg.text}</p>}
        </form>
      </div>
    </section>
  );
}

export default Reviews;