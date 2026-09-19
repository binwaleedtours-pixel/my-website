import React from "react";
import { Link } from "react-router-dom";
import "./Termandconditions.css";

function Termandconditions() {
  return (
    <div className="terms-page-wrapper">
      {/* ---------- Top Page Hero Banner (Same as Contact & Privacy Page) ---------- */}
      <div className="page-banner">
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h1>Terms & Conditions</h1>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">Terms & Conditions</span>
          </div>
        </div>
      </div>

      {/* ---------- Main Content Section ---------- */}
      <section className="terms-section">
        <div className="terms-container">
          <div className="terms-card">
            
            <p className="terms-intro">
              Last Updated: <strong>September 2026</strong><br />
              Welcome to <strong>Bin Waleed Tours</strong>. These Terms & Conditions govern your use of our website and participation in our tours and travel services. By making a booking with us or participating in one of our tours, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.
            </p>

            <div className="terms-content-blocks">
              <section className="terms-block">
                <h2>1. Booking & Confirmation</h2>
                <ul>
                  <li>A booking is considered confirmed only after the required payment or advance has been received and confirmation has been provided by Bin Waleed Tours.</li>
                  <li>Tour prices, inclusions, departure dates, and itineraries may vary from package to package.</li>
                  <li>Customers are responsible for providing accurate information at the time of booking.</li>
                  <li>Any special requirements should be communicated to our team before the departure date.</li>
                </ul>
              </section>

              <section className="terms-block">
                <h2>2. Departure & Reporting Time</h2>
                <ul>
                  <li>Every traveler must report at the designated departure point at least 30 minutes before the scheduled departure time.</li>
                  <li>Bin Waleed Tours will not be responsible for delays or missed departures caused by a customer's late arrival.</li>
                  <li>Travelers must follow the instructions of the tour manager, guide, and driver throughout the journey.</li>
                </ul>
              </section>

              <section className="terms-block">
                <h2>3. Identification & Personal Documents</h2>
                <ul>
                  <li>Travelers must carry their original CNIC or other valid identification document during the tour.</li>
                  <li>Foreign travelers are responsible for carrying their valid passport, visa, permits, and other required travel documents.</li>
                  <li>Bin Waleed Tours may request identification where necessary for booking, accommodation, transportation, or regulatory purposes.</li>
                </ul>
              </section>

              <section className="terms-block">
                <h2>4. Luggage</h2>
                <ul>
                  <li>The standard luggage allowance for a tour is up to 10 KG per person, unless otherwise specified for a particular package.</li>
                  <li>Each traveler is responsible for their own luggage and personal belongings.</li>
                  <li>Customers should avoid carrying unnecessary valuables during the tour.</li>
                </ul>
              </section>

              <section className="terms-block">
                <h2>5. Customer Conduct</h2>
                <ul>
                  <li>All travelers are expected to behave respectfully and responsibly toward fellow travelers, tour staff, local communities, hotel staff, drivers, and guides.</li>
                  <li>Physical abuse, harassment, threatening behavior, verbal abuse, or inappropriate conduct will not be tolerated.</li>
                  <li>Bin Waleed Tours reserves the right to remove a participant from a tour in cases of serious misconduct, subject to applicable law and without liability for costs arising from such removal.</li>
                  <li>Weapons and other prohibited items are strictly not allowed on our tours.</li>
                </ul>
              </section>

              <section className="terms-block">
                <h2>6. Cancellation & Refund Policy</h2>
                <ul>
                  <li>Cancellation and refund terms may vary according to the specific tour package and booking conditions communicated at the time of reservation.</li>
                  <li>For cancellations made within 24 hours before the scheduled departure, the booking amount may be non-refundable.</li>
                  <li>Amounts already paid to third-party service providers such as hotels, transport providers, or activity operators may be subject to their own cancellation policies.</li>
                  <li>Customers are encouraged to confirm the applicable cancellation and refund terms before making payment.</li>
                </ul>
              </section>

              <section className="terms-block">
                <h2>7. Changes to Itinerary</h2>
                <p>Tour itineraries may be affected by factors beyond the control of Bin Waleed Tours, including:</p>
                <ul>
                  <li>Weather conditions</li>
                  <li>Landslides and road closures</li>
                  <li>Natural disasters</li>
                  <li>Traffic or transportation issues</li>
                  <li>Government restrictions or local regulations</li>
                  <li>Security conditions</li>
                  <li>Political or administrative circumstances</li>
                  <li>Other unforeseen events</li>
                </ul>
                <p>In such circumstances, Bin Waleed Tours may modify the itinerary, route, accommodation, activities, or schedule where reasonably necessary to protect the interests and safety of the group. Every reasonable effort will be made to provide a suitable alternative.</p>
              </section>

              <section className="terms-block">
                <h2>8. Weather & Adventure Activities</h2>
                <p>
                  Northern Pakistan tours may involve mountainous roads, hiking, trekking, river activities, jeep travel, boating, rafting, and other outdoor activities. Travelers acknowledge that such activities and environments may involve inherent risks. Bin Waleed Tours and its team will take reasonable measures to promote the safety of participants; however, travelers are expected to follow safety instructions and act responsibly throughout the tour.
                </p>
              </section>

              <section className="terms-block">
                <h2>9. Personal Injury & Medical Conditions</h2>
                <ul>
                  <li>Travelers are responsible for informing Bin Waleed Tours about any relevant medical condition, allergy, disability, or special requirement that may affect their participation.</li>
                  <li>Travelers should carry necessary medication and medical supplies.</li>
                  <li>In case of an emergency, reasonable assistance will be provided and appropriate medical or emergency services may be contacted.</li>
                  <li>Any limitations of liability will apply only to the extent permitted under applicable law.</li>
                </ul>
              </section>

              <section className="terms-block">
                <h2>10. Personal Belongings</h2>
                <p>
                  Bin Waleed Tours recommends that travelers keep their valuables, cash, electronic devices, documents, and other personal belongings secure. We are not responsible for loss, theft, or damage to personal belongings except where liability arises under applicable law or from the proven negligence or misconduct of the company or its representatives.
                </p>
              </section>

              <section className="terms-block">
                <h2>11. Accommodation & Transportation</h2>
                <ul>
                  <li>Accommodation and transportation are provided according to the package selected and confirmed at the time of booking.</li>
                  <li>Hotel rooms, vehicles, seating arrangements, and other facilities may be subject to availability.</li>
                  <li>In exceptional circumstances, equivalent alternatives may be arranged when the originally planned facility becomes unavailable.</li>
                </ul>
              </section>

              <section className="terms-block">
                <h2>12. Company Cancellation</h2>
                <p>
                  Bin Waleed Tours reserves the right to postpone, modify, or cancel a tour when circumstances make the planned journey impractical or unsafe. Where a tour is cancelled by Bin Waleed Tours, the applicable refund or alternative arrangement will be communicated to the customer according to the booking terms and circumstances involved.
                </p>
              </section>

              <section className="terms-block">
                <h2>13. Photography & Media</h2>
                <p>
                  During tours, photographs and videos may be taken for promotional, social media, or marketing purposes. If you do not wish to appear in promotional material, please inform our team before or during the tour.
                </p>
              </section>

              <section className="terms-block">
                <h2>14. Website Content</h2>
                <p>
                  We make reasonable efforts to keep our website information, tour details, prices, photographs, and itineraries accurate and updated. However, minor changes may occur due to availability, seasonal conditions, operational requirements, or circumstances beyond our control.
                </p>
              </section>

              <section className="terms-block">
                <h2>15. Acceptance of Terms</h2>
                <p>
                  By booking a tour or participating in a Bin Waleed Tours trip, you confirm that you have read and understood these Terms & Conditions and agree to comply with them. These Terms & Conditions may be updated periodically. The latest version published on this website will apply to future bookings.
                </p>
              </section>

              <section className="terms-block">
                <h2>16. Governing Law</h2>
                <p>
                  These Terms & Conditions shall be interpreted in accordance with the applicable laws of the Islamic Republic of Pakistan. Any dispute shall be addressed through good-faith communication between the parties before pursuing any further legal remedy available under applicable law.
                </p>
              </section>

              <section className="terms-block">
                <h2>Contact Us</h2>
                <div className="terms-contact-box">
                  <p>📍 <strong>Bin Waleed Tours</strong></p>
                  <p>Lahore, Pakistan</p>
                  <p>📞 <strong>Phone:</strong> +92 302 8908761 | +92 315 7764146</p>
                  <p>📧 <strong>Email:</strong> binwaleedtours@gmail.com</p>
                  <p>🌐 <strong>Website:</strong> www.binwaleedtours.com</p>
                </div>
              </section>
            </div>

            <div className="terms-footer-link">
              <Link to="/" className="btn-back-home">
                ← Back to Home
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Termandconditions;