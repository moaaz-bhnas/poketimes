import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Header = (props) => {
  // setTimeout(() => props.history.push('/contact'), 3000);
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

export default withRouter(Header); // Higher order component wraps another component to give it extra powers