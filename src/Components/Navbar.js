import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <Link
        to="/about"
        className="navbar__item button button--small button--primary-neutral"
      >
        About
      </Link>
      <Link
        to="/"
        className="navbar__item button button--small button--primary-neutral"
      >
        Home
      </Link>
      <Link
        to="/login"
        className="navbar__item button button--small button--secondary"
      >
        Login
      </Link>
    </div>
  );
}

export default Navbar;
