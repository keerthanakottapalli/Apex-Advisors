// src/SkillsSection.jsx

import React from 'react';
import { useInView } from 'react-intersection-observer'; // Import the hook

const skillsData = [
  { name: 'Strategy', level: 95 },
  { name: 'Technology', level: 88 },
  { name: 'Data Analytics', level: 92 },
  { name: 'Client Success', level: 98 },
];

const SkillsSection = () => {
  // 1. Setup the Intersection Observer hook
  // 'ref' attaches to the element we want to observe (the whole section)
  // 'inView' is true when the element is visible in the viewport
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation should only happen once
    threshold: 0.2,    // Trigger when 20% of the component is visible
  });

  return (
    <section className="skills-section" ref={ref}> {/* Attach the ref here */}
      <div className="container">
        <div className="skills-content">

          {/* Left Column: Heading and Text */}
          <div className="skills-text">
            <h2 className="section-title">Why Choose Apex?</h2>
            <p className="section-subtitle">
              Our expertise is measured by our client's success. We invest in high-caliber talent across all domains.
            </p>
            <a href="#about" className="cta-button primary-cta learn-more">
                Learn More About Our Team
            </a>
          </div>

          {/* Right Column: Skills Bars */}
          <div className="skills-bars">
            {skillsData.map((skill) => (
              <div key={skill.name} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  {/* Only display the percentage if the component is in view */}
                  <span className="skill-percentage">
                    {inView ? `${skill.level}%` : '0%'}
                  </span>
                </div>
                <div className="skill-bar-container">
                  {/* The animation happens here: set the width based on 'inView' status */}
                  <div
                    className={`skill-bar-fill ${inView ? 'animate-fill' : ''}`}
                    style={{ width: inView ? `${skill.level}%` : '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;