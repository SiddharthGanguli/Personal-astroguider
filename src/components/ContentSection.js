import React, { useState, useEffect } from "react";
import "./ContentSection.css";
import zodiacImage from "../assets/images/images/astrology-circle-orance-dots-1024x1024.png";
import privacyIcon from "../assets/images/images/icon-1@2x.png";
import guaranteeIcon from "../assets/images/images/icon-2@2x.png";
import competenceIcon from "../assets/images/images/icon-3@2x.png";
import AppointmentModal from "./AppointmentModal"; // Import the modal component

const ContentSection = () => {
  const text = "Here, you'll find something of interest. So, what are you waiting for?";
  const [displayedText, setDisplayedText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Typing speed

    return () => clearInterval(interval);
  }, []);

  // Feature data
  const features = [
    {
      icon: privacyIcon,
      title: "Privacy",
      description: "Your consultation details remain strictly confidential.",
    },
    {
      icon: guaranteeIcon,
      title: "Result Guarantee",
      description: "We ensure accurate and meaningful insights.",
    },
    {
      icon: competenceIcon,
      title: "Competence",
      description: "We handle only those queries that we can solve.",
    },
  ];

  return (
    <>
      {/* Main Content Section */}
      <section className="content-section">
        <div className="content-text">
          <h2 className="highlight-text">The Perfect Astroguider</h2>
          <h1 className="main-heading">Know More About Your Future</h1>
          <p className="description">{displayedText}</p>
          <button
            className="cta-button"
            onClick={() => setIsModalOpen(true)} // Open modal
          >
            Take an appointment
          </button>
        </div>
        <div className="content-image">
          <img src={zodiacImage} alt="Zodiac Chart" />
        </div>
      </section>

      {/* Feature Section */}
      <section className="features-section">
        <div className="features-container">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon-wrapper">
                <img src={feature.icon} alt={feature.title} className="feature-icon" />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Appointment Modal */}
      {isModalOpen && (
        <AppointmentModal onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default ContentSection;
