import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavbarStyled from './NavbarStyled';

const Navbar = ({ isDark }) => {
  return (
    <NavbarStyled className={`${isDark ? 'theme-dark' : ''}`}>
      <div>
        <Link className="brand" to="/">
          EspoirSurPattes
        </Link>
        <ul>
          <li>
            <NavLink className="nav-links" to="/adoption"><span>Adoption</span></NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/news"><span>News</span></NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/association"><span>Association</span></NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/about"><span>About</span></NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/contact"><span>Contact</span></NavLink>
          </li>
        </ul>
      </div>
    </NavbarStyled>
  );
};

Navbar.propTypes = {
  isDark: PropTypes.bool.isRequired,
};

export default Navbar;
