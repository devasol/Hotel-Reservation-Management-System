import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHotel, FaBed, FaCalendarAlt, FaCamera, FaUtensils, FaInfoCircle, FaEnvelope, FaQuestion, FaCog } from 'react-icons/fa';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define icons for each route
  const getIcon = (path: string) => {
    switch(path) {
      case '/': return <FaHotel />;
      case '/rooms': return <FaBed />;
      case '/reservation': return <FaCalendarAlt />;
      case '/gallery': return <FaCamera />;
      case '/services': return <FaUtensils />;
      case '/about': return <FaInfoCircle />;
      case '/contact': return <FaEnvelope />;
      case '/faq': return <FaQuestion />;
      case '/admin': return <FaCog />;
      default: return <FaHotel />;
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <motion.h2 
          className="luxury-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaHotel style={{ marginRight: '10px' }} /> Luxury Hotel
        </motion.h2>
        <nav>
          <ul className="nav-links">
            {[
              { path: '/', label: 'Home' },
              { path: '/rooms', label: 'Rooms' },
              { path: '/reservation', label: 'Reservation' },
              { path: '/gallery', label: 'Gallery' },
              { path: '/services', label: 'Services' },
              { path: '/about', label: 'About' },
              { path: '/contact', label: 'Contact' },
              { path: '/faq', label: 'FAQ' },
              { path: '/admin', label: 'Admin' }
            ].map((item, index) => (
              <motion.li
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -3 }}
              >
                <Link 
                  to={item.path} 
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {getIcon(item.path)} {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;