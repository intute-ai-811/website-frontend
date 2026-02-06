import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MdRadar, MdCameraAlt } from "react-icons/md";
import { TbWaveSine } from "react-icons/tb";
import { GiRadarSweep } from "react-icons/gi";
import { RiNavigationFill } from "react-icons/ri";
import "./blogpage.css";
import bannerImage from "../../assets/autonomous.jpeg";

const BlogPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bannerY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bannerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <div className="blog-page-container" ref={containerRef}>
      {/* Animated Background */}
      <div className="blog-bg-orb orb-1"></div>
      <div className="blog-bg-orb orb-2"></div>
      <div className="blog-bg-grid"></div>

      {/* Hero Banner with Parallax */}
      <motion.div
        className="blog-banner"
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
            className="banner-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span>Industry Insights</span>
          </motion.div>

          <motion.h1
            className="banner-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Can India Have <span className="highlight-text">Autonomous Driving?</span>
          </motion.h1>
        </div>
      </motion.div>

      {/* Article Content */}
      <article className="blog-article">
        <motion.div
          className="article-wrapper"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Introduction */}
          <div className="article-section intro-section">
            <p className="intro-text">
              Autonomous driving is no longer a distant dream. With companies around
              the world making significant strides, self-driving vehicles are
              becoming an inevitable part of the future. But while these
              technologies are being tested and deployed in countries with
              well-defined infrastructure and relatively predictable traffic, the
              question remains: Can autonomous driving work in India? With its
              complex traffic patterns, diverse road users, and often chaotic
              driving behavior, India poses a unique challenge—and perhaps a unique
              opportunity—for autonomous mobility.
            </p>
          </div>

          {/* Section 1 */}
          <div className="article-section">
            <h2 className="section-title">
              <span className="title-number">01</span>
              The Indian Driving Ecosystem: A Unique Challenge
            </h2>
            <p className="section-text">
              India's roads are a melting pot of vehicles—cars, bikes, trucks,
              rickshaws, pedestrians, and even animals—often sharing the same
              space with minimal lane discipline. Traffic laws are loosely
              enforced, and driving behavior tends to be highly improvised.
            </p>
            <p className="section-text">
              In urban areas, congestion and narrow roads dominate the scene. In
              rural areas, the problem shifts to poor road quality, lack of
              signage, and low lighting. These factors create a dynamic,
              unstructured environment that current autonomous driving systems
              struggle to handle effectively.
            </p>
          </div>

          {/* Section 2 */}
          <div className="article-section highlight-section">
            <h2 className="section-title">
              <span className="title-number">02</span>
              What It Takes to Drive Without a Driver
            </h2>
            <p className="section-text">
              For a vehicle to drive itself, it must perceive, process, and act
              with high precision—all without human intervention. This requires
              a tightly integrated stack of technologies that work together in
              real time.
            </p>
            <p className="section-text">
              At the hardware level, self-driving cars rely on a fusion of
              sensors:
            </p>
            
            <div className="tech-grid">
              <div className="tech-card">
                <div className="tech-icon-wrapper">
                  <GiRadarSweep className="tech-icon-svg" />
                </div>
                <h4 className="tech-name">LiDAR</h4>
                <p className="tech-desc">Accurate 3D mapping and object detection</p>
              </div>
              <div className="tech-card">
                <div className="tech-icon-wrapper">
                  <MdRadar className="tech-icon-svg" />
                </div>
                <h4 className="tech-name">Radar</h4>
                <p className="tech-desc">Object detection and movement tracking</p>
              </div>
              <div className="tech-card">
                <div className="tech-icon-wrapper">
                  <MdCameraAlt className="tech-icon-svg" />
                </div>
                <h4 className="tech-name">Cameras</h4>
                <p className="tech-desc">Classification and lane detection</p>
              </div>
              <div className="tech-card">
                <div className="tech-icon-wrapper">
                  <TbWaveSine className="tech-icon-svg" />
                </div>
                <h4 className="tech-name">Ultrasonic</h4>
                <p className="tech-desc">Close-range detection for parking</p>
              </div>
              <div className="tech-card">
                <div className="tech-icon-wrapper">
                  <RiNavigationFill className="tech-icon-svg" />
                </div>
                <h4 className="tech-name">IMU & GNSS</h4>
                <p className="tech-desc">Localization and motion tracking</p>
              </div>
            </div>

            <p className="section-text">
              These sensors feed data into the vehicle's perception system, which
              uses deep learning algorithms to identify and track pedestrians,
              vehicles, road signs, and more. A sensor fusion layer combines all
              inputs to create a comprehensive real-time model of the vehicle's
              surroundings.
            </p>
            <p className="section-text">
              Next comes the planning and decision-making module, where path
              planning algorithms, behavior prediction models, and trajectory
              generation come into play. The vehicle must predict the intent of
              nearby agents and calculate the safest and most efficient path
              forward.
            </p>
            <p className="section-text">
              This is supported by a high-definition (HD) map and a localization
              system that allows the car to know its exact position within a few
              centimeters—far more precise than standard GPS. All of this runs on
              powerful onboard compute platforms, often leveraging GPUs, AI
              accelerators, and edge computing capabilities.
            </p>
            <p className="section-text">
              To ensure seamless coordination, Vehicle-to-Everything (V2X)
              communication enables the car to interact with infrastructure,
              pedestrians, and other vehicles, enhancing safety and traffic flow.
            </p>
            <p className="section-text">
              Crucially, the system must perform under real-time constraints,
              handling sensor input, running AI models, and making decisions in
              milliseconds. Reliability, redundancy, and fail-safe mechanisms are
              critical, especially in safety-critical scenarios.
            </p>
          </div>

          {/* Section 3 */}
          <div className="article-section">
            <h2 className="section-title">
              <span className="title-number">03</span>
              India's Roadblocks to Autonomy
            </h2>
            <p className="section-text">
              India's unpredictable traffic, lack of lane discipline, and diverse
              road users pose a unique challenge for autonomous vehicles. Roads
              often lack clear markings, consistent signage, or proper lighting.
              Driving behavior adds to the complexity—rules are loosely followed,
              and decision-making is spontaneous. Combine that with extreme
              weather conditions and infrastructure gaps, and it's clear that
              autonomous tech can't simply be imported; it must be redesigned for
              India.
            </p>
          </div>

          {/* Section 4 */}
          <div className="article-section">
            <h2 className="section-title">
              <span className="title-number">04</span>
              Turning Challenges into Opportunities
            </h2>
            <p className="section-text">
              India may not be ready for fully autonomous vehicles today, but that
              doesn't mean it can't lead in its own way. Rather than aiming
              directly for full Level 5 autonomy, the near future is more likely
              to be shaped by semi-autonomous systems—features that assist, not
              replace, human drivers.
            </p>
            <p className="section-text">
              Technologies like driver drowsiness alerts, lane change assist, and
              blind spot information systems are already being developed and
              tested. These features can significantly enhance road safety,
              especially on highways, and act as stepping stones toward more
              advanced autonomy.
            </p>
            <p className="section-text">
              Fleet-based applications—such as autonomous delivery vehicles or
              shared mobility in controlled zones like campuses and airports—also
              offer promising early use cases.
            </p>
            <p className="section-text">
              The Indian government is also laying the groundwork. Regulatory
              frameworks like AIS 184, AIS 185, and AIS 186 have been introduced
              to guide the safe development of ADAS and autonomous tech, aiming to
              ensure safety, reliability, and legal clarity.
            </p>
            <p className="section-text">
              With the right mix of policy support, incremental adoption, and
              local innovation, India has the opportunity to define a version of
              autonomous mobility that works for its roads, its people, and its
              pace.
            </p>
          </div>

          {/* Conclusion */}
          <div className="article-section conclusion-section">
            <h2 className="section-title">
              <span className="title-number">05</span>
              A Different Road to Autonomy
            </h2>
            <div className="conclusion-content">
              <p className="section-text">
                Autonomous driving in India isn't a question of if, but how. The
                journey will not mirror that of the West, where structured roads and
                disciplined traffic make it easier to deploy self-driving cars.
                Instead, India will likely follow a different route—one built on
                gradual integration of assistive technologies, tailored innovation,
                and real-world adaptation.
              </p>
              <p className="section-text">
                With ongoing development in ADAS features, supportive government
                regulations, and expanding R&D, a meaningful level of vehicle
                autonomy on Indian roads could be achievable by 2035. It may begin
                with fleets, highways, and controlled zones—but it will steadily
                move closer to the everyday commute.
              </p>
              <p className="section-text conclusion-highlight">
                Full autonomy might still be a distant dream, but the path is
                already forming. The future of driving in India might not be
                driverless just yet, but it will certainly be smarter.
              </p>
            </div>
          </div>

          {/* Author Card */}
          <motion.div
            className="author-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="author-content">
              <div className="author-info">
                <p className="author-label">Written by</p>
                <h3 className="author-name">Akshay Aggarwal</h3>
                <p className="author-title">Founder, Intute.AI Technologies Pvt. Ltd.</p>
              </div>
              <div className="author-decoration"></div>
            </div>
          </motion.div>
        </motion.div>
      </article>
    </div>
  );
};

export default BlogPage;