import React, { useState, useRef, useEffect } from "react";
import "./VeloConnectLite.css";

// Assets
import appImg from "../../assets/images/veloconnect-app.jpg";
import demoVideo from "../../assets/veloconnect_lite.mp4";

// 👉 NEW: logos/icons (rename paths to match yours)
import vclLogo from "../../assets/icons/VeloConnect_Lite_Logo-removebg-preview.png";
import btIcon from "../../assets/icons/Screenshot_2025-10-03_at_3.41.36_PM-removebg-preview.png";
import gsmIcon from "../../assets/icons/Screenshot_2025-10-03_at_3.41.42_PM-removebg-preview.png";
import canIcon from "../../assets/icons/Screenshot_2025-10-03_at_3.41.50_PM-removebg-preview.png"; // CAN
import usbIfIcon from "../../assets/icons/Screenshot_2025-10-03_at_3.41.57_PM-removebg-preview.png"; // USB Interface
import usbIcon from "../../assets/icons/Screenshot_2025-10-03_at_3.42.04_PM-removebg-preview.png"; // USB

const chips = [
  "ESP-32 Dual-Core",
  "Bluetooth / GSM / Wi-Fi",
  "CAN Bus",
  "USB Interface",
  "7–14.4V DC",
  "12× DI (9–80V)",
  "1× AI (0–5V)",
  "1× Relay DO",
];

const ioRows = [
  { name: "Digital Inputs", value: "12 × (9–80V tolerant), rugged" },
  { name: "Analog Inputs", value: "1 × (0–5V)" },
  { name: "Relay Output", value: "1 × NO/COM (board-level relay)" },
  { name: "Comms", value: "CAN Bus, USB, Bluetooth, GSM, Wi-Fi" },
  { name: "Supply", value: "7–14.4V DC" },
];

// Put these right above `const appFeatures = [...]`
const IconPair = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 12h10" />
    <path d="M10 9l-3 3 3 3" />
    <path d="M14 15l3-3-3-3" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);

const IconSensor = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="7" width="7" height="10" rx="1.5" />
    <path d="M6.5 10v4" />
    <path d="M14 12h7" />
    <path d="M17 9v6" />
  </svg>
);

const IconCommand = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 19l6-14 2.5 5H19l-6 9-2-5z" />
  </svg>
);

const IconCharts = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M7 14l3-3 3 2 4-5" />
  </svg>
);

const IconConfig = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 7h8l2 2h6v8a2 2 0 0 1-2 2H4z" />
    <circle cx="12" cy="13" r="2.5" />
    <path d="M12 9v1M12 16v1M9 13H8M16 13h1" />
  </svg>
);

const appFeatures = [
  { icon: <IconPair />,   text: "Pair over Bluetooth for setup & diagnostics" },
  { icon: <IconSensor />, text: "Read battery & sensor data over CAN" },
  { icon: <IconCommand />,text: "Command motor / actuator via CAN" },
  { icon: <IconCharts />, text: "Live charts & fault indicators" },
  { icon: <IconConfig />, text: "Config profiles export / import" },
];

