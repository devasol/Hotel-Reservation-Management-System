import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BookingConfirmation: React.FC = () => {
  // In a real app, this would come from state or API
  const { roomName } = useParams<{ roomName: string }>();
  
  // Mock booking details
  const bookingDetails = {
    bookingId: 'BK-2023-001',
    roomType: roomName || 'Deluxe Suite',
    guestName: 'John Doe',
    checkin: '2023-06-15',
    checkout: '2023-06-20',
    nights: 5,
    roomRate: 250,
    totalAmount: 1250,
    status: 'Confirmed'
  };

  return (
    <div className="container">
      <div className="confirmation-container">
        <h1 className="text-center">Booking Confirmation</h1>
        
        <div className="confirmation-card">
          <div className="confirmation-icon">
            <i className="fas fa-check-circle" style={{ fontSize: '48px', color: '#28a745' }}></i>
          </div>
          
          <h2>Thank you for your booking!</h2>
          <p>Your reservation has been confirmed successfully.</p>
          
          <div className="booking-details">
            <h3>Booking Details</h3>
            
            <div className="detail-row">
              <span className="detail-label">Booking ID:</span>
              <span className="detail-value">{bookingDetails.bookingId}</span>
            </div>
            
            <div className="detail-row">
              <span className="detail-label">Room Type:</span>
              <span className="detail-value">{bookingDetails.roomType}</span>
            </div>
            
            <div className="detail-row">
              <span className="detail-label">Guest Name:</span>
              <span className="detail-value">{bookingDetails.guestName}</span>
            </div>
            
            <div className="detail-row">
              <span className="detail-label">Check-in:</span>
              <span className="detail-value">{bookingDetails.checkin}</span>
            </div>
            
            <div className="detail-row">
              <span className="detail-label">Check-out:</span>
              <span className="detail-value">{bookingDetails.checkout}</span>
            </div>
            
            <div className="detail-row">
              <span className="detail-label">Number of Nights:</span>
              <span className="detail-value">{bookingDetails.nights}</span>
            </div>
            
            <div className="detail-row">
              <span className="detail-label">Room Rate (per night):</span>
              <span className="detail-value">${bookingDetails.roomRate}</span>
            </div>
            
            <div className="detail-row total">
              <span className="detail-label">Total Amount:</span>
              <span className="detail-value">${bookingDetails.totalAmount}</span>
            </div>
            
            <div className="detail-row">
              <span className="detail-label">Status:</span>
              <span className={`detail-value status ${bookingDetails.status.toLowerCase()}`}>
                {bookingDetails.status}
              </span>
            </div>
          </div>
          
          <div className="confirmation-actions">
            <button className="btn btn-primary">
              <Link to="/account" className="nav-link">View My Account</Link>
            </button>
            <button className="btn btn-secondary">
              <Link to="/" className="nav-link">Back to Home</Link>
            </button>
          </div>
        </div>
        
        <div className="booking-tips">
          <h3>Before You Arrive</h3>
          <ul>
            <li>Please bring a valid photo ID and credit card for the security deposit</li>
            <li>Check-in time is from 2:00 PM onwards</li>
            <li>If you expect to arrive earlier, please contact us in advance</li>
            <li>Early check-in and late check-out is subject to availability</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;