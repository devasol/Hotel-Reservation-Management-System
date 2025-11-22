import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou: React.FC = () => {
  return (
    <div className="container">
      <div className="thank-you-container text-center">
        <i className="fas fa-check-circle" style={{ fontSize: '64px', color: '#28a745', marginBottom: '20px' }}></i>
        <h1>Thank You!</h1>
        <p>Your message has been received and we will contact you as soon as possible.</p>
        
        <div className="thank-you-actions">
          <button className="btn btn-primary">
            <Link to="/" className="nav-link">Return Home</Link>
          </button>
          <button className="btn btn-secondary">
            <Link to="/contact" className="nav-link">Contact Us Again</Link>
          </button>
        </div>
      </div>
      
      <div className="thank-you-content">
        <h2>What Happens Next?</h2>
        <div className="next-steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Confirmation</h3>
              <p>You will receive a confirmation email shortly with details of your inquiry.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Response</h3>
              <p>Our team will review your inquiry and get back to you within 24 hours.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Follow-up</h3>
              <p>If needed, we may contact you for additional information to better assist you.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;