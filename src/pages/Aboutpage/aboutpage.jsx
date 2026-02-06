import { motion } from "framer-motion";
import { FaMicrochip, FaCode, FaCogs, FaCloud, FaCar } from "react-icons/fa";
import "./aboutpage.css";

const About = () => {
  const coreStrengths = [
    {
      icon: FaMicrochip,
      title: "Embedded Firmware",
      description:
        "We develop robust firmware that brings intelligence to the edge, enabling real-time processing and decision-making directly on hardware. Our solutions are optimized for reliability and low-power operation, ensuring seamless performance.",
    },
    {
      icon: FaCode,
      title: "Adaptive Intelligence",
      description:
        "Our self-learning AI continuously analyzes your operations, automatically adjusting to improve efficiency and accuracy. Unlike static systems, our models evolve with your business needs, delivering smarter decisions over time.",
    },
    {
      icon: FaCogs,
      title: "Computational Design",
      description:
        "Our AI-driven design tools automate and optimize product development, generating high-performance solutions faster than traditional methods. By combining simulation with machine learning, we reduce prototyping cycles while improving functional outcomes.",
    },
    {
      icon: FaCloud,
      title: "Seamless Connectivity",
      description:
        "We eliminate integration headaches with plug-and-play compatibility across all major platforms and devices. Our solutions ensure real-time data flows effortlessly between your existing tools, creating a truly unified system.",
    },
    {
      icon: FaCar,
      title: "Smart Monitoring",
      description:
        "Get 24/7 visibility with AI-powered alerts that spot anomalies before they become problems. Our predictive monitoring reduces downtime by flagging issues and suggesting optimizations in real-time.",
    },
  ];

  return (
    <>
      {/* Animated Background Elements */}
      <div className="about-bg-orb about-orb-1"></div>
      <div className="about-bg-orb about-orb-2"></div>
      <div className="about-bg-grid"></div>

      {/* WHO WE ARE Section */}
      <section className="about-hero-section">
        <div className="about-hero-container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about-section-label">
              <span>About Us</span>
            </div>

            <h1 className="about-hero-title">
              Who <span className="about-highlight-word">We Are</span>
            </h1>

            <div className="about-hero-text">
              <p>
                At Intute.ai, we harness the power of cutting-edge technologies
                to drive intelligent, scalable, and sustainable innovation across
                industries. By integrating Model-Based Design (MBD) methodologies
                with high-efficiency AI models, we deliver optimized, data-driven
                solutions that enhance performance, reduce costs, and accelerate
                digital transformation.
              </p>

              <p>
                Our expertise lies in developing low-cost, scalable
                implementations that enhance road safety, car safety, and driver
                safety through intelligent technology. By integrating AI-driven
                insights with smart infrastructure, we empower businesses to
                streamline operations, improve decision-making, and optimize
                traffic management for safer mobility.
              </p>

              <p>
                Our solutions proactively reduce accidents, enhance vehicle
                security, and provide real-time driver assistance, ensuring a
                safer environment for all road users. With a strong focus on
                sustainability and efficiency, we design future-ready innovations
                that adapt seamlessly to evolving safety challenges while
                unlocking new opportunities for growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Technology Strengths */}
      <section className="about-strengths-section">
        <div className="about-strengths-container">
          <motion.div
            className="about-strengths-header"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="about-section-label">
              <span>Our Expertise</span>
            </div>

            <h2 className="about-strengths-title">
              Core Technology{" "}
              <span className="about-highlight-word">Strengths</span>
            </h2>

            <p className="about-strengths-subtitle">
              Leveraging advanced AI and engineering excellence to deliver
              transformative solutions
            </p>
          </motion.div>

          <div className="about-strengths-grid">
            {coreStrengths.map((item, index) => (
              <motion.div
                key={index}
                className="about-strength-card"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -8 }}
              >
                <div className="about-card-icon-wrapper">
                  <div className="about-card-icon-bg"></div>
                  <item.icon className="about-card-icon" />
                </div>

                <h3 className="about-card-title">{item.title}</h3>
                <p className="about-card-description">{item.description}</p>

                <div className="about-card-accent"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Autonomous Driving Highlight Section */}
      <section className="about-autonomous-section">
        <motion.div
          className="about-autonomous-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="about-autonomous-overlay"></div>

          <div className="about-autonomous-content">
            <motion.div
              className="about-autonomous-tag"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Featured Insight
            </motion.div>

            <motion.h2
              className="about-autonomous-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Can India Have Autonomous Driving?
            </motion.h2>

            <motion.p
              className="about-autonomous-description"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Exploring the challenges and opportunities of autonomous
              transportation in India's unique infrastructure landscape
            </motion.p>

            <motion.a
              href="/blog"
              className="about-autonomous-button"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Read More</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15l5-5-5-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default About;