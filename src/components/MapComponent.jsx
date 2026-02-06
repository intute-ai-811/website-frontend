import React from "react";
import "./MapComponent.css";

const MapComponent = () => (
  <div className="map-container">
    <iframe
      title="Intute Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.9251913610283!2d77.38786640922561!3d28.60202096693544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef9adb7ff33d%3A0x5e40a030fdeee53e!2sGrovy%20Optiva!5e0!3m2!1sen!2sin!4v1743140600230!5m2!1sen!2sin"
      width="100%"
      height="450"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="map-iframe"
    />
  </div>
);

export default MapComponent;