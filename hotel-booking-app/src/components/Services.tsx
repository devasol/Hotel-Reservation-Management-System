import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUtensils, FaSpa, FaBell, FaLaptop, FaWifi, FaSwimmingPool, FaConciergeBell, FaGlassCheers } from 'react-icons/fa';

const Services: React.FC = () => {
  const services = [
    { 
      icon: <FaUtensils />, 
      title: "Room Service", 
      description: "24/7 room service with a wide variety of dishes from our restaurants.",
      color: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)"
    },
    { 
      icon: <FaSpa />, 
      title: "Spa & Wellness", 
      description: "Relax and rejuvenate with our premium spa treatments and wellness programs.",
      color: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)"
    },
    { 
      icon: <FaConciergeBell />, 
      title: "Concierge", 
      description: "Our dedicated concierge team is here to assist with your travel arrangements and special requests.",
      color: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
    },
    { 
      icon: <FaLaptop />, 
      title: "Business Center", 
      description: "Complete business facilities with high-speed internet and meeting rooms.",
      color: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)"
    },
    { 
      icon: <FaWifi />, 
      title: "Free Wi-Fi", 
      description: "High-speed wireless internet access throughout the hotel.",
      color: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)"
    },
    { 
      icon: <FaSwimmingPool />, 
      title: "Swimming Pool", 
      description: "Beautiful indoor and outdoor pools for your relaxation and recreation.",
      color: "linear-gradient(135deg, #a6c0fe 0%, #f68084 100%)"
    }
  ];

  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-center">Our Premium Services</h1>
        <p className="text-center" style={{ color: '#6c757d', marginBottom: '40px' }}>
          Experience unparalleled luxury with our comprehensive services
        </p>
      </motion.div>
      
      <div className="services-grid" style={{ display: 'grid', gap: '30px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
            style={{ 
              padding: '30px', 
              borderRadius: '15px', 
              textAlign: 'center', 
              background: service.color,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              style={{ 
                fontSize: '3rem', 
                marginBottom: '20px', 
                color: '#333',
                backgroundColor: 'white',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {service.icon}
            </motion.div>
            <h3 style={{ marginBottom: '15px', fontSize: '1.5rem', color: '#333' }}>{service.title}</h3>
            <p style={{ color: '#333', marginBottom: '20px', flex: 1 }}>{service.description}</p>
            <motion.button 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/rooms" className="nav-link">Learn More</Link>
            </motion.button>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="text-center" 
        style={{ marginTop: '40px' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Link to="/" className="btn btn-outline">
          ← Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default Services;