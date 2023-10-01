import React from 'react';
import { Link } from 'react-router-dom'; 

import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img className="logo" src="logo.png" alt=":3" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
