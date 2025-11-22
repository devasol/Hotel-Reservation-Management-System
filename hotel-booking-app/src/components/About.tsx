import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHotel, FaStar, FaMapMarkerAlt, FaClock, FaWifi, FaCar, FaDumbbell, FaSpa } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-center">About Luxury Hotel and Spa</h1>
        <p className="text-center" style={{ color: '#6c757d', marginBottom: '40px' }}>
          Where luxury meets comfort in the heart of Addis Ababa
        </p>
      </motion.div>
      
      <div className="about-content">
        <motion.div 
          className="about-description"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            Welcome to Luxury Hotel and Spa, Addis Ababa, where comfort meets luxury in the heart of Ethiopia's capital. 
            Located on a hilltop overlooking the city, safely nestled between the National Park and the prime minister's office, 
            our hotel offers a serene escape with breathtaking views of Addis Ababa.
          </p>
          
          <p>
            Our commitment to excellence is reflected in every aspect of our service. From our elegantly appointed rooms 
            and suites to our world-class amenities, we strive to provide an unforgettable experience for every guest.
          </p>
          
          <h3 style={{ marginTop: '30px', display: 'flex', alignItems: 'center' }}>
            <FaStar style={{ color: '#ffc107', marginRight: '10px' }} /> Our Amenities
          </h3>
          <motion.ul 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{ paddingLeft: '20px' }}
          >
            {[
              { icon: <FaWifi />, text: "Free Wi-Fi throughout the property" },
              { icon: <FaClock />, text: "24-hour services" },
              { icon: <FaSpa />, text: "Spa and relaxation facilities" },
              { icon: <FaDumbbell />, text: "24-hour Gym" },
              { icon: <FaCar />, text: "Parking for over 500 cars" },
              { icon: <FaClock />, text: "24-hour Delivery Service" }
            ].map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}
              >
                <span style={{ marginRight: '10px', color: '#0d6efd' }}>{item.icon}</span> {item.text}
              </motion.li>
            ))}
          </motion.ul>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h3 style={{ marginTop: '30px', display: 'flex', alignItems: 'center' }}>
              <FaHotel style={{ color: '#0d6efd', marginRight: '10px' }} /> Our Mission
            </h3>
            <p>
              Our mission is to provide exceptional hospitality experiences that exceed our guests' expectations. 
              We combine traditional Ethiopian warmth with international luxury standards to create memorable stays.
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ 
            height: '400px', 
            background: 'linear-gradient(45deg, #0d6efd, #6f42c1)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            margin: '20px 0',
            borderRadius: '15px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <FaHotel size={100} color="white" opacity={0.3} />
          <div style={{ 
            position: 'absolute', 
            bottom: '20px', 
            left: '20px', 
            right: '20px', 
            backgroundColor: 'rgba(0,0,0,0.7)',
            color: 'white',
            padding: '15px',
            borderRadius: '10px'
          }}>
            <h3 style={{ margin: 0, fontSize: '1.5rem' }}>Luxury Hotel & Spa</h3>
            <p style={{ margin: '5px 0 0', fontSize: '1rem', opacity: 0.9 }}>
              <FaMapMarkerAlt style={{ marginRight: '5px' }} /> Addis Ababa, Ethiopia
            </p>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="text-center" 
        style={{ marginTop: '40px' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Link to="/" className="btn btn-outline">
          ← Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default About;