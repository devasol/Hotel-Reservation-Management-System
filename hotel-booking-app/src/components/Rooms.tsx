import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { apiService } from '../api';
import { RoomCategory } from '../types';
import { FaBed, FaWifi, FaTv, FaShower, FaSnowflake, FaCouch, FaBalcony, FaCheckCircle } from 'react-icons/fa';

const Rooms: React.FC = () => {
  const [roomCategories, setRoomCategories] = useState<RoomCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await apiService.getRoomCategories();
        setRoomCategories(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching room categories:', error);
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  if (loading) {
    return (
      <div className="container text-center">
        <div className="spinner" style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '50vh' 
        }}>
          <div className="loading"></div>
          <span style={{ marginLeft: '10px' }}>Loading rooms...</span>
        </div>
      </div>
    );
  }

  // Function to render facility icons
  const renderFacilityIcons = (facilities: string) => {
    const facilityList = facilities.split(',').map(facility => facility.trim());
    const iconMap: Record<string, JSX.Element> = {
      'AC': <FaSnowflake title="Air Conditioning" />,
      'TV': <FaTv title="Television" />,
      'Wifi': <FaWifi title="Free Wi-Fi" />,
      'Sofa': <FaCouch title="Sofa" />,
      'Balcony': <FaBalcony title="Balcony" />,
    };

    return facilityList.map((facility, index) => {
      const icon = iconMap[facility] || <FaCheckCircle title={facility} />;
      return (
        <span key={index} style={{ margin: '0 5px' }}>
          {icon}
        </span>
      );
    });
  };

  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-center">Our Luxury Rooms</h1>
        <p className="text-center" style={{ marginBottom: '40px', color: '#6c757d' }}>
          Discover our premium accommodations designed for your comfort
        </p>
      </motion.div>

      <div className="rooms-grid" style={{ display: 'grid', gap: '30px', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
        {roomCategories.map((room, index) => (
          <motion.div
            key={room.roomname}
            className="room-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
            onClick={() => setSelectedCategory(selectedCategory === room.roomname ? null : room.roomname)}
            style={{ cursor: 'pointer', height: '100%' }}
          >
            <div className="room-image-placeholder" style={{ position: 'relative' }}>
              <div style={{ 
                position: 'absolute', 
                top: '15px', 
                right: '15px', 
                backgroundColor: 'var(--primary-color)', 
                color: 'white', 
                padding: '5px 15px', 
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: 'bold'
              }}>
                {room.available} Available
              </div>
            </div>
            <div className="room-details">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h3 className="room-name" style={{ margin: 0 }}>{room.roomname}</h3>
                <span className="room-price" style={{ fontSize: '1.3rem' }}>
                  {room.price} tk/night
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                <FaBed style={{ marginRight: '8px', color: '#0d6efd' }} />
                <span>{room.no_bed} {room.bedtype} bed</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                <span style={{ marginRight: '8px' }}>amenities:</span>
                <div>
                  {renderFacilityIcons(room.facility)}
                </div>
              </div>

              <div className="room-actions" style={{ marginTop: '20px' }}>
                <motion.button 
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to={`/room/${room.roomname}`} className="nav-link">
                    View Details
                  </Link>
                </motion.button>
                <motion.button 
                  className="btn btn-accent"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to={`/book/${room.roomname}`} className="nav-link">
                    Book Now
                  </Link>
                </motion.button>
              </div>

              {selectedCategory === room.roomname && (
                <motion.div 
                  className="room-extra-info"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ 
                    marginTop: '20px', 
                    paddingTop: '15px', 
                    borderTop: '1px solid #eee' 
                  }}
                >
                  <p><strong>Room Details:</strong></p>
                  <p>This {room.roomname} room features premium amenities and modern design to ensure your comfort during your stay.</p>
                  <p><strong>Capacity:</strong> Up to 4 guests</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;