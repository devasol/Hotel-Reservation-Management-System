import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setError('');
    // In a real app, we would send a request to subscribe the user
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <div className="container">
      <h1 className="text-center">Subscribe to Our Newsletter</h1>
      
      <div className="newsletter-container">
        <div className="newsletter-content">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter to receive information about special offers, new room categories, and upcoming events at Luxury Hotel and Spa.</p>
          
          {isSubscribed ? (
            <div className="success-message">
              <i className="fas fa-check-circle" style={{ fontSize: '48px', color: '#28a745', marginBottom: '15px' }}></i>
              <h3>Thank You for Subscribing!</h3>
              <p>You'll receive our next newsletter shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="newsletter-form">
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {error && <div className="error-message">{error}</div>}
              </div>
              
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          )}
        </div>
        
        <div className="newsletter-benefits">
          <h3>Benefits of Subscribing</h3>
          <ul>
            <li>Exclusive discounts and special offers</li>
            <li>Early access to new room categories</li>
            <li>Updates on hotel events and activities</li>
            <li>Travel tips and destination guides</li>
            <li>Seasonal promotions</li>
          </ul>
        </div>
      </div>
      
      <div className="text-center" style={{ marginTop: '30px' }}>
        <Link to="/" className="btn btn-secondary">Back to Home</Link>
      </div>
    </div>
  );
};

export default NewsletterSignup;