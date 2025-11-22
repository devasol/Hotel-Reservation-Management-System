import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSwimmingPool, FaDumbbell, FaShip, FaSpa, FaWater, FaMicrophone, FaStar, FaCalendarAlt, FaBed } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <div className="container">
      <div className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-center">Luxury Hotel and Spa Addis Ababa</h1>
          <p className="text-center">Sar Bet, Kirkos Hills, Addis Ababa, Ethiopia</p>
        </motion.div>
        
        <motion.div 
          className="hotel-amenities"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>Our Premium Amenities</h2>
          <div className="amenities-list">
            {[
              { icon: <FaSwimmingPool />, label: "Swimming Pool" },
              { icon: <FaDumbbell />, label: "Gym & Yoga" },
              { icon: <FaShip />, label: "Boat Tours" },
              { icon: <FaSpa />, label: "Spa & Massage" },
              { icon: <FaWater />, label: "Surfing Lessons" },
              { icon: <FaMicrophone />, label: "Conference Room" }
            ].map((amenity, index) => (
              <motion.div 
                key={index}
                className="amenity-item"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  padding: '15px',
                  backgroundColor: 'white',
                  borderRadius: '10px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ fontSize: '2rem', color: '#0d6efd', marginBottom: '10px' }}>
                  {amenity.icon}
                </div>
                <span>{amenity.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="featured-rooms"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2>Featured Rooms</h2>
          <div className="rooms-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {[
              { name: "Standard Luxury Rooms", price: "$129", description: "Perfect for business travelers seeking comfort" },
              { name: "Suite Luxury Rooms", price: "$300", description: "Spacious living with premium furnishings" },
              { name: "Presidential Suites Room", price: "$350", description: "Ultimate luxury with panoramic views" }
            ].map((room, index) => (
              <motion.div
                key={index}
                className="room-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -10 }}
                style={{ height: '100%' }}
              >
                <div className="room-image-placeholder" style={{ position: 'relative' }}>
                  <FaBed style={{ fontSize: '3rem', color: '#0d6efd' }} />
                  <div style={{ 
                    position: 'absolute', 
                    top: '10px', 
                    right: '10px', 
                    backgroundColor: 'var(--accent-color)', 
                    color: 'white', 
                    padding: '5px 10px', 
                    borderRadius: '20px',
                    fontSize: '0.8rem'
                  }}>
                    <FaStar style={{ marginRight: '3px' }} /> 4.8
                  </div>
                </div>
                <div className="room-details">
                  <h3>{room.name}</h3>
                  <p style={{ color: '#666', marginBottom: '10px' }}>{room.description}</p>
                  <p><strong>{room.price} <span style={{ fontSize: '0.9em', color: '#666' }}>per night</span></strong></p>
                  <button className="btn btn-primary">
                    <Link to="/rooms" className="nav-link">
                      <FaCalendarAlt style={{ marginRight: '8px' }} /> View Details
                    </Link>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="reservation-cta"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ textAlign: 'center', margin: '40px 0' }}
        >
          <h2>Ready to book your stay?</h2>
          <Link to="/reservation" className="btn btn-primary btn-lg">
            <FaCalendarAlt style={{ marginRight: '10px' }} /> Make Reservation
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;