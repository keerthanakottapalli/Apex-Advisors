// src/HeroSection.jsx

import React from 'react';
import './HeroSection.css'; // Import the CSS file

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container hero-content">
        
        {/* Left Column: Text and CTAs (NOW CENTERED) */}
        <div className="hero-text-content">
          <h1 className="hero-headline">
            Transforming Businesses with Data-Driven Strategy.
          </h1>
          <p className="hero-subheadline">
            Unlocking peak performance for modern enterprises through expert advisory and technological implementation.
          </p>

          <div className="hero-ctas">
            <a href="#consultation" className="cta-button primary-cta">
              Schedule a Consultation
            </a>
            <a href="#learn-more" className="cta-button secondary-cta-inverted"> {/* New inverted style for buttons */}
              View Our Case Studies
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;