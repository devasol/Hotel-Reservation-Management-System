import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="container">
      <div className="hero-section">
        <h1 className="text-center">Luxury Hotel and Spa Addis Ababa</h1>
        <p className="text-center">Sar Bet, Kirkos Hills, Addis Ababa, Ethiopia</p>
        
        <div className="hotel-amenities">
          <h2>Our Amenities</h2>
          <div className="amenities-list">
            <div className="amenity-item">
              <i className="fa-solid fa-water-ladder"></i>
              <span>Swimming pool</span>
            </div>
            <div className="amenity-item">
              <i className="fa-solid fa-dumbbell"></i>
              <span>Gym & yoga</span>
            </div>
            <div className="amenity-item">
              <i className="fa-solid fa-ship"></i>
              <span>Boat Tours</span>
            </div>
            <div className="amenity-item">
              <i className="fa-solid fa-spa"></i>
              <span>Spa & massage</span>
            </div>
            <div className="amenity-item">
              <i className="fa-solid fa-person-swimming"></i>
              <span>Surfing Lessons</span>
            </div>
            <div className="amenity-item">
              <i className="fa-solid fa-microphone"></i>
              <span>Conference room</span>
            </div>
          </div>
        </div>

        <div className="featured-rooms">
          <h2>Featured Rooms</h2>
          <div className="rooms-grid">
            <div className="room-card">
              <div className="room-image-placeholder">Standard Luxury Room</div>
              <div className="room-details">
                <h3>Standard Luxury Rooms</h3>
                <p>$129 /per night</p>
                <button className="btn btn-primary">
                  <Link to="/rooms" className="nav-link">View Details</Link>
                </button>
              </div>
            </div>
            <div className="room-card">
              <div className="room-image-placeholder">Suite Luxury Room</div>
              <div className="room-details">
                <h3>Suite Luxury Rooms</h3>
                <p>$300 /per night</p>
                <button className="btn btn-primary">
                  <Link to="/rooms" className="nav-link">View Details</Link>
                </button>
              </div>
            </div>
            <div className="room-card">
              <div className="room-image-placeholder">Presidential Suite</div>
              <div className="room-details">
                <h3>Presidential Suites Room</h3>
                <p>$350 /per night</p>
                <button className="btn btn-primary">
                  <Link to="/rooms" className="nav-link">View Details</Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="reservation-cta">
          <h2>Ready to book your stay?</h2>
          <Link to="/reservation" className="btn btn-primary">Make Reservation</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;