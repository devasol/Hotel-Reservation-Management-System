import React from 'react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <div className="container">
      <h1 className="text-center">Contact Us</h1>
      
      <div className="contact-info">
        <div className="contact-details">
          <h3>Hotel Information</h3>
          <p><strong>Address:</strong> Sar Bet, Kirkos Hills, Addis Ababa, Ethiopia</p>
          <p><strong>Email:</strong> luxuryhotel@gmail.com</p>
          <p><strong>Phone:</strong> +251 11 660 0011</p>
        </div>
        
        <div className="contact-form">
          <h3>Send us a message</h3>
          <form>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Your name" />
            </div>
            
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Your email" />
            </div>
            
            <div className="form-group">
              <label className="form-label">Subject</label>
              <input type="text" className="form-control" placeholder="Subject" />
            </div>
            
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows={5} placeholder="Your message"></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
      
      <div className="map-section" style={{ marginTop: '40px' }}>
        <h3>Find Us</h3>
        <div style={{ 
          width: '100%', 
          height: '400px', 
          backgroundColor: '#eee', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          borderRadius: '8px'
        }}>
          <span>Map Location: Luxury Hotel and Spa, Addis Ababa</span>
        </div>
      </div>
      
      <div className="text-center" style={{ marginTop: '30px' }}>
        <Link to="/" className="btn btn-secondary">Back to Home</Link>
      </div>
    </div>
  );
};

export default Contact;