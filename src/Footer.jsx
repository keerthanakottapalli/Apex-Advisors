// src/Footer.jsx

import React from 'react';

const Footer = () => {
  // Data for quick navigation links
  const strategyLinks = [
    { name: 'Digital Consulting', href: '#' },
    { name: 'Financial Modeling', href: '#' },
    { name: 'Market Analysis', href: '#' },
  ];

  // Data for company links
  const companyLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Careers', href: '#' },
    { name: 'News & Press', href: '#' },
  ];

  // Data for legal links
  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ];

  return (
    <footer>
      {/* Final CTA Banner */}
      <div className="final-cta-banner">
        <div className="container final-cta-content">
          <h3>Ready to Define Your Apex?</h3>
          <a href="#consultation" className="cta-button final-cta-button">
            Start Your Transformation Today
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container footer-grid">

          {/* Column 1: Logo and Contact */}
          <div className="footer-col footer-contact">
            <div className="logo footer-logo">
              <span className="logo-text">APEX</span>
              <span className="logo-icon">▲</span>
              <span className="logo-subtext">ADVISORS</span>
            </div>
            <p>123 Strategy Blvd, Suite 400<br />New York, NY 10001</p>
            <p>Email: contact@apexadvisors.co</p>
            <p>Phone: (555) 123-4567</p>
          </div>

          {/* Column 2: Strategy Links */}
          <div className="footer-col">
            <h4>Our Expertise</h4>
            <ul>
              {strategyLinks.map(link => <li key={link.name}><a href={link.href}>{link.name}</a></li>)}
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div className="footer-col">
            <h4>Apex Advisors</h4>
            <ul>
              {companyLinks.map(link => <li key={link.name}><a href={link.href}>{link.name}</a></li>)}
            </ul>
          </div>

          {/* Column 4: Legal & Social */}
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              {legalLinks.map(link => <li key={link.name}><a href={link.href}>{link.name}</a></li>)}
            </ul>
            <div className="social-icons">
                {/* Placeholder for social media icons */}
                <a href="#" aria-label="LinkedIn">in</a>
                <a href="#" aria-label="Twitter/X">t</a>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-copyright">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Apex Advisors. All rights reserved. | Design Replication for Portfolio Purposes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;