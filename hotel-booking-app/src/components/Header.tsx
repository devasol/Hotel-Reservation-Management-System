import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h2 className="luxury-2">Luxury Hotel</h2>
        <nav>
          <ul className="nav-links">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/rooms" className="nav-link">Rooms</Link></li>
            <li><Link to="/reservation" className="nav-link">Reservation</Link></li>
            <li><Link to="/gallery" className="nav-link">Gallery</Link></li>
            <li><Link to="/services" className="nav-link">Services</Link></li>
            <li><Link to="/admin" className="nav-link">Admin</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;