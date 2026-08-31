import React from "react";
import "./Destinations.css";

function Destinations() {
  return (
    <section className="destinations" id="destinations">
      {/* Section Heading */}
      <div className="section-heading">
        <h2>Explore Our Popular Destinations</h2>
        <p>
          Unforgettable Journeys to the Heart of Pakistan, Where Every
          Destination Tells a Story
        </p>
      </div>

      {/* Grid Cards Container */}
      <div className="dest-grid">
        {/* Card 1 */}
        <div className="dest-card">
          <div className="img-wrap">
            <img
              src="https://loremflickr.com/600/700/forest,river,pakistan"
              alt="Kumrat Valley"
            />
          </div>
          <h4>Kumrat Valley</h4>
        </div>

        {/* Card 2 */}
        <div className="dest-card">
          <div className="img-wrap">
            <img
              src="https://loremflickr.com/600/700/valley,mountains,village"
              alt="Astore Valley"
            />
          </div>
          <h4>Astore Valley</h4>
        </div>

        {/* Card 3 */}
        <div className="dest-card grayscale">
          <div className="img-wrap">
            <img
              src="https://loremflickr.com/600/700/lake,mountains,snow"
              alt="Skardu Valley"
            />
          </div>
          <h4>Skardu Valley</h4>
        </div>

        {/* Card 4 */}
        <div className="dest-card">
          <div className="img-wrap">
            <img
              src="https://loremflickr.com/600/700/wooden,cabin,snowmountain"
              alt="Fairy Meadows"
            />
          </div>
          <h4>Fairy Meadows</h4>
        </div>
      </div>
    </section>
  );
}

export default Destinations;