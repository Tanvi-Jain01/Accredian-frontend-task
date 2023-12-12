// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="nav-item">Home</Link>
      <Link to="/footer" className="nav-item">About</Link>
      <Link to="/login" className="nav-item">Login</Link>
    </div>
  );
};

export default Navbar;
