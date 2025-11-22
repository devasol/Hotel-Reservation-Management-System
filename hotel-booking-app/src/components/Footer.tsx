import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaHotel, FaStar } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {[
          {
            title: "Contact Info",
            items: [
              { icon: <FaMapMarkerAlt />, text: "Sar Bet, Kirkos Hills, Addis Ababa, Ethiopia" },
              { icon: <FaPhone />, text: "+251 11 660 0011" },
              { icon: <FaEnvelope />, text: "luxuryhotel@gmail.com" },
              { icon: <FaClock />, text: "Open: 24 hours" }
            ]
          },
          {
            title: "Quick Links",
            items: [
              { text: "Home", link: "/" },
              { text: "Rooms", link: "/rooms" },
              { text: "Reservation", link: "/reservation" },
              { text: "About Us", link: "/about" },
              { text: "Contact", link: "/contact" }
            ]
          },
          {
            title: "Services",
            items: [
              { text: "Room Service", link: "/services" },
              { text: "Spa & Wellness", link: "/services" },
              { text: "Concierge", link: "/services" },
              { text: "Business Center", link: "/services" },
              { text: "Airport Transfer", link: "/services" }
            ]
          },
          {
            title: "Newsletter",
            newsletter: true,
            items: [
              { text: "Subscribe to our newsletter for special offers and updates" }
            ]
          }
        ].map((col, colIndex) => (
          <motion.div 
            key={col.title}
            className="footer-col"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: colIndex * 0.1 }}
          >
            <h4>{col.title}</h4>
            <ul>
              {col.items.map((item, itemIndex) => (
                <motion.li
                  key={itemIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: colIndex * 0.1 + itemIndex * 0.05 }}
                >
                  {item.link ? (
                    <a href={item.link}>{item.text}</a>
                  ) : (
                    <span>
                      {item.icon && <span className="footer-icon">{item.icon}</span>} {item.text}
                    </span>
                  )}
                </motion.li>
              ))}
            </ul>
            {col.newsletter && (
              <div className="newsletter-subscribe">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="form-control"
                  style={{ marginBottom: '10px', borderRadius: '4px', padding: '8px' }}
                />
                <button className="btn btn-primary" style={{ width: '100%' }}>Subscribe</button>
              </div>
            )}
          </motion.div>
        ))}
        
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-links">
            <motion.a
              href="#"
              whileHover={{ y: -5, backgroundColor: 'var(--primary-color)', scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <FaFacebookF />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -5, backgroundColor: 'var(--primary-color)', scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -5, backgroundColor: 'var(--primary-color)', scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -5, backgroundColor: 'var(--primary-color)', scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <FaLinkedinIn />
            </motion.a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <motion.div 
          className="footer-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{ textAlign: 'center', marginTop: '30px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}
        >
          <p>&copy; {new Date().getFullYear()} Luxury Hotel & Spa. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;