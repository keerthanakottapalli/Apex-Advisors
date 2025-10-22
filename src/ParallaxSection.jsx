// src/ParallaxSection.jsx

import React from 'react';
import './ParallaxSection.css'; 

const ParallaxSection = () => {
    return (
        <section className="parallax-section">
            {/* This is the background layer */}
            <div className="parallax-container">
                <div className="parallax-overlay-content">
                    <h2>Driving Excellence in a Complex World</h2>
                    <p>Our global expertise delivers results you can trust, backed by proven methods.</p>
                </div>
            </div>
            
        </section>
    );
};

export default ParallaxSection;