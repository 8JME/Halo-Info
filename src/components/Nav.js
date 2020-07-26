import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <h3>Halo Info</h3>
        <ul className="nav-links">
            <Link className="navStyle" to="/about">
                <li>About</li>
            </Link>
            <Link className="navStyle" to="/medals">
                <li>Medals</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
