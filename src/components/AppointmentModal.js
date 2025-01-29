import React, { useState } from "react";
import "./AppointmentModal.css";
import { saveClinicData } from "./firestoreFunctions"; // Import Firestore function

const AppointmentModal = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Success message state

  // Clinic schedule data
  const clinicSchedule = [
    { location: "Downtown Clinic", time: "10:00 AM - 5:00 PM" },
    { location: "Uptown Clinic", time: "12:00 PM - 6:00 PM" },
    { location: "City Center Clinic", time: "9:00 AM - 3:00 PM" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const appointmentData = { name, email, date, time };

    try {
      await saveClinicData(appointmentData);

      // Show success message
      setSuccessMessage(`✅ Thank you, ${name}! Your appointment is confirmed for ${date} at ${time}.`);

      // Clear form fields
      setName("");
      setEmail("");
      setDate("");
      setTime("");

      // Automatically close success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
        onClose(); // Close modal after showing success message
      }, 3000);
      
    } catch (error) {
      console.error("Error saving appointment:", error.message);
      alert("❌ Failed to book appointment. Please try again.");
    }
  };

  return (
    <div className="appointment-modal">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <h2>Book an Appointment</h2>

        {/* Clinic Schedule Table */}
        <div className="clinic-schedule">
          <h3>Clinic Availability</h3>
          <table>
            <thead>
              <tr>
                <th>Location</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {clinicSchedule.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.location}</td>
                  <td>{entry.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="success-message">
            {successMessage}
            <button onClick={() => setSuccessMessage("")} className="close-success">&times;</button>
          </div>
        )}

        {/* Appointment Form */}
        {!successMessage && (
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <label>Date:</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

            <label>Time:</label>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />

            <button type="submit" className="submit-button">Book Now</button>
            <button type="button" className="close-button" onClick={onClose}>Cancel</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AppointmentModal;
