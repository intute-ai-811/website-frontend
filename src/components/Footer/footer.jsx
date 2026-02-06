import React from "react";
import "./footer.css";
import { 
  FaLinkedin, 
  FaInstagram, 
  FaYoutube, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaAward 
} from "react-icons/fa";
import logo from "../../assets/startupIndia.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Grid Overlay */}
      <div className="footer-grid-overlay"></div>

      {/* Main Content */}
      <div className="footer-content-wrapper">
        {/* LEFT: Logo & Tagline */}
        <div className="footer-left">
          <div className="footer-logo-wrapper">
            <img src={logo} alt="Startup India Recognition" className="footer-logo" />
          </div>
          
          <p className="footer-tagline">
            Pioneering <span className="highlight">AI-driven innovation</span> to 
            transform industries with intelligent, scalable, and sustainable solutions.
          </p>

          <div className="footer-recognition">
            <FaAward size={20} />
            <span>Recognized by Startup India</span>
          </div>
        </div>

        {/* CENTER: Quick Links */}
        <div className="footer-center">
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <div className="footer-links">
              <a href="/" className="footer-link">Home</a>
              <a href="/about" className="footer-link">About Us</a>
              <a href="/vision" className="footer-link">Our Vision</a>
              <a href="/get-demo" className="footer-link">Products</a>
              <a href="/team" className="footer-link">Our Team</a>
              <a href="/contact" className="footer-link">Contact</a>
            </div>
          </div>

          <div className="footer-divider" />

          <div className="footer-section">
            <h3 className="footer-heading">Connect</h3>
            <div className="footer-socials">
              <a 
                href="https://linkedin.com/company/intute-ai-technologies-pvt-ltd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-wrapper"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} className="social-icon" />
              </a>
              <a 
                href="https://www.instagram.com/intute_ai?igsh=eWozcmJqM2FiZXU4&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-wrapper"
                aria-label="Instagram"
              >
                <FaInstagram size={22} className="social-icon" />
              </a>
              <a 
                href="https://www.youtube.com/@Intute-Ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-wrapper"
                aria-label="YouTube"
              >
                <FaYoutube size={22} className="social-icon" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: Contact Info */}
        <div className="footer-right">
          <h3 className="footer-heading">Get in Touch</h3>
          <div className="footer-contact-wrapper">
            <div className="footer-contact-item">
              <FaEnvelope size={22} className="footer-contact-icon" />
              <div className="footer-contact-text">
                <a href="mailto:info@intute.ai">info@intute.ai</a>
              </div>
            </div>

            <div className="footer-contact-item">
              <FaMapMarkerAlt size={22} className="footer-contact-icon" />
              <div className="footer-contact-text">
                A5, Sector-68, NOIDA - 201303<br />
                Uttar Pradesh, India
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM: Copyright */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Intute.ai Technologies Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;