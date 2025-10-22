// src/Header.jsx

import React, { useState, useEffect, useRef } from 'react';
import './Header.css'; // Import the CSS file

const Header = () => {
  // 1. Initialize state for the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const lastScrollY = useRef(0);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      // Current scroll position
      const currentScrollY = window.scrollY;

      // 1. Check if we are at the top of the page (show header)
      if (currentScrollY <= 100) {
        setIsVisible(true);
      } 
      // 2. Check if scrolling UP (show header)
      else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      } 
      // 3. Check if scrolling DOWN (hide header)
      else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      }

      // Update the previous scroll position
      lastScrollY.current = currentScrollY;
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Define the navigation links
  const navLinks = [
    { name: 'Strategy', href: '#strategy' },
    { name: 'Data', href: '#data' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  // Function to close the menu when a link is clicked (important for UX)
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isVisible ? '' : 'is-hidden'}`}>
      <div className="container header-content">
        {/* Logo Section (no changes here) */}
        <div className="logo">
          <span className="logo-text">APEX</span>
          <span className="logo-icon">▲</span>
          <span className="logo-subtext">ADVISORS</span>
        </div>

        {/* Navigation Menu (Desktop & Mobile) */}
        {/* The 'is-open' class will be added for styling the mobile menu */}
        <nav className={`nav-menu ${isMenuOpen ? 'is-open' : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                {/* Use the click handler to close the menu */}
                <a href={link.href} onClick={handleLinkClick}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Primary CTA Button (Desktop - hidden on small mobile via CSS) */}
        <a href="#consultation" className="cta-button desktop-cta">
          Schedule a Consultation
        </a>

        {/* Mobile Menu Icon */}
        {/* Toggle function is attached to the button */}
        <button className="mobile-menu-icon" onClick={toggleMenu} aria-expanded={isMenuOpen}>
          {isMenuOpen ? '✕' : '☰'} {/* Change icon based on state */}
        </button>
      </div>
    </header>
  );
};

export default Header;