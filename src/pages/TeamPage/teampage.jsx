// Teampage.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import "./teampage.css";

// Images
import mayankImage from "../../assets/images/Mayank.jpeg";
import prathamImage from "../../assets/images/Pratham.jpeg";
import rahulImage from "../../assets/images/Rahul.jpeg";
import rishikaImage from "../../assets/images/Rishika.jpg";
import saatwikImage from "../../assets/images/Saatwik.jpg";
import rhythmImage from "../../assets/images/Rhythm.jpeg";
import akshayImage from "../../assets/images/Akshay.jpeg";
import teamMeetingImage from "../../assets/images/team-meeting.jpg";

const teamMembers = [
  {
    name: "Akshay Aggarwal",
    role: "Founder",
    description:
      "17+ years entrepreneurial career in Automation systems, Electric vehicle traction control & system integration.",
    image: akshayImage,
    linkedin: "https://www.linkedin.com/in/akshay-aggarwal-4072637/",
  },
  {
    name: "Saatwik",
    role: "Software Developer",
    description: "DevOps Engineer & Cloud Manager",
    image: saatwikImage,
    linkedin: "https://www.linkedin.com/in/saatwik-choudhary/",
  },
  {
    name: "Mayank",
    role: "Embedded Engineer",
    description: "Embedded UI Developer",
    image: mayankImage,
    linkedin: "https://www.linkedin.com/in/mayank-sapra/",
  },
  {
    name: "Pratham",
    role: "Application Developer",
    description: "React-Native specialist and Real-time Systems Enthusiast",
    image: prathamImage,
    linkedin: "https://www.linkedin.com/in/pratham-b3371b295/",
  },
  {
    name: "Rishika",
    role: "Front-end Developer",
    description: "Front-end Developer, UI/UX Designer",
    image: rishikaImage,
    linkedin: "https://www.linkedin.com/in/rishika-958942223/",
  },
  {
    name: "Rahul",
    role: "Backend Developer",
    description: "Database Architect and API Specialist",
    image: rahulImage,
    linkedin: "https://www.linkedin.com/in/ra-hash1/",
  },
  {
    name: "Rhythm",
    role: "Data Scientist",
    description: "",
    image: rhythmImage,
    linkedin: "https://www.linkedin.com/in/rhythm-parashar-26910a24b/",
  },
];

// Enhanced Team Card Component with optimized animations
const TeamCard = ({ member, index }) => (
  <motion.div
    className={`team-card ${member.role === "Founder" ? "founder-card" : ""}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.4, 
      delay: Math.min(index * 0.05, 0.3), // Cap max delay at 0.3s
      ease: [0.22, 1, 0.36, 1]
    }}
    viewport={{ once: true, amount: 0.15, margin: "0px 0px -50px 0px" }}
    whileHover={{ 
      y: -8,
      transition: { duration: 0.3, ease: "easeOut" }
    }}
  >
    <div className="card-inner">
      <div className="image-wrapper">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="team-image-rect"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="team-image-placeholder" aria-hidden />
        )}
        <div className="image-overlay"></div>
      </div>

      <div className="card-content">
        <div className="role-badge">
          <span className="role-text">{member.role}</span>
        </div>
        
        <h4 className="team-name">{member.name}</h4>
        
        {member.description && (
          <p className="team-description">{member.description}</p>
        )}

        {member.linkedin && member.linkedin !== "#" && (
          <a
            href={member.linkedin}
            className="linkedin-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn profile of ${member.name}`}
          >
            <FaLinkedinIn />
            <span>Connect</span>
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

// Main Team Page Component
const Teampage = () => {
  const founder = teamMembers.find((member) => member.role === "Founder");
  const otherMembers = teamMembers.filter((member) => member.role !== "Founder");

  return (
    <div className="team-container">
      {/* Animated background elements */}
      <div className="bg-gradient-orb orb-1"></div>
      <div className="bg-gradient-orb orb-2"></div>
      <div className="bg-grid"></div>

      <motion.header
        className="team-header"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="header-content-wrapper">
          <motion.div 
            className="title-decoration"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.3 }}
          ></motion.div>
          
          <h1 className="team-title">
            <span className="title-line">MEET OUR</span>
            <span className="title-line title-highlight">TEAM</span>
          </h1>
          
          <p className="team-tagline">
            We're a team of researchers, engineers, and operational leaders, with
            experience spanning a variety of disciplines, all working together to
            build reliable and robust AI systems for manufacturing.
          </p>
        </div>

        {/* Founder Section */}
        {founder && (
          <motion.div 
            className="founder-section"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="founder-label">
              <span>Leadership</span>
            </div>
            <TeamCard member={founder} index={0} />
          </motion.div>
        )}
      </motion.header>

      <div className="section-divider">
        <motion.div 
          className="divider-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        ></motion.div>
        <span className="divider-text">Our Team</span>
        <motion.div 
          className="divider-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>

      {/* Team Grid */}
      <section className="team-grid" aria-label="Team members">
        {otherMembers.map((member, index) => (
          <TeamCard key={member.name} member={member} index={index} />
        ))}
      </section>

      {/* Team Meeting Section */}
      <motion.section 
        className="team-meeting-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="meeting-header">
          <h2 className="meeting-title">Behind the Scenes</h2>
          <p className="meeting-subtitle">Where innovation happens</p>
        </div>
        
        <div className="team-meeting-image-wrapper">
          <img
            src={teamMeetingImage}
            alt="Team strategy session"
            className="team-meeting-image"
            loading="lazy"
            decoding="async"
          />
          <div className="meeting-caption-overlay">
            <p className="gradient-caption">
              A quick glimpse of our collaborative team during a strategy session.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Teampage;