import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { apiService } from '../api';
import { useAppContext } from '../context/AppContext';

const Admin: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    
    try {
      const user = await apiService.login(username, password);
      if (user) {
        dispatch({ type: 'SET_CURRENT_USER', payload: user });
        // Redirect after successful login
        navigate('/admin');
      } else {
        setLoginError('Invalid username or password');
      }
    } catch (error) {
      setLoginError('Login failed. Please try again.');
      console.error('Login error:', error);
    }
  };

  const handleLogout = () => {
    dispatch({ type: 'SET_CURRENT_USER', payload: null });
    setUsername('');
    setPassword('');
  };

  if (!state.currentUser) {
    return (
      <div className="container">
        <div className="reservation-form" style={{ maxWidth: '400px', margin: '50px auto' }}>
          <h2 className="text-center">Admin Login</h2>
          {loginError && <div className="alert alert-danger">{loginError}</div>}
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="admin-dashboard">
        <h1 className="text-center">Admin Dashboard</h1>
        <button className="btn btn-secondary" onClick={handleLogout} style={{ marginBottom: '20px' }}>
          Logout
        </button>
        
        <div className="admin-sections">
          <div className="card">
            <h3>Room Category Management</h3>
            <ul>
              <li><Link to="#">Add Room Category</Link></li>
              <li><Link to="#">Show All Room Category</Link></li>
              <li><Link to="#">Edit Room Category</Link></li>
              <li><Link to="#">Delete Room Category</Link></li>
            </ul>
          </div>
          
          <div className="card">
            <h3>Bookings</h3>
            <ul>
              <li><Link to="/rooms">Book Now</Link></li>
              <li><Link to="#">Show All Booked Rooms</Link></li>
              <li><Link to="#">Edit Booked Room</Link></li>
              <li><Link to="#">Customers</Link></li>
            </ul>
          </div>
          
          <div className="card">
            <h3>Additional Management</h3>
            <ul>
              <li><Link to="#">Add Manager</Link></li>
              <li><Link to="#">Services</Link></li>
              <li><Link to="#">Add Employee</Link></li>
              <li><Link to="#">Write Report</Link></li>
              <li><Link to="#">See Report</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;