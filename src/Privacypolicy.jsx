import React from "react";
import { Link } from "react-router-dom";
import "./Privacypolicy.css";

function Privacypolicy() {
  return (
    <div className="privacy-page-wrapper">
      {/* ---------- Top Page Hero Banner (Same as Contact Page) ---------- */}
      <div className="page-banner">
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h1>Privacy Policy</h1>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* ---------- Main Content Section ---------- */}
      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-card">
            
            <p className="privacy-intro">
              At <strong>Bin Waleed Tours</strong>, we respect your privacy and are committed to protecting the personal information you provide when using our website, contacting us, or booking our travel services. This Privacy Policy explains what information we may collect, how we use it, and how we protect it.
            </p>

            <div className="privacy-content-blocks">
              <section className="privacy-block">
                <h2>1. Information We Collect</h2>
                <p>Depending on how you interact with us, we may collect information such as:</p>
                <ul>
                  <li>Full name</li>
                  <li>Phone/mobile number</li>
                  <li>Email address</li>
                  <li>CNIC or identification details where required for a booking or travel service</li>
                  <li>Number of travelers</li>
                  <li>Travel dates and tour preferences</li>
                  <li>Accommodation or transportation requirements</li>
                  <li>Payment or booking information</li>
                  <li>Information you provide through contact forms, WhatsApp, email, or other communication channels</li>
                </ul>
                <p>We only seek information that is reasonably necessary for providing or managing our services.</p>
              </section>

              <section className="privacy-block">
                <h2>2. Information Collected Through Our Website</h2>
                <p>When you visit our website, certain technical information may automatically be collected, such as:</p>
                <ul>
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Device type</li>
                  <li>Pages visited</li>
                  <li>Approximate usage information</li>
                  <li>Date and time of website visits</li>
                </ul>
                <p>This information may be used to understand website usage, improve performance, and maintain website security.</p>
              </section>

              <section className="privacy-block">
                <h2>3. How We Use Your Information</h2>
                <p>We may use your information to:</p>
                <ul>
                  <li>Respond to your inquiries</li>
                  <li>Process and manage tour bookings</li>
                  <li>Confirm travel arrangements</li>
                  <li>Communicate tour details and updates</li>
                  <li>Arrange accommodation, transportation, guides, and other travel services</li>
                  <li>Process payments where applicable</li>
                  <li>Provide customer support</li>
                  <li>Improve our website and services</li>
                  <li>Maintain business and booking records</li>
                  <li>Send promotional information where permitted and appropriate</li>
                </ul>
              </section>

              <section className="privacy-block">
                <h2>4. Sharing of Information</h2>
                <p>We do not sell or rent your personal information for third-party marketing purposes.</p>
                <p>Where necessary to provide your requested travel services, we may share relevant information with trusted service providers, such as:</p>
                <ul>
                  <li>Hotels and accommodation providers</li>
                  <li>Transportation providers</li>
                  <li>Tour guides</li>
                  <li>Activity or excursion providers</li>
                  <li>Payment service providers</li>
                  <li>Technology or website service providers</li>
                </ul>
                <p>We only share information that is reasonably necessary for the relevant service. We may also disclose information where required by applicable law, regulation, legal process, or a legitimate government request.</p>
              </section>

              <section className="privacy-block">
                <h2>5. Payment Information</h2>
                <p>
                  Where online payments are available, payment transactions may be processed through third-party payment providers. Bin Waleed Tours does not intend to store complete payment card details on its own systems unless specifically required and lawfully permitted. Customers should review the privacy and security policies of the relevant payment provider before completing a transaction.
                </p>
              </section>

              <section className="privacy-block">
                <h2>6. Cookies</h2>
                <p>Our website may use cookies and similar technologies to:</p>
                <ul>
                  <li>Keep the website functioning properly</li>
                  <li>Understand how visitors use our website</li>
                  <li>Improve website performance</li>
                  <li>Remember certain preferences</li>
                  <li>Support analytics and marketing activities where enabled</li>
                </ul>
                <p>You may be able to control or disable cookies through your browser settings. Some website features may not function properly if certain cookies are disabled.</p>
              </section>

              <section className="privacy-block">
                <h2>7. Marketing Communications</h2>
                <p>If you provide your contact information or otherwise consent to receive promotional communications, we may contact you about:</p>
                <ul>
                  <li>New tour packages</li>
                  <li>Special offers</li>
                  <li>Seasonal trips</li>
                  <li>Travel updates</li>
                  <li>Company announcements</li>
                </ul>
                <p>You may request to stop receiving promotional communications at any time by contacting us.</p>
              </section>

              <section className="privacy-block">
                <h2>8. Data Security</h2>
                <p>
                  We take reasonable administrative and technical measures to protect personal information against unauthorized access, misuse, alteration, disclosure, or loss. However, no method of transmitting or storing information online can be guaranteed to be completely secure.
                </p>
              </section>

              <section className="privacy-block">
                <h2>9. Data Retention</h2>
                <p>
                  We retain personal information only for as long as reasonably necessary for the purpose for which it was collected, including booking records, customer support, accounting, legal, and business requirements. When information is no longer required, we may securely delete or anonymize it where reasonably practicable.
                </p>
              </section>

              <section className="privacy-block">
                <h2>10. Third-Party Websites</h2>
                <p>
                  Our website may contain links or integrations to third-party websites, social media platforms, payment services, or other external services. Bin Waleed Tours is not responsible for the privacy practices or content of third-party websites. We recommend reviewing the privacy policies of those third parties before providing them with personal information.
                </p>
              </section>

              <section className="privacy-block">
                <h2>11. Children's Privacy</h2>
                <p>
                  Our website and services are not specifically directed toward children. We do not knowingly collect unnecessary personal information from children. Where a booking involves a minor, the relevant information should be provided by or with the involvement of a parent or legal guardian.
                </p>
              </section>

              <section className="privacy-block">
                <h2>12. Your Privacy Choices</h2>
                <p>Depending on applicable law and the circumstances, you may contact us to:</p>
                <ul>
                  <li>Ask what personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion where appropriate</li>
                  <li>Withdraw consent for certain communications</li>
                  <li>Ask questions about how your information is being used</li>
                </ul>
                <p>Some information may need to be retained where required for legitimate business, legal, accounting, or regulatory purposes.</p>
              </section>

              <section className="privacy-block">
                <h2>13. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our services, website, technology, or applicable requirements. The updated version will be published on this page with a revised “Last Updated” date.
                </p>
              </section>

              <section className="privacy-block">
                <h2>14. Contact Us</h2>
                <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:</p>
                <div className="privacy-contact-box">
                  <p>📍 <strong>Bin Waleed Tours</strong></p>
                  <p>Lahore, Pakistan</p>
                  <p>📞 <strong>Phone:</strong> +92 302 8908761 | +92 315 7764146</p>
                  <p>📧 <strong>Email:</strong> binwaleedtours@gmail.com</p>
                  <p>🌐 <strong>Website:</strong> www.binwaleedtours.com</p>
                </div>
              </section>
            </div>

            <div className="privacy-footer-link">
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

export default Privacypolicy;