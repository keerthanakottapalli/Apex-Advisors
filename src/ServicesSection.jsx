// src/ServicesSection.jsx

import React from 'react';
import { FaCloud, FaChartLine, FaCogs } from 'react-icons/fa';

const servicesData = [
  {
    id: 1,
    icon: <FaCloud />, // Placeholder for Digital Transformation icon
    title: 'Digital Transformation',
    description: 'Modernizing legacy systems with cutting-edge cloud infrastructure, AI, and integrated software solutions.',
  },
  {
    id: 2,
    icon: <FaChartLine />, // Placeholder for Financial Modeling icon
    title: 'Financial Modeling',
    description: 'Building robust, predictive fiscal planning and budgeting models to forecast growth and manage risk.',
  },
  {
    id: 3,
    icon: <FaCogs />, // Placeholder for Operational Excellence icon
    title: 'Operational Excellence',
    description: 'Streamlining core business processes, optimizing supply chains, and maximizing overall enterprise efficiency.',
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        {/* Section Header */}
        <h2 className="section-title">Our Core Advisory Services</h2>
        <p className="section-subtitle">
          Expert strategies to guide your business through complexity and toward sustained growth.
        </p>

        {/* Services Grid */}
        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href={`/services/${service.id}`} className="service-link">
                Learn More &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;