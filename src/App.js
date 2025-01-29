import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContentSection from "./components/ContentSection";
import About from "./components/About";
import WhatWeDoSection from "./components/WhatWeDoSection";
import ProfileSection from "./components/ProfileSection";
import Footer from "./components/Footer";
import "./App.css";

const Home = () => (
  <>
    <ContentSection />
    <WhatWeDoSection />
    <ProfileSection />
    <Footer />
  </>
);

const App = () => {
  return (
    <Router basename="/Personal-astroguider">  {/* 👈 Add basename for GitHub Pages */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
