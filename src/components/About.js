import React from "react";
import "./About.css";
import profileImage from '../assets/images/images/file-removebg-preview.png';  // Adjust the path as needed

const About = () => {
  return (
    <div className="about-page">
      {/* Introduction Section */}
      <section className="intro-section">
        <div className="profile-image-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="intro-text">
          <h1>About Me</h1>
          <p>
            Hello! I'm [Your Name], a passionate web developer specializing in React.
            With a deep interest in creating user-friendly and visually appealing applications,
            I strive to turn ideas into reality through code.
          </p>
        </div>
      </section>

      {/* Additional Details */}
      <section className="about-details">
        <h2>My Journey</h2>
        <p>
          I started my development journey [X] years ago and have worked on a variety of projects
          ranging from simple websites to complex web applications.
        </p>

        <h2>Skills & Expertise</h2>
        <ul>
          <li>Frontend: React, JavaScript, HTML, CSS</li>
          <li>Backend: Node.js, Firebase</li>
          <li>Other: Git, Responsive Design, UI/UX</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
