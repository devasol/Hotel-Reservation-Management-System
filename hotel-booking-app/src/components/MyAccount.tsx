import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyAccount: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  // Mock user data
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    address: '123 Main St, City, Country'
  });

  // Mock reservations
  const reservations = [
    {
      id: 1,
      room: 'Family Suite',
      checkin: '2023-06-15',
      checkout: '2023-06-20',
      status: 'Confirmed'
    },
    {
      id: 2,
      room: 'Super Comfort',
      checkin: '2023-07-10',
      checkout: '2023-07-15',
      status: 'Pending'
    }
  ];

  const handleSaveProfile = () => {
    alert('Profile updated successfully!');
  };

  return (
    <div className="container">
      <h1 className="text-center">My Account</h1>
      
      <div className="account-container">
        <div className="account-sidebar">
          <ul>
            <li className={activeTab === 'profile' ? 'active' : ''} onClick={() => setActiveTab('profile')}>
              <Link to="#">Profile Information</Link>
            </li>
            <li className={activeTab === 'reservations' ? 'active' : ''} onClick={() => setActiveTab('reservations')}>
              <Link to="#">My Reservations</Link>
            </li>
            <li className={activeTab === 'settings' ? 'active' : ''} onClick={() => setActiveTab('settings')}>
              <Link to="#">Account Settings</Link>
            </li>
          </ul>
        </div>
        
        <div className="account-content">
          {activeTab === 'profile' && (
            <div className="profile-section">
              <h2>Profile Information</h2>
              <form>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={user.name} 
                    onChange={(e) => setUser({...user, name: e.target.value})}
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    value={user.email} 
                    onChange={(e) => setUser({...user, email: e.target.value})}
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input 
                    type="tel" 
                    className="form-control" 
                    value={user.phone} 
                    onChange={(e) => setUser({...user, phone: e.target.value})}
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Address</label>
                  <textarea 
                    className="form-control" 
                    rows={3}
                    value={user.address} 
                    onChange={(e) => setUser({...user, address: e.target.value})}
                  ></textarea>
                </div>
                
                <button type="button" className="btn btn-primary" onClick={handleSaveProfile}>
                  Save Changes
                </button>
              </form>
            </div>
          )}
          
          {activeTab === 'reservations' && (
            <div className="reservations-section">
              <h2>My Reservations</h2>
              {reservations.length > 0 ? (
                <div className="reservations-list">
                  {reservations.map(reservation => (
                    <div key={reservation.id} className="reservation-card">
                      <div className="reservation-details">
                        <h3>{reservation.room}</h3>
                        <p><strong>Check-in:</strong> {reservation.checkin}</p>
                        <p><strong>Check-out:</strong> {reservation.checkout}</p>
                        <p><strong>Status:</strong> <span className={`status ${reservation.status.toLowerCase()}`}>{reservation.status}</span></p>
                      </div>
                      <div className="reservation-actions">
                        <button className="btn btn-secondary">Modify</button>
                        <button className="btn btn-primary">View Details</button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>You have no reservations.</p>
              )}
            </div>
          )}
          
          {activeTab === 'settings' && (
            <div className="settings-section">
              <h2>Account Settings</h2>
              <div className="setting-item">
                <h3>Change Password</h3>
                <form>
                  <div className="form-group">
                    <label className="form-label">Current Password</label>
                    <input type="password" className="form-control" />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">New Password</label>
                    <input type="password" className="form-control" />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Confirm New Password</label>
                    <input type="password" className="form-control" />
                  </div>
                  
                  <button type="button" className="btn btn-primary">Update Password</button>
                </form>
              </div>
              
              <div className="setting-item" style={{ marginTop: '30px' }}>
                <h3>Notification Preferences</h3>
                <div className="form-group">
                  <label>
                    <input type="checkbox" defaultChecked /> Email notifications
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    <input type="checkbox" defaultChecked /> SMS notifications
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="text-center" style={{ marginTop: '30px' }}>
        <Link to="/" className="btn btn-secondary">Back to Home</Link>
      </div>
    </div>
  );
};

export default MyAccount;