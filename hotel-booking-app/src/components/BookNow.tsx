import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { apiService } from '../api';
import { RoomCategory } from '../types';

const BookNow: React.FC = () => {
  const { roomName } = useParams<{ roomName: string }>();
  const navigate = useNavigate();
  const [room, setRoom] = useState<RoomCategory | null>(null);
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    if (roomName) {
      const fetchRoom = async () => {
        try {
          const roomData = await apiService.getRoomCategoryByName(roomName);
          if (roomData) {
            setRoom(roomData);
          } else {
            navigate('/rooms'); // Redirect if room not found
          }
        } catch (error) {
          console.error('Error fetching room:', error);
          navigate('/rooms');
        }
      };

      fetchRoom();
    }
  }, [roomName, navigate]);

  // Load saved form data if "Remember Me" was checked before
  useEffect(() => {
    if (rememberMe) {
      const savedCheckin = localStorage.getItem('checkin');
      const savedCheckout = localStorage.getItem('checkout');
      const savedName = localStorage.getItem('name');
      const savedPhone = localStorage.getItem('phone');
      
      if (savedCheckin) setCheckin(savedCheckin);
      if (savedCheckout) setCheckout(savedCheckout);
      if (savedName) setName(savedName);
      if (savedPhone) setPhone(savedPhone);
    }
  }, [rememberMe]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (rememberMe) {
      localStorage.setItem('checkin', checkin);
      localStorage.setItem('checkout', checkout);
      localStorage.setItem('name', name);
      localStorage.setItem('phone', phone);
    } else {
      // Clear saved data if remember me is unchecked
      localStorage.removeItem('checkin');
      localStorage.removeItem('checkout');
      localStorage.removeItem('name');
      localStorage.removeItem('phone');
    }

    try {
      const result = await apiService.bookRoom({
        checkin,
        checkout,
        name,
        phone,
        roomname: roomName!
      });
      
      alert(result);
      navigate('/'); // Redirect to home after successful booking
    } catch (error) {
      console.error('Error booking room:', error);
      alert('Error booking room. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!room) {
    return <div className="container text-center">Loading room details...</div>;
  }

  return (
    <div className="container">
      <h1 className="text-center">Book Now: {room.roomname}</h1>
      
      <form onSubmit={handleSubmit} className="reservation-form">
        <div className="form-group">
          <label className="form-label">Check In Date</label>
          <input
            type="date"
            className="form-control"
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Check Out Date</label>
          <input
            type="date"
            className="form-control"
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            required
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            required
          />
        </div>
        
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            /> Remember my information
          </label>
        </div>
        
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Booking...' : 'Book Now'}
        </button>
      </form>
      
      <div className="text-center" style={{ marginTop: '20px' }}>
        <Link to="/" className="btn btn-secondary">Back to Home</Link>
      </div>
    </div>
  );
};

export default BookNow;