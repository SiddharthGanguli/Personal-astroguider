import React from 'react';
import './ProfileSection.css';
import profileImage from '../assets/images/images/file-removebg-preview.png'; // Correctly import the image
const ProfileSection = () => {
  return (
    <div className="profile-section">
      <div className="profile-content">
        <p className="profile-title">Om Namh Sivai</p>
        <h1 className="profile-name">Shri Suman</h1>
        <p className="profile-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias veniam non
          deserunt modi repudiandae ratione sint itaque eveniet error consectetur aspernatur quae,
          at alias, nobis dolor totam qui provident laboriosam voluptate rem!
        </p>
      </div>
      <div className="profile-image-container">
        <img 
          src={profileImage} // Use the imported image
          alt="Shri Suman" 
          className="profile-image"
        />
      </div>
    </div>
  );
};

export default ProfileSection;
