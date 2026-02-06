import React, { useState, Suspense, lazy } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./contactPage.css";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

// Lazy load the map component
const MapComponent = lazy(() => import("../../components/MapComponent"));

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("Sending...");

    try {
      await axios.post("/api/contact", formData, {
        headers: { "Content-Type": "application/json" },
      });
      setStatusMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatusMessage(""), 5000);
    } catch (error) {
      setStatusMessage("Error sending message. Try again later.");
      console.error("Form submission error:", error);
      setTimeout(() => setStatusMessage(""), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page-container">
      {/* Animated Background */}
      <div className="contact-bg-orb orb-1"></div>
      <div className="contact-bg-orb orb-2"></div>
      <div className="contact-bg-grid"></div>

      {/* Hero Section */}
      <section className="contact-hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-label"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span>Let's Connect</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Get in <span className="highlight-text">Touch</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Reach out to us for any inquiries or support. We're here to help bring
            your AI-driven mobility solutions to life.
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content Section */}
      <section className="contact-content-section">
        <div className="content-wrapper">
          {/* Contact Form */}
          <motion.div
            className="form-section"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="form-header">
              <h2 className="form-title">Send us a Message</h2>
              <p className="form-subtitle">
                Fill out the form below and we'll get back to you shortly
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us how we can help you..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                />
              </div>

              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <FaPaperPlane className="button-icon" />
              </button>

              {statusMessage && (
                <motion.div
                  className={`status-message ${statusMessage.includes("Error") ? "error" : "success"}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  {statusMessage}
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            className="info-section"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="info-header">
              <h2 className="info-title">Contact Information</h2>
              <p className="info-subtitle">
                Get in touch through any of these channels
              </p>
            </div>

            <div className="info-cards">
              <motion.div
                className="info-card"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="card-icon-wrapper email-icon">
                  <MdEmail className="card-icon" />
                </div>
                <div className="card-content">
                  <h3 className="card-title">Email Us</h3>
                  <a href="mailto:info@intute.in" className="card-link">
                    info@intute.in
                  </a>
                  <p className="card-description">
                    Send us an email anytime
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="info-card"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="card-icon-wrapper location-icon">
                  <HiLocationMarker className="card-icon" />
                </div>
                <div className="card-content">
                  <h3 className="card-title">Visit Us</h3>
                  <p className="card-address">
                    A5, Sector-68, NOIDA - 201303<br />
                    Uttar Pradesh, India
                  </p>
                  <p className="card-description">
                    Come visit our office
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <motion.section
        className="map-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="map-header">
          <h2 className="map-title">Find Us on the Map</h2>
          <p className="map-subtitle">Located in the heart of NOIDA's tech hub</p>
        </div>

        <div className="map-wrapper">
          <Suspense fallback={
            <div className="map-loading">
              <div className="loading-spinner"></div>
              <p>Loading map...</p>
            </div>
          }>
            <MapComponent />
          </Suspense>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactUs;