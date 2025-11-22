import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { apiService } from '../api';
import { RoomCategory } from '../types';
import { FaCalendarAlt, FaCheck, FaArrowRight } from 'react-icons/fa';

const Reservation: React.FC = () => {
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [availableRooms, setAvailableRooms] = useState<RoomCategory[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setShowResults(false);
    
    try {
      // In a real app, we would check availability based on dates
      // For now, we'll just get all room categories
      const rooms = await apiService.getRoomCategories();
      setAvailableRooms(rooms);
      setShowResults(true);
    } catch (error) {
      console.error('Error searching for available rooms:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-center">Find Your Perfect Stay</h1>
        <p className="text-center" style={{ color: '#6c757d', marginBottom: '40px' }}>
          Select your dates to check room availability
        </p>
      </motion.div>
      
      <motion.div 
        className="reservation-form"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <form onSubmit={handleSearch}>
          <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div className="form-group">
              <label className="form-label">
                <FaCalendarAlt style={{ marginRight: '8px' }} /> Check In Date
              </label>
              <input
                type="date"
                className="date-picker"
                value={checkin}
                onChange={(e) => setCheckin(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">
                <FaCalendarAlt style={{ marginRight: '8px' }} /> Check Out Date
              </label>
              <input
                type="date"
                className="date-picker"
                value={checkout}
                onChange={(e) => setCheckout(e.target.value)}
                required
              />
            </div>
          </div>
          
          <motion.button 
            type="submit" 
            className="btn btn-primary btn-block"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
            style={{ marginTop: '20px' }}
          >
            {loading ? (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="loading" style={{ width: '16px', height: '16px', marginRight: '10px' }}></div>
                Checking Availability...
              </div>
            ) : (
              <>
                <FaCheck style={{ marginRight: '10px' }} /> Check Availability <FaArrowRight style={{ marginLeft: '10px' }} />
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
      
      {showResults && (
        <motion.div 
          className="available-rooms" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ marginTop: '40px' }}
        >
          <h2>Available Rooms</h2>
          {availableRooms.length > 0 ? (
            <div className="rooms-grid" style={{ display: 'grid', gap: '30px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {availableRooms.map((room, index) => (
                <motion.div 
                  key={room.roomname}
                  className="room-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="room-image-placeholder" style={{ position: 'relative' }}>
                    <div style={{ 
                      position: 'absolute', 
                      top: '10px', 
                      right: '10px', 
                      backgroundColor: 'var(--success-color)', 
                      color: 'white', 
                      padding: '5px 10px', 
                      borderRadius: '20px',
                      fontSize: '0.8rem'
                    }}>
                      {room.available} Available
                    </div>
                  </div>
                  <div className="room-details">
                    <h3 className="room-name">{room.roomname}</h3>
                    <div className="room-facilities">No of Beds: {room.no_bed} {room.bedtype} bed</div>
                    <div className="room-facilities">Facilities: {room.facility}</div>
                    <div className="room-price">Price: {room.price} tk/night</div>
                    <motion.button 
                      className="btn btn-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link to={`/book/${room.roomname}`} className="nav-link">
                        Book Now
                      </Link>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ textAlign: 'center', padding: '40px', fontSize: '1.2rem', color: '#6c757d' }}
            >
              No rooms available for the selected dates.
            </motion.p>
          )}
        </motion.div>
      )}
      
      <motion.div 
        className="text-center" 
        style={{ marginTop: '40px' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Link to="/" className="btn btn-outline">
          ← Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default Reservation;