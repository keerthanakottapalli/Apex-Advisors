// src/TestimonialsSection.jsx

import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const testimonialData = [
  {
    id: 1,
    quote: "Apex Advisors' strategic roadmap was the catalyst for our 40% growth this quarter. Their team is simply unmatched.",
    name: 'Sarah Chen',
    title: 'CEO, Innovatech Solutions',
    image: <FaUserCircle size={24} />
  },
  {
    id: 2,
    quote: "The deep-dive data analysis provided clear, actionable insights that immediately streamlined our global operations.",
    name: 'Michael Davis',
    title: 'VP of Operations, Global Dynamics',
    image: <FaUserCircle size={24} />
  },
  {
    id: 3,
    quote: "From financial modeling to technology implementation, their integrated approach saved us time and prevented costly errors.",
    name: 'Jessica Lee',
    title: 'CFO, NextGen Ventures',
    image: <FaUserCircle size={24} />
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="container">

        {/* Section Header */}
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Client success is the only metric that matters. Read our verified reviews.
        </p>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonialData.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <span className="quote-icon">“</span>
              <p className="testimonial-quote">{testimonial.quote}</p>

              <div className="client-info">
                <div className="client-image">{testimonial.image}</div>
                <div className="client-details">
                  <p className="client-name">{testimonial.name}</p>
                  <p className="client-title">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;