export default function VeloConnectLite() {
  const [showVideo, setShowVideo] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);
  const closeBtnRef = useRef(null);

  const openVideo = () => setShowVideo(true);
  const closeVideo = () => setShowVideo(false);

  useEffect(() => {
    if (!showVideo) return;
    const onKey = (e) => e.key === "Escape" && closeVideo();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [showVideo]);

  return (
    <main className="vcl-page">
      {/* TOP BANNER - reduced height image */}
      <section className="vcl-hero-media" aria-label="VeloConnect companion app banner">
        <img src={appImg} alt="VeloConnect companion app" loading="lazy" decoding="async" />
      </section>

      {/* HERO */}
      <section className="vcl-hero">
        <div className="vcl-hero-inner">
          {/* 👉 NEW: product logo above title */}
          <img className="vcl-logo-badge" src={vclLogo} alt="VeloConnect Lite logo" />
          <h1>VeloConnect Lite </h1>
          <p className="vcl-sub">
            ESP-32 based logic controller with Bluetooth, GSM, Wi-Fi, and CAN Bus—built for rugged
            vehicle and automation use.
          </p>
          <button className="vcl-btn" onClick={openVideo} aria-haspopup="dialog">
            ▶ Watch Video
          </button>
        </div>
      </section>

      {/* OVERVIEW + KEY FEATURES (combined) */}
<section className="vcl-section vcl-overview-combined">
  <div className="vcl-overview-card">
    <h2 className="vcl-h2">Overview & Key Features</h2>
    <p className="vcl-paragraph">
      VeloConnect Lite is a compact logic controller for EVs and automation. It pairs rugged I/O with
      CAN connectivity so you can read battery & sensor data and command actuators or motors with low
      latency. Configure and troubleshoot via the companion app over Bluetooth.
    </p>

    {/* 👉 NEW: logos row */}
    <div className="vcl-feature-logos">
      <img src={btIcon} alt="Bluetooth" />
      <img src={gsmIcon} alt="GSM" />
      <img src={canIcon} alt="CAN Bus" />
      <img src={usbIfIcon} alt="USB Interface" />
    </div>

    <ul className="vcl-chiplist">
      {chips.map((c) => (
        <li key={c} className="vcl-chip">{c}</li>
      ))}
    </ul>
  </div>
</section>

      {/* TECHNICAL SPECS */}
      <section className="vcl-specs-section">
        <h2 className="vcl-h2">Technical Specifications</h2>
        <div className="vcl-specs-grid">
          <div className="vcl-specs-card">
            <h3>I/O & Interfaces</h3>
            <ul className="vcl-list">
              {ioRows.map((r) => (
                <li key={r.name}>
                  <span>{r.name}</span>
                  <span>{r.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="vcl-specs-card">
            <h3>Compute & Connectivity</h3>
            <ul className="vcl-bullets vcl-bullets-icons">
              <li><img className="vcl-li-ico" src={btIcon} alt="" /> Bluetooth for provisioning & diagnostics</li>
              <li><img className="vcl-li-ico" src={gsmIcon} alt="" /> Wi-Fi & GSM options for telemetry</li>
              <li><img className="vcl-li-ico" src={canIcon} alt="" /> CAN Bus for vehicle/industrial networks</li>
              <li><img className="vcl-li-ico" src={usbIfIcon} alt="" /> USB for local setup & firmware</li>
              <li>ESP-32 dual-core MCU</li>
            </ul>
          </div>

          <div className="vcl-specs-card">
            <h3>Power & Ratings</h3>
            <ul className="vcl-bullets">
              <li>Supply: 7–14.4V DC</li>
              <li>DI range: 9–80V tolerant</li>
              <li>Operating: −20°C to 70°C (typical) *</li>
              <li>Enclosure: compact, rugged *</li>
            </ul>
            <p className="vcl-note">* Adjust to your official ratings.</p>
          </div>
        </div>
      </section>

      {/* COMPANION APP (refreshed UI) */}
      <section className="vcl-section vcl-app-section">
        <h2 className="vcl-h2">Companion App</h2>
        <div className="vcl-app-grid">
          {appFeatures.map((f) => (
            <div className="vcl-app-card" key={f.text}>
              <div className="vcl-app-icon" aria-hidden="true">{f.icon}</div>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="vcl-section vcl-cta-strip">
        <h3>Interested in integrating VeloConnect Lite?</h3>
        <a className="vcl-btn" href="/contact">Contact Sales</a>
      </section>

      {/* VIDEO MODAL */}
      {showVideo && (
        <div className="vcl-video-modal" onClick={closeVideo}>
          <div
            className={`vcl-video-container ${isLandscape ? "landscape" : ""}`}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="VeloConnect Lite demo video"
          >
            <button
              className="vcl-close"
              onClick={closeVideo}
              ref={closeBtnRef}
              aria-label="Close video"
            >
              ✕
            </button>
            <div className={`vcl-phone-frame ${isLandscape ? "landscape" : ""}`}>
              <video
                controls
                autoPlay
                playsInline
                preload="metadata"
                onLoadedMetadata={(e) => {
                  const v = e.currentTarget;
                  setIsLandscape((v.videoWidth || 16) >= (v.videoHeight || 9));
                }}
              >
                <source src={demoVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}