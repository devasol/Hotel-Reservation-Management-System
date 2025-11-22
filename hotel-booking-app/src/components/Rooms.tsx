import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { apiService } from '../api';
import { RoomCategory } from '../types';

const Rooms: React.FC = () => {
  const [roomCategories, setRoomCategories] = useState<RoomCategory[]>([]);
  const [loading, setLoading] = useState(true);

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
    return <div className="container text-center">Loading rooms...</div>;
  }

  return (
    <div className="container">
      <h1 className="text-center">Our Rooms</h1>
      <div className="rooms-grid">
        {roomCategories.map((room) => (
          <div key={room.roomname} className="room-card">
            <div className="room-image-placeholder">
              {room.roomname} Room
            </div>
            <div className="room-details">
              <h3 className="room-name">{room.roomname}</h3>
              <div className="room-facilities">No of Beds: {room.no_bed} {room.bedtype} bed</div>
              <div className="room-facilities">Facilities: {room.facility}</div>
              <div className="room-price">Price: {room.price} tk/night</div>
              <div className="room-available">Available: {room.available} rooms</div>
              <div className="room-actions">
                <button className="btn btn-primary">
                  <Link to={`/room/${room.roomname}`} className="nav-link">View Details</Link>
                </button>
                <button className="btn btn-secondary">
                  <Link to={`/book/${room.roomname}`} className="nav-link">Book Now</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;