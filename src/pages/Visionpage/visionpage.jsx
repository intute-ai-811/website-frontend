import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import bannerImage from "../../assets/images/Car.jpg";
import video1 from "../../assets/Intelligent Driver Assistance_1080p.mp4";
import video2 from "../../assets/Smart-streets.mp4";
import video3 from "../../assets/Connected-cloud.mp4";
import video4 from "../../assets/Energy-integration.mp4";

import "./visionpage.css";

const aimPoints = [
  {
    title: "Intelligent Driver Assistance",
    content:
      "Empower drivers with real-time alerts, AI-based recommendations, and predictive assistance. From obstacle detection to adaptive cruise systems, we turn reactive driving into proactive mobility.",
    video: video1,
  },
  {
    title: "Connected Infrastructure",
    content:
      "Integrate AI into infrastructure, creating intelligent intersections, responsive lighting, and smart signage. This builds a collaborative, safe ecosystem for both urban and rural mobility networks.",
    video: video3,
  },
  {
    title: "Sustainable Energy Integration",
    content:
      "Utilize AI to optimize energy consumption across electric mobility platforms. From predictive charging to green routing, ensure every trip is both efficient and eco-friendly.",
    video: video4,
  },
  {
    title: "Smarter Streets for All",
    content:
      "Make streets safer for everyone—drivers, pedestrians, and cyclists—through connected monitoring, AI-driven analytics, and responsive alert systems that reduce accidents and improve traffic flow.",
    video: video2,
  },
];

const VisionPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bannerY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bannerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <div className="page-container" ref={containerRef}>
      {/* Animated Background Elements */}
      <div className="vision-bg-orb orb-1"></div>
      <div className="vision-bg-orb orb-2"></div>
      <div className="vision-bg-grid"></div>

      {/* Hero Banner with Parallax */}
      <motion.div
        className="vision-banner"
        style={{
          backgroundImage: `url(${bannerImage})`,
          y: bannerY,
        }}
      >
        <motion.div 
          className="banner-overlay"
          style={{ opacity: bannerOpacity }}
        ></motion.div>
        
        <div className="banner-content">
          <motion.div
            className="tagline-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="tagline-accent-line"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            ></motion.div>
            
            <motion.h1
              className="tagline-main"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Because Every Journey
            </motion.h1>
            
            <motion.h2
              className="tagline-highlight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Deserves to be <span className="highlight-text">Safe</span>
            </motion.h2>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content Section */}
      <section className="vision-content-section">
        <motion.div
          className="vision-intro"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="section-label">
            <span>Our Vision</span>
          </div>
          
          <h3 className="vision-heading">
            Driving the Future of{" "}
            <span className="highlight-word">Safer</span> and{" "}
            <span className="highlight-word">Smarter</span> Mobility
          </h3>
          
          <p className="vision-subtext">
            At Intute.ai, we harness the power of AI and data-driven technologies
            to reimagine transportation. From intelligent infrastructure to
            sustainable mobility, we aim to make every journey safer, smarter, and
            more connected.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="vision-cards-grid">
          {aimPoints.map((item, index) => (
            <motion.article
              key={index}
              className={`vision-feature-card card-${index % 4}`}
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
              <div className="card-video-container">
                <video
                  src={item.video}
                  className="card-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="video-overlay"></div>
              </div>
              
              <div className="card-content-wrapper">
                <h4 className="card-title">{item.title}</h4>
                <p className="card-description">{item.content}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="vision-cta"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3 className="cta-title">Ready to Transform Mobility?</h3>
          <p className="cta-text">
            Join us in building a safer, smarter future for transportation.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default VisionPage;