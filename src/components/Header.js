import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <React.Fragment>
      <h1>Poke'Times</h1>

      <nav>
        <h2>Main Nav</h2>

        <ul role="menu">
          <li><NavLink to="/" role="menuitem">Home</NavLink></li>
          <li><NavLink to="/about" role="menuitem">About</NavLink></li>
          <li><NavLink to="/contact" role="menuitem">Contact</NavLink></li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Header;