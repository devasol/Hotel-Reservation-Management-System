import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="container text-center" style={{ marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      
      <div className="error-actions">
        <button className="btn btn-primary">
          <Link to="/" className="nav-link">Go to Home</Link>
        </button>
        <button className="btn btn-secondary">
          <Link to="/support" className="nav-link">Contact Support</Link>
        </button>
      </div>
      
      <div style={{ marginTop: '30px' }}>
        <h3>Popular Pages</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link to="/rooms">Rooms & Suites</Link></li>
          <li><Link to="/reservation">Make a Reservation</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default NotFound;