import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./demoPage.css";

// Assets
import img from "../../assets/images/driver-distraction.jpg";
import img1 from "../../assets/images/Dashboard.png";
import video1 from "../../assets/driver_detection_video.mp4";
import video2 from "../../assets/dashboard_video_2.mp4";
import img3 from "../../assets/images/veloconnect-lite.jpg";
import video3 from "../../assets/veloconnect_lite.mp4";

const features = [
  {
    title: "VeloConnect Lite",
    subtitle: "Intelligent Vehicle Control Unit",
    description:
      "ESP-32 based logic controller with Bluetooth, GSM, Wi-Fi and CAN Bus. 12× rugged digital inputs (9–80V), 1× analog input (0–5V), 1× relay output, USB interface, and 7–14.4V DC supply. Mobile app connectivity via Bluetooth; read battery/sensor data and command your motor over CAN—ideal for vehicle VCUs and micro PLC use.",
    image: img3,
    video: video3,
    noCrop: true,
    tag: "Hardware",
    features: [
      "Multi-protocol connectivity",
      "Rugged industrial design",
      "Real-time motor control",
    ],
  },
  {
    title: "Driver Distraction Detection",
    subtitle: "Real-Time Safety Monitoring",
    description:
      "An AI-powered system that monitors driver behavior in real-time to detect signs of distraction, such as phone use or drowsiness and provides instant alerts to enhance road safety.",
    image: img,
    video: video1,
    noCrop: false,
    tag: "AI Vision",
    features: [
      "Drowsiness detection",
      "Phone usage alerts",
      "Instant safety warnings",
    ],
  },
  {
    title: "Advanced EV Dashboard",
    subtitle: "Comprehensive Analytics Platform",
    description:
      "A real-time dashboard displaying key EV parameters such as motor RPM, battery level, voltage, temperature and more with detailed analytics and fault detection.",
    image: img1,
    video: video2,
    noCrop: true,
    tag: "Analytics",
    features: [
      "Real-time diagnostics",
      "Battery health monitoring",
      "Performance analytics",
    ],
  },
];

const FeatureCards = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [expanded, setExpanded] = useState(null);
  const [isLandscape, setIsLandscape] = useState(false);

  const closeModal = () => setSelectedVideo(null);

  return (
    <>
      {/* Animated Background Elements */}
      <div className="demo-bg-orb demo-orb-1"></div>
      <div className="demo-bg-orb demo-orb-2"></div>
      <div className="demo-bg-grid"></div>

      <section className="demo-feature-section">
        {/* Hero Section */}
        <motion.div 
          className="demo-feature-hero"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="demo-section-label">
            <span>Our Solutions</span>
          </div>
          
          <h2 className="demo-feature-heading">
            Intelligent AI-Powered{" "}
            <span className="demo-highlight-word">Solutions</span>
          </h2>
          
          <p className="demo-feature-subtext">
            Discover how our products transform processes with smart automation,
            custom workflows, and real-time monitoring.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="demo-feature-card-grid">
          {features.map((item, index) => (
            <motion.div 
              className="demo-feature-card" 
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8 }}
            >
              {/* Card Tag */}
              <div className="demo-card-tag">{item.tag}</div>

              {/* Image Container */}
              <div className="demo-feature-image-container">
                <img
                  src={item.image}
                  alt={item.title}
                  className={item.noCrop ? "no-crop" : ""}
                  onClick={() => setSelectedVideo(item.video)}
                />
                <div className="demo-image-overlay"></div>
                
                {/* Play Button Overlay */}
                <div 
                  className="demo-play-button"
                  onClick={() => setSelectedVideo(item.video)}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5v14l11-7L8 5z" fill="currentColor"/>
                  </svg>
                </div>
              </div>

              {/* Card Content */}
              <div className="demo-feature-card-content">
                <h3 className="demo-feature-card-title">{item.title}</h3>
                <p className="demo-feature-card-subtitle">{item.subtitle}</p>
                
                <p
                  className={`demo-card-description ${
                    expanded === index ? "expanded" : ""
                  }`}
                >
                  {item.description}
                </p>
                
                {/* Key Features */}
                <div className="demo-card-features">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="demo-feature-bullet">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13 4L6 11L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <span
                  className="demo-read-toggle"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpanded(expanded === index ? null : index);
                  }}
                >
                  {expanded === index ? "Show less" : "Show more"}
                </span>

                {/* CTA Link */}
                {item.title.startsWith("VeloConnect") ? (
                  <Link
                    className="demo-feature-card-link"
                    to="/products/veloconnect-lite"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>View Product</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                ) : (
                  <a
                    className="demo-feature-card-link"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedVideo(item.video);
                    }}
                  >
                    <span>View Demo</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>


      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div 
          className="demo-video-modal" 
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={`demo-video-container ${
              isLandscape ? "landscape-modal" : ""
            }`}
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <button className="demo-close-button" onClick={closeModal}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <div
              className={`demo-phone-frame ${
                isLandscape ? "landscape-video" : ""
              }`}
            >
              <video
                controls
                autoPlay
                onLoadedMetadata={(e) => {
                  const v = e.currentTarget;
                  setIsLandscape((v.videoWidth || 16) >= (v.videoHeight || 9));
                }}
              >
                <source src={selectedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default FeatureCards;