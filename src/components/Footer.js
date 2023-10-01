import React from 'react';
import './Header.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Georgeson. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
