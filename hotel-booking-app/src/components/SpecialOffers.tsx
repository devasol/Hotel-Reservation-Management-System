import React from 'react';
import { Link } from 'react-router-dom';

const SpecialOffers: React.FC = () => {
  const offers = [
    {
      id: 1,
      title: "Weekend Getaway",
      description: "Book 2 nights on weekends and get 25% off our standard rates.",
      discount: "25% OFF",
      valid: "Valid until Dec 31, 2023",
      roomType: "All Room Categories"
    },
    {
      id: 2,
      title: "Extended Stay",
      description: "Stay 5 nights or more and save up to 30% on your reservation.",
      discount: "30% OFF",
      valid: "Valid until Dec 31, 2023",
      roomType: "All Room Categories"
    },
    {
      id: 3,
      title: "Honeymoon Package",
      description: "Special package for newlyweds including breakfast and spa credit.",
      discount: "Special Package",
      valid: "Year round",
      roomType: "Suite Categories"
    },
    {
      id: 4,
      title: "Business Class",
      description: "Special rates for business travelers with flexible check-in/out.",
      discount: "Special Rates",
      valid: "Year round",
      roomType: "Executive Room Categories"
    },
    {
      id: 5,
      title: "Family Fun",
      description: "Extra bed and breakfast included for children under 12.",
      discount: "Free for Kids",
      valid: "Year round",
      roomType: "Family Room Categories"
    },
    {
      id: 6,
      title: "Early Bird",
      description: "Book 30 days in advance and save 15% on your stay.",
      discount: "15% OFF",
      valid: "Bookings made 30+ days in advance",
      roomType: "All Room Categories"
    }
  ];

  return (
    <div className="container">
      <h1 className="text-center">Special Offers</h1>
      
      <div className="offers-intro">
        <p>Take advantage of our exclusive offers for an unforgettable stay at Luxury Hotel and Spa. Whether you're traveling for business or pleasure, we have special packages to enhance your experience.</p>
      </div>
      
      <div className="offers-grid">
        {offers.map(offer => (
          <div key={offer.id} className="offer-card">
            <div className="offer-header">
              <h3>{offer.title}</h3>
              <span className="discount-badge">{offer.discount}</span>
            </div>
            <div className="offer-details">
              <p>{offer.description}</p>
              <div className="offer-meta">
                <p><strong>Valid:</strong> {offer.valid}</p>
                <p><strong>Applies to:</strong> {offer.roomType}</p>
              </div>
            </div>
            <div className="offer-actions">
              <button className="btn btn-primary">
                <Link to="/rooms" className="nav-link">View Details</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="offer-terms">
        <h3>Terms and Conditions</h3>
        <ul>
          <li>Special offers are subject to availability</li>
          <li>Offers cannot be combined with other promotions</li>
          <li>Additional taxes and fees may apply</li>
          <li>Offers may be withdrawn at any time</li>
        </ul>
      </div>
      
      <div className="text-center" style={{ marginTop: '30px' }}>
        <Link to="/" className="btn btn-secondary">Back to Home</Link>
      </div>
    </div>
  );
};

export default SpecialOffers;