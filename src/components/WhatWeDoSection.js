import React from "react";
import "./WhatWeDoSection.css";
import handImage from "../assets/images/images/hand-dark.png"; // Adjust the path

const WhatWeDoSection = () => {
  const images = [
    require("../assets/images/images/cancer-300x300.png"),
    require("../assets/images/images/scorpio-300x300.png"),
    require("../assets/images/images/virgo-300x300.png"),
    require("../assets/images/images/sagittarius-300x300.png"),
    require("../assets/images/images/aries-300x300.png"),
    require("../assets/images/images/aquarius-300x300.png"),
  ];

  // Duplicate images for seamless infinite scrolling
  const loopingImages = [...images, ...images, ...images, ...images];

  return (
    <div className="what-we-do-section">
      {/* Left Side - Image */}
      <div className="what-we-do-image">
        <img src={handImage} alt="Palm Illustration" />
      </div>

      {/* Right Side - Content */}
      <div className="what-we-do-content">
        <div className="content-text">
          <h3 className="what-we-do-title">What We Do</h3>
          <h2 className="what-we-do-heading">
            Tarot is a powerful tool for transformation
          </h2>
          <p className="what-we-do-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mi
            tellus, pulvinar vel tempus eget, finibus vitae ante. Fusce sit amet
            velit eleifend, iaculis velit quis, malesuada lacus. Vestibulum
            sodales magna a volutpat tempus.
          </p>
          <a href="#contact" className="what-we-do-button">
            Contact Now
          </a>
        </div>
      </div>
    {/* Scrolling Image Section */}
    <div className="scrolling-image-section">
        <div className="scrolling-images">
          {loopingImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Scrolling Item ${index + 1}`}
              className="scrolling-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoSection;
