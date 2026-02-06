import { motion, useScroll, useTransform } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { useRef } from "react";
import "./homepage.css";
import nvidia from "../../assets/NvidiaImage.png";
import opencv from "../../assets/OpenCVImage.png";
import { FaCarCrash, FaBatteryFull, FaRoad, FaCogs } from "react-icons/fa";
import heroVideo from "../../assets/3d-video.mp4";

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.4]);

  const features = [
    {
      icon: FaCarCrash,
      title: "Driver Behavior Monitoring",
      description: "Detect fatigue, distraction, and unsafe driving patterns using vision-based AI.",
      color: "yellow"
    },
    {
      icon: FaBatteryFull,
      title: "Predictive Diagnostics",
      description: "Track battery, tyre, and vehicle health with real-time alerts and analytics.",
      color: "orange"
    },
    {
      icon: FaCogs,
      title: "Fleet Intelligence",
      description: "Monitor and analyze vehicle usage, location, and efficiency at scale.",
      color: "yellow"
    },
    {
      icon: FaRoad,
      title: "Road & Environment Analysis",
      description: "Evaluate road quality and environmental conditions to enhance safety.",
      color: "orange"
    }
  ];

  return (
    <div className="home-page-container" ref={containerRef}>
      {/* Animated Background */}
      <div className="home-bg-orb orb-1"></div>
      <div className="home-bg-orb orb-2"></div>
      <div className="home-bg-grid"></div>

      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        style={{ y: heroY }}
      >
        <motion.div 
          className="hero-overlay"
          style={{ opacity: heroOpacity }}
        ></motion.div>

        <div className="hero-content-wrapper">
          <motion.div
            className="hero-text-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="hero-accent-line"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            ></motion.div>

            <h1 className="hero-title">
              <Typewriter
                words={[
                  "Welcome to Intute.ai",
                  "Empowering AI Innovations",
                  "Shaping a Sustainable Future",
                ]}
                loop={true}
                cursor={true}
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={20}
                delaySpeed={7000}
              />
            </h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Empowering innovation through AI-driven solutions.
              Revolutionizing industries with advanced technologies for a
              sustainable future.
            </motion.p>

            <motion.div
              className="dpiit-badge"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className="badge-text">DPIIT REGISTERED STARTUP</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-video-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="video-glow-effect"></div>
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="hero-video"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Automate CTA Section */}
      <motion.section
        className="automate-cta-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="automate-content">
          <motion.div
            className="section-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span>AI-Powered Automation</span>
          </motion.div>

          <h2 className="automate-title">
            Your Fast Lane to{" "}
            <span className="highlight-word">AI-Powered</span> Automation
          </h2>

          <p className="automate-description">
            Skip the complexity — design and deploy smart automation workflows in minutes.
            Accelerate operations, reduce manual effort, and build intelligent systems with 
            no programming expertise needed.
          </p>

          <Link to="/get-demo" className="cta-button">
            <span>Explore Our Products</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </motion.section>

      {/* Partners Section */}
      <motion.section
        className="partners-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="partners-container">
          <div className="partners-glow"></div>
          
          <p className="partners-text">
            Backed by technology leaders like <strong>NVIDIA</strong> and <strong>OpenCV</strong>, 
            our solutions power intelligent automation across <strong>manufacturing</strong>, <strong>mobility</strong>, 
            and <strong>embedded AI</strong> systems — delivering scalable performance and real-time 
            insights where it matters most.
          </p>

          <div className="partners-logos">
            <motion.div 
              className="logo-wrapper"
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={nvidia} alt="NVIDIA" className="partner-logo" />
            </motion.div>
            <motion.div 
              className="logo-wrapper"
              whileHover={{ scale: 1.1, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={opencv} alt="OpenCV" className="partner-logo" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Grid Section */}
      <motion.section
        className="features-showcase"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="features-header">
          <motion.div
            className="section-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span>Capabilities</span>
          </motion.div>

          <h2 className="features-title">
            Smarter Possibilities with{" "}
            <span className="highlight-word">AI-Powered</span> Automation
          </h2>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={index}
                className={`feature-card feature-${feature.color}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -8 }}
              >
                <div className="feature-icon-wrapper">
                  <Icon className="feature-icon" />
                  <div className="icon-glow"></div>
                </div>
                
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.article>
            );
          })}
        </div>
      </motion.section>
    </div>
  );
};

export default Home;