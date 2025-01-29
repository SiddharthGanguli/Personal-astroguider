import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContentSection from "./components/ContentSection";
import About from "./components/About";
import WhatWeDoSection from "./components/WhatWeDoSection";
import ProfileSection from "./components/ProfileSection";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <ContentSection />
            <WhatWeDoSection />
            <ProfileSection />
            <Footer />
          </>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
