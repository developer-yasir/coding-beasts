import React from 'react';

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <div className="container">
        <h1 className="section-title text-center">Our Portfolio</h1>
        <p className="section-subtitle text-center">A showcase of our diverse and impactful projects.</p>
        
        <div className="portfolio-grid">
          {/* Example Portfolio Item */}
          <div className="portfolio-item">
            <img src="https://via.placeholder.com/400x250/6a11cb/ffffff?text=Project+Alpha" alt="Project Alpha" />
            <div className="portfolio-item-content">
              <h3>Project Alpha: E-commerce Redesign</h3>
              <p>A complete overhaul of an existing e-commerce platform, focusing on user experience and conversion rates.</p>
              <a href="#" className="btn-text">View Case Study</a>
            </div>
          </div>

          {/* Example Portfolio Item */}
          <div className="portfolio-item">
            <img src="https://via.placeholder.com/400x250/2575fc/ffffff?text=Project+Beta" alt="Project Beta" />
            <div className="portfolio-item-content">
              <h3>Project Beta: SaaS Dashboard Development</h3>
              <p>Developed a scalable and intuitive dashboard for a B2B SaaS application, integrating complex data visualizations.</p>
              <a href="#" className="btn-text">View Case Study</a>
            </div>
          </div>

          {/* Example Portfolio Item */}
          <div className="portfolio-item">
            <img src="https://via.placeholder.com/400x250/6a11cb/ffffff?text=Project+Gamma" alt="Project Gamma" />
            <div className="portfolio-item-content">
              <h3>Project Gamma: Mobile App for Fitness</h3>
              <p>Designed and built a cross-platform mobile application for fitness tracking, featuring real-time data synchronization.</p>
              <a href="#" className="btn-text">View Case Study</a>
            </div>
          </div>

          {/* Add more portfolio items as needed */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
