import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Home </Link>
          <Link to="/roster">Roster </Link>
          <Link to="/schedule">Schedule </Link>
          <Link to="/reactcomponent">React Component </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
