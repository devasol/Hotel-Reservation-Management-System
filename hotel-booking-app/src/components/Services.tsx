import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="container">
      <h1 className="text-center">Hotel Services</h1>
      <div className="services-grid">
        <div className="service-card">
          <h3>Room Service</h3>
          <p>24/7 room service with a wide variety of dishes from our restaurants.</p>
        </div>
        <div className="service-card">
          <h3>Spa & Wellness</h3>
          <p>Relax and rejuvenate with our premium spa treatments and wellness programs.</p>
        </div>
        <div className="service-card">
          <h3>Concierge</h3>
          <p>Our dedicated concierge team is here to assist with your travel arrangements and special requests.</p>
        </div>
        <div className="service-card">
          <h3>Business Center</h3>
          <p>Complete business facilities with high-speed internet and meeting rooms.</p>
        </div>
        <div className="service-card">
          <h3>Free Wi-Fi</h3>
          <p>High-speed wireless internet access throughout the hotel.</p>
        </div>
        <div className="service-card">
          <h3>Swimming Pool</h3>
          <p>Beautiful indoor and outdoor pools for your relaxation and recreation.</p>
        </div>
      </div>
      
      <div className="text-center" style={{ marginTop: '30px' }}>
        <Link to="/" className="btn btn-secondary">Back to Home</Link>
      </div>
    </div>
  );
};

export default Services;