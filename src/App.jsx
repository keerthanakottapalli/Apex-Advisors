// src/App.jsx

import React from 'react';
import Header from './Header'; 
import HeroSection from './HeroSection'; // Import the new component
import ServicesSection from './ServicesSection';
import SkillsSection from './SkillsSection';
import TestimonialsSection from './TestimonialsSection';
import ParallaxSection from './ParallaxSection';
import Footer from './Footer';

// Import CSS files
import './index.css';       
import './Header.css';      
import './HeroSection.css'; // Import Hero styles
import './ServicesSection.css'; // Import Services styles
import './SkillsSection.css'; // Import Skills styles
import './TestimonialsSection.css'; // Import Testimonials styles
import './ParallaxSection.css'; // Import Parallax styles
import './Footer.css';

function App() {
  // NOTE: Remove the inline style padding from the previous step
  return (
    <>
      <Header />
      {/* Main Content Area */}
      <main style={{ marginTop: '80px' }}> {/* Adjust for sticky header height */}
        <HeroSection />
        <ServicesSection />
        <SkillsSection />
        <ParallaxSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}

export default App;