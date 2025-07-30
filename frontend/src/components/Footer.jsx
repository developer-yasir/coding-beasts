
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about-us">
            <h3 className="footer-title">Coding Beasts</h3>
            <p>We are a team of passionate developers dedicated to crafting high-quality web and mobile solutions that drive business growth and enhance user experiences.</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </div>
          <div className="footer-section quick-links">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
          <div className="footer-section contact-info">
            <h3 className="footer-title">Contact Info</h3>
            <p><i className="fas fa-map-marker-alt"></i> 123 Tech Street, Innovation City, TX 78701</p>
            <p><i className="fas fa-phone"></i> +1 (555) 123-4567</p>
            <p><i className="fas fa-envelope"></i> info@codingbeasts.com</p>
            <p><i className="fas fa-clock"></i> Mon - Fri: 9:00 AM - 5:00 PM</p>
          </div>
          <div className="footer-section newsletter">
            <h3 className="footer-title">Newsletter</h3>
            <p>Stay updated with our latest news and offers.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button type="submit" className="btn-subscribe">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Coding Beasts. All Rights Reserved.</p>
          <div className="footer-legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
