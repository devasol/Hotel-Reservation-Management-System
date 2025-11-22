import React from 'react';
import { useParams, Link } from 'react-router-dom';

const RoomDetails: React.FC = () => {
  const { roomName } = useParams<{ roomName: string }>();
  
  // Mock room data
  const roomDetails = {
    name: roomName || "Deluxe Suite",
    description: "Our luxurious suite features a spacious bedroom with a king-size bed, a separate living area, and a marble bathroom with a soaking tub. Enjoy panoramic city views from the private balcony.",
    features: [
      "King-size bed with premium linens",
      "Separate living and dining areas",
      "Marble bathroom with soaking tub",
      "Private balcony with city views",
      "Smart TV with streaming capabilities",
      "Premium coffee maker",
      "Work desk with ergonomic chair",
      "Complimentary Wi-Fi",
      "In-room safe"
    ],
    amenities: [
      "24-hour room service",
      "Daily housekeeping",
      "Bathrobes and luxury toiletries",
      "Minibar with premium beverages",
      "Iron and ironing board"
    ],
    price: 350,
    size: "750 sq ft",
    capacity: "2 adults",
    bedType: "King-size",
    facilities: "AC, TV, WIFI, Balcony",
    images: [
      { id: 1, alt: "Room view 1" },
      { id: 2, alt: "Room view 2" },
      { id: 3, alt: "Bathroom" },
      { id: 4, alt: "Balcony" }
    ]
  };

  return (
    <div className="container">
      <h1 className="text-center">Room Details: {roomDetails.name}</h1>
      
      <div className="room-details-container">
        <div className="room-images">
          <div className="primary-image">
            <div 
              style={{ 
                height: '400px', 
                backgroundColor: '#ddd', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: '8px'
              }}
            >
              <span>Main Image: {roomDetails.name}</span>
            </div>
          </div>
          
          <div className="thumbnail-images">
            {roomDetails.images.map((img, index) => (
              <div 
                key={img.id} 
                style={{ 
                  height: '100px', 
                  backgroundColor: '#eee', 
                  margin: '5px',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <span>Thmb {index + 1}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="room-info">
          <h2>{roomDetails.name}</h2>
          <p className="room-description">{roomDetails.description}</p>
          
          <div className="room-specs">
            <div className="spec-item">
              <strong>Size:</strong> {roomDetails.size}
            </div>
            <div className="spec-item">
              <strong>Capacity:</strong> {roomDetails.capacity}
            </div>
            <div className="spec-item">
              <strong>Bed Type:</strong> {roomDetails.bedType}
            </div>
            <div className="spec-item">
              <strong>Facilities:</strong> {roomDetails.facilities}
            </div>
            <div className="spec-item price">
              <strong>Price:</strong> ${roomDetails.price}/night
            </div>
          </div>
          
          <div className="room-features">
            <h3>Room Features</h3>
            <ul>
              {roomDetails.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="room-amenities">
            <h3>In-Room Amenities</h3>
            <ul>
              {roomDetails.amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </div>
          
          <div className="room-actions">
            <button className="btn btn-primary">
              <Link to={`/book/${roomName}`} className="nav-link">Book Now</Link>
            </button>
            <button className="btn btn-secondary">Compare Rooms</button>
          </div>
        </div>
      </div>
      
      <div className="text-center" style={{ marginTop: '30px' }}>
        <Link to="/rooms" className="btn btn-secondary">Back to Rooms</Link>
      </div>
    </div>
  );
};

export default RoomDetails;