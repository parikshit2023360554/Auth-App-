import React from 'react';
import { useAuth } from '../context/AuthContext';
import './Home.css';

const Home = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <div className="welcome-section">
          <h1>Welcome, {user?.name}!</h1>
          <p>You have successfully logged into your account.</p>
        </div>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>

      <div className="home-content">
        <div className="user-info-card">
          <h3>Your Profile</h3>
          <div className="user-details">
            <div className="detail-item">
              <span className="label">Name:</span>
              <span className="value">{user?.name}</span>
            </div>
            <div className="detail-item">
              <span className="label">Email:</span>
              <span className="value">{user?.email}</span>
            </div>
            <div className="detail-item">
              <span className="label">User ID:</span>
              <span className="value">{user?.id}</span>
            </div>
          </div>
        </div>

        <div className="features-card">
          <h3>What's Next?</h3>
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon">🔒</div>
              <div className="feature-content">
                <h4>Secure Authentication</h4>
                <p>Your account is protected with JWT tokens and secure password hashing.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">👤</div>
              <div className="feature-content">
                <h4>User Profile</h4>
                <p>Manage your personal information and account settings.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🚀</div>
              <div className="feature-content">
                <h4>Ready to Expand</h4>
                <p>This authentication system is ready for additional features and functionality.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;