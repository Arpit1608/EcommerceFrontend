// frontend/src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import './Navbar.css';

const Navbar = ({ isAuthenticated, user, onLogout, onSearch }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">E-Commerce Store</Link>

        {/* Search bar in the middle */}
        <div className="navbar-search">
          <SearchBar onSearch={onSearch} />
        </div>

        <div className="nav-links">
          {isAuthenticated ? (
            <>
              <span className="welcome">Welcome, {user}</span>
              <button onClick={onLogout} className="logout-btn">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="nav-link">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
