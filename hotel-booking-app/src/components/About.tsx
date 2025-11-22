import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="container">
      <h1 className="text-center">About Luxury Hotel and Spa</h1>
      
      <div className="about-content">
        <div className="about-description">
          <p>
            Welcome to Luxury Hotel and Spa, Addis Ababa, where comfort meets luxury in the heart of Ethiopia's capital. 
            Located on a hilltop overlooking the city, safely nestled between the National Park and the prime minister's office, 
            our hotel offers a serene escape with breathtaking views of Addis Ababa.
          </p>
          
          <p>
            Our commitment to excellence is reflected in every aspect of our service. From our elegantly appointed rooms 
            and suites to our world-class amenities, we strive to provide an unforgettable experience for every guest.
          </p>
          
          <h3>Our Amenities</h3>
          <ul>
            <li>Free Wi-Fi throughout the property</li>
            <li>24-hour services</li>
            <li>Spa and relaxation facilities</li>
            <li>24-hour Gym</li>
            <li>Parking for over 500 cars</li>
            <li>24-hour Delivery Service</li>
          </ul>
          
          <h3>Our Mission</h3>
          <p>
            Our mission is to provide exceptional hospitality experiences that exceed our guests' expectations. 
            We combine traditional Ethiopian warmth with international luxury standards to create memorable stays.
          </p>
        </div>
        
        <div className="about-image" style={{ 
          height: '400px', 
          backgroundColor: '#ddd', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          margin: '20px 0',
          borderRadius: '8px'
        }}>
          <span>Luxury Hotel Exterior</span>
        </div>
      </div>
      
      <div className="text-center" style={{ marginTop: '30px' }}>
        <Link to="/" className="btn btn-secondary">Back to Home</Link>
      </div>
    </div>
  );
};

export default About;