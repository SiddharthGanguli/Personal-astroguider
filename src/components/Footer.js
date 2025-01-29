import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-about">
          <h4>About Me</h4>
          <p>
            I am a passionate astrologer, offering insights into your future, guiding you through life’s journey, and helping you discover your true path.
          </p>
        </div>
        <div className="footer-services">
          <h4>Services</h4>
          <ul>
            <li className="golden-text">Personal Readings</li>
            <li className="golden-text">Horoscope Analysis</li>
            <li className="golden-text">Tarot Card Readings</li>
            <li className="golden-text">Astrology Consultation</li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Connect with Me</h4>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="mailto:your.email@example.com">Email</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Shri Suman. All Rights Reserved.</p>
        <p>
          Made with ❤️ by <a href="https://github.com/siddharthaganguli" target="_blank" rel="noopener noreferrer">Siddhartha Ganguli</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
