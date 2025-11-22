import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { apiService } from '../api';
import { RoomCategory } from '../types';

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
      <h1 className="text-center">Check Room Availability</h1>
      
      <form onSubmit={handleSearch} className="reservation-form">
        <div className="form-group">
          <label className="form-label">Check In Date</label>
          <input
            type="date"
            className="date-picker"
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Check Out Date</label>
          <input
            type="date"
            className="date-picker"
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
            required
          />
        </div>
        
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Checking...' : 'Check Availability'}
        </button>
      </form>
      
      {showResults && (
        <div className="available-rooms">
          <h2>Available Rooms</h2>
          {availableRooms.length > 0 ? (
            <div className="rooms-grid">
              {availableRooms.map((room) => (
                <div key={room.roomname} className="room-card">
                  <div className="room-image-placeholder">
                    {room.roomname} Room
                  </div>
                  <div className="room-details">
                    <h3 className="room-name">{room.roomname}</h3>
                    <div className="room-facilities">No of Beds: {room.no_bed} {room.bedtype} bed</div>
                    <div className="room-facilities">Available Rooms: {room.available}</div>
                    <div className="room-facilities">Facilities: {room.facility}</div>
                    <div className="room-price">Price: {room.price} tk/night</div>
                    <button className="btn btn-primary">
                      <Link to={`/book/${room.roomname}`} className="nav-link">Book Now</Link>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No rooms available for the selected dates.</p>
          )}
        </div>
      )}
      
      <div className="text-center" style={{ marginTop: '30px' }}>
        <Link to="/" className="btn btn-secondary">Back to Home</Link>
      </div>
    </div>
  );
};

export default Reservation;