import React from 'react';
import { Link } from 'react-router-dom';

const SiteMap: React.FC = () => {
  return (
    <div className="container">
      <h1 className="text-center">Site Map</h1>
      
      <div className="sitemap-container">
        <div className="sitemap-content">
          <div className="sitemap-section">
            <h2>Pages</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/rooms">Rooms & Suites</Link></li>
              <li><Link to="/room/duplex">Duplex Suite</Link></li>
              <li><Link to="/room/family">Family Room</Link></li>
              <li><Link to="/room/super-comfort">Super Comfort Room</Link></li>
              <li><Link to="/reservation">Reservation</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/offers">Special Offers</Link></li>
              <li><Link to="/reviews">Reviews</Link></li>
              <li><Link to="/support">Support</Link></li>
            </ul>
          </div>
          
          <div className="sitemap-section">
            <h2>My Account</h2>
            <ul>
              <li><Link to="/account">My Account</Link></li>
              <li><Link to="/account">Profile Information</Link></li>
              <li><Link to="/account">My Reservations</Link></li>
              <li><Link to="/account">Account Settings</Link></li>
            </ul>
          </div>
          
          <div className="sitemap-section">
            <h2>Legal</h2>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
              <li><Link to="/faq">Cancellation Policy</Link></li>
            </ul>
          </div>
          
          <div className="sitemap-section">
            <h2>Booking Process</h2>
            <ul>
              <li><Link to="/rooms">Browse Rooms</Link></li>
              <li><Link to="/reservation">Check Availability</Link></li>
              <li><Link to="/book/duplex">Book a Room</Link></li>
              <li><Link to="/payment/duplex">Make Payment</Link></li>
              <li><Link to="/confirmation/duplex">Confirmation</Link></li>
            </ul>
          </div>
          
          <div className="sitemap-section">
            <h2>Additional Resources</h2>
            <ul>
              <li><Link to="/newsletter">Newsletter</Link></li>
              <li><Link to="/contact">Contact Form</Link></li>
              <li><Link to="/support">Support Center</Link></li>
              <li><Link to="/faq">Help Center</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="text-center" style={{ marginTop: '30px' }}>
        <Link to="/" className="btn btn-secondary">Back to Home</Link>
      </div>
    </div>
  );
};

export default SiteMap